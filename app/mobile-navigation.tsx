"use client";

import { useEffect, useState } from "react";

import { LanguageSettingsButton } from "./language-provider";
import type { Dictionary } from "./lib/dictionaries";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

type MobileNavigationProps = {
  items: NavItem[];
  labels: Dictionary["common"]["nav"];
  languageLabel: string;
};

export function MobileNavigation({
  items,
  labels,
  languageLabel,
}: MobileNavigationProps) {
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
          aria-label={isOpen ? labels.mobileClose : labels.mobileOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="hamburger-glyph" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <a
          className="mobile-ticket-button"
          href="#reserve"
          aria-label={labels.mobileTicketAria}
        >
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
            data-nav-item={item.id}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <LanguageSettingsButton
          className="is-mobile-menu"
          label={languageLabel}
          tabIndex={isOpen ? 0 : -1}
          onOpen={() => setIsOpen(false)}
        />
      </div>
    </>
  );
}
