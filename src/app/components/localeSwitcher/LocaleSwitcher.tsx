'use client';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { CircleFlagLanguage } from 'react-circle-flags';
import { usePathname } from 'next/navigation';


type LocaleSwitcherProps = {
  removePadding?: boolean;
  removeMargin?: boolean;
};

export default function LocaleSwitcher({
  removePadding = false,
  removeMargin = false,
}: LocaleSwitcherProps) {
  const languages: Record<string, string> = {
    en: 'English',
    fr: 'Français',
    pt: 'Português',
    it: 'Italiano',
    es: 'Español',
    ru: 'Русский',
    ja: '日本語',
  };

  const locale = useLocale();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const pathname = usePathname();
  const isNewPage = pathname === "/new";

  const currentLanguageName = languages[locale] || locale;

  return (
    <div className={`${removeMargin ? 'ml-0' : 'ml-4'} ${removePadding ? 'py-0' : 'py-2'} flex items-center gap-4`}>
   

      {/* Locale Switcher */}
      <div
        onClick={toggleDropdown}
        className="relative inline-flex items-center cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen ? 'true' : 'false'}
      >
        <div 
         className={`flex items-center justify-between rounded-full border border-black/10 bg-white px-4 py-2 transition-all duration-300 ease-in-out hover:border-[#52bf88] hover:bg-[#f4f6f2]`}
    >
          <CircleFlagLanguage className="w-6 h-6" languageCode={locale as string} />
          <p className="ml-2 text-sm font-medium">{currentLanguageName}</p>
          <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-500" />
        </div>

        {isDropdownOpen && (
         
          <div className="absolute left-0 right-0 z-10 mt-2 max-h-60 overflow-auto rounded-2xl border border-black/10 bg-white shadow-lg">
            <LocaleSwitcherSelect
              currentLocale={locale}
              allLocales={Object.keys(languages)}
              setIsDropdownOpen={setIsDropdownOpen}
              languages={languages}
            />
          </div>
        )}
      </div>
    </div>
  );
}
