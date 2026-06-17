"use client";

import { useEffect, useState } from "react";

const storageKey = "limitless-cookie-window-dismissed";

export default function CookieWindow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.localStorage.getItem(storageKey) !== "true");
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(storageKey, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-window-layer" aria-live="polite">
      <section
        className="cookie-window-card"
        role="dialog"
        aria-labelledby="cookie-window-title"
        aria-describedby="cookie-window-description"
      >
        <button
          type="button"
          className="cookie-window-close"
          aria-label="Close cookie window"
          onClick={dismiss}
        >
          &times;
        </button>

        <div className="cookie-window-mark" aria-hidden="true">
          <span className="cookie-window-mark-piece cookie-window-mark-top" />
          <span className="cookie-window-mark-piece cookie-window-mark-center" />
          <span className="cookie-window-mark-piece cookie-window-mark-bottom" />
        </div>

        <p className="cookie-window-eyebrow">Cookie preferences</p>
        <h2 id="cookie-window-title">Cookies on Limitless</h2>
        <p id="cookie-window-description">
          We use cookies to keep the platform secure, remember your choices, and
          improve rentals across the marketplace.
        </p>

        <div className="cookie-window-actions">
          <button type="button" className="cookie-window-primary" onClick={dismiss}>
            Accept cookies
          </button>
          <button type="button" className="cookie-window-secondary" onClick={dismiss}>
            Manage choices
          </button>
        </div>

        <button type="button" className="cookie-window-link" onClick={dismiss}>
          Decline optional
        </button>
      </section>
    </div>
  );
}
