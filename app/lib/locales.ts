export const locales = ["en", "es", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeCookieName = "elunico-language";
export const localeStorageKey = "elunico-language";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (!isLocale(maybeLocale)) {
    return pathname || "/";
  }

  const strippedPath = `/${segments.slice(2).join("/")}`;

  return strippedPath === "/" ? "/" : strippedPath.replace(/\/$/, "");
}

export function pathWithLocale(locale: Locale, pathname: string) {
  const pathWithoutLocale = stripLocale(pathname);

  return `/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
}
