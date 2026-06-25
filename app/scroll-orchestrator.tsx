"use client";

import { useEffect } from "react";

export function ScrollOrchestrator() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    const progressItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-progress]"),
    );
    const sectionItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]"),
    );
    const navItems = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-item]"),
    );

    root.classList.add("has-scroll-effects");

    let ticking = false;
    let activeSection = "";
    let observer: IntersectionObserver | undefined;

    const revealVisibleItems = () => {
      if (reduceMotion) {
        return;
      }

      revealItems.forEach((item) => {
        if (item.classList.contains("is-visible")) {
          return;
        }

        const rect = item.getBoundingClientRect();
        const revealLine = window.innerHeight * 0.9;
        const isVisible = rect.top <= revealLine && rect.bottom >= 0;

        if (isVisible) {
          item.classList.add("is-visible");
          observer?.unobserve(item);
        }
      });
    };

    const updateActiveSection = () => {
      if (sectionItems.length === 0 || navItems.length === 0) {
        return;
      }

      const scanLine = window.innerHeight * 0.46;
      const current = sectionItems.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= scanLine && rect.bottom >= scanLine;
      });
      const nextSection = current?.dataset.sectionId ?? "";

      if (nextSection === activeSection) {
        return;
      }

      activeSection = nextSection;
      root.dataset.activeSection = activeSection;

      navItems.forEach((item) => {
        const isActive = item.dataset.navItem === activeSection;

        item.classList.toggle("is-active", isActive);

        if (isActive) {
          item.setAttribute("aria-current", "true");
        } else {
          item.removeAttribute("aria-current");
        }
      });
    };

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

      root.style.setProperty("--scroll-y", scrollY.toFixed(2));
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.dataset.scrolled = scrollY > 28 ? "true" : "false";
      updateActiveSection();
      revealVisibleItems();

      progressItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const distance = window.innerHeight + rect.height;
        const itemProgress = Math.min(
          1,
          Math.max(0, (window.innerHeight - rect.top) / distance),
        );

        item.style.setProperty("--view-progress", itemProgress.toFixed(4));
      });

      if (!reduceMotion) {
        const viewportCenter = window.innerHeight / 2;

        parallaxItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const speed = Number(item.dataset.parallax ?? "0.08");
          const elementCenter = rect.top + rect.height / 2;
          const offset = (elementCenter - viewportCenter) * speed;

          item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
        });
      }

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.12,
        },
      );

      revealItems.forEach((item) => observer?.observe(item));
    }

    updateScrollState();

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        const targetElement = document.getElementById(
          decodeURIComponent(window.location.hash.slice(1)),
        );

        targetElement?.scrollIntoView({ block: "start" });
        requestTick();
      });
    }

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link) {
        return;
      }

      const targetId = decodeURIComponent(link.hash.slice(1));
      const targetElement = targetId
        ? document.getElementById(targetId)
        : undefined;

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      if (window.location.hash !== link.hash) {
        window.history.pushState(null, "", link.hash);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      observer?.disconnect();
      navItems.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("aria-current");
      });
      root.classList.remove("has-scroll-effects");
      delete root.dataset.scrolled;
      delete root.dataset.activeSection;
      root.style.removeProperty("--scroll-y");
      root.style.removeProperty("--scroll-progress");
      progressItems.forEach((item) => {
        item.style.removeProperty("--view-progress");
      });
    };
  }, []);

  return null;
}
