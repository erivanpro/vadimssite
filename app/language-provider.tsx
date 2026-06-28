"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { Dictionary } from "./lib/dictionaries";
import {
  type Locale,
  isLocale,
  localeCookieName,
  localeLabels,
  localeStorageKey,
  locales,
  pathWithLocale,
} from "./lib/locales";

type LanguageContextValue = {
  ariaLabel: string;
  locale: Locale;
  openSettings: () => void;
};

type LanguageCopy = Dictionary["language"];
type CommonCopy = Dictionary["common"];

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
}

function persistLanguage(locale: Locale) {
  window.localStorage.setItem(localeStorageKey, locale);
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

function localizedCurrentPath(locale: Locale) {
  return `${pathWithLocale(locale, window.location.pathname)}${window.location.search}${window.location.hash}`;
}

function switchLanguage(locale: Locale) {
  const nextPath = localizedCurrentPath(locale);

  if (nextPath !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
    window.location.assign(nextPath);
  }
}

export function LanguageProvider({
  children,
  common,
  copy,
  locale,
}: {
  children: ReactNode;
  common: CommonCopy;
  copy: LanguageCopy;
  locale: Locale;
}) {
  const [isFirstVisitOpen, setIsFirstVisitOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    const cookieLocale = readCookie(localeCookieName);
    const storedLocaleValue = storedLocale ?? undefined;
    let savedLocale: Locale | null = null;

    if (isLocale(storedLocaleValue)) {
      savedLocale = storedLocaleValue;
    } else if (isLocale(cookieLocale)) {
      savedLocale = cookieLocale;
    }

    if (!savedLocale) {
      const timeout = window.setTimeout(() => setIsFirstVisitOpen(true), 0);

      return () => window.clearTimeout(timeout);
    }

    persistLanguage(savedLocale);

    if (savedLocale !== locale) {
      switchLanguage(savedLocale);
    }
  }, [locale]);

  useEffect(() => {
    const hasModal = isFirstVisitOpen || isSettingsOpen;

    document.body.classList.toggle("has-language-modal", hasModal);

    return () => document.body.classList.remove("has-language-modal");
  }, [isFirstVisitOpen, isSettingsOpen]);

  const value = useMemo(
    () => ({
      ariaLabel: common.nav.languageSettingsAria,
      locale,
      openSettings: () => setIsSettingsOpen(true),
    }),
    [common.nav.languageSettingsAria, locale],
  );

  const handleChooseLanguage = (nextLocale: Locale) => {
    persistLanguage(nextLocale);
    setIsFirstVisitOpen(false);
    setIsSettingsOpen(false);

    if (nextLocale !== locale) {
      switchLanguage(nextLocale);
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
      {isFirstVisitOpen ? (
        <LanguageModal
          copy={copy}
          currentLocale={locale}
          isDismissible={false}
          onChoose={handleChooseLanguage}
        />
      ) : null}
      {isSettingsOpen ? (
        <LanguageModal
          copy={copy}
          currentLocale={locale}
          isDismissible
          onChoose={handleChooseLanguage}
          onClose={() => setIsSettingsOpen(false)}
        />
      ) : null}
    </LanguageContext.Provider>
  );
}

export function LanguageSettingsButton({
  className = "",
  label,
  onOpen,
  tabIndex,
}: {
  className?: string;
  label?: string;
  onOpen?: () => void;
  tabIndex?: number;
}) {
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }

  return (
    <button
      className={`language-settings-button${className ? ` ${className}` : ""}`}
      type="button"
      aria-label={`${context.ariaLabel}: ${localeLabels[context.locale]}`}
      tabIndex={tabIndex}
      onClick={() => {
        onOpen?.();
        context.openSettings();
      }}
    >
      <span aria-hidden={!label}>{label ?? context.locale.toUpperCase()}</span>
      {label ? (
        <small className="language-settings-code" aria-hidden="true">
          {context.locale.toUpperCase()}
        </small>
      ) : null}
    </button>
  );
}

function LanguageModal({
  copy,
  currentLocale,
  isDismissible,
  onChoose,
  onClose,
}: {
  copy: LanguageCopy;
  currentLocale: Locale;
  isDismissible: boolean;
  onChoose: (locale: Locale) => void;
  onClose?: () => void;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    modalRef.current
      ?.querySelector<HTMLButtonElement>(".language-option")
      ?.focus();
  }, []);

  useEffect(() => {
    if (!isDismissible || !onClose) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isDismissible, onClose]);

  return (
    <div className="language-modal-backdrop">
      <div
        ref={modalRef}
        className="language-modal"
        role="dialog"
        aria-modal="true"
        aria-label={copy.modalAria}
      >
        {isDismissible ? (
          <button
            className="language-modal-close"
            type="button"
            aria-label={copy.closeSettings}
            onClick={onClose}
          >
            <span aria-hidden="true">x</span>
          </button>
        ) : null}

        <p className="eyebrow">
          {isDismissible ? copy.settingsLabel : copy.modalEyebrow}
        </p>
        <h2>{isDismissible ? copy.settingsTitle : copy.modalTitle}</h2>
        <p>{isDismissible ? copy.settingsText : copy.modalText}</p>

        <div
          className="language-options"
          role="radiogroup"
          aria-label={copy.settingsTitle}
        >
          {locales.map((option) => {
            const isSelected = option === currentLocale;

            return (
              <button
                className={`language-option${isSelected ? " is-selected" : ""}`}
                key={option}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onChoose(option)}
              >
                <span>{localeLabels[option]}</span>
                <small>
                  {isSelected ? copy.optionSelected : option.toUpperCase()}
                </small>
              </button>
            );
          })}
        </div>

        <p className="language-note">
          {isDismissible
            ? `${copy.currentLanguage}: ${localeLabels[currentLocale]}`
            : copy.modalNote}
        </p>
      </div>
    </div>
  );
}
