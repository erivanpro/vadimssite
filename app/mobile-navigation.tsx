"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavigationProps = {
  items: NavItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <div className="mobile-nav-actions">
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-journey-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="hamburger-glyph" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <a className="mobile-ticket-button" href="#reserve" aria-label="Book Ticket">
          <span className="ticket-glyph" aria-hidden="true" />
        </a>
      </div>

      <div
        className={`mobile-menu-panel${isOpen ? " is-open" : ""}`}
        id="mobile-journey-menu"
        aria-hidden={!isOpen}
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            data-nav-item={item.href.replace("#", "")}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
