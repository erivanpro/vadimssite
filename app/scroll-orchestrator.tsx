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
    const sectionItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]"),
    );
    const navItems = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-item]"),
    );

    root.classList.add("has-scroll-effects");

    let ticking = false;
    let activeSection = "";

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

    let observer: IntersectionObserver | undefined;

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
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
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
    };
  }, []);

  return null;
}
