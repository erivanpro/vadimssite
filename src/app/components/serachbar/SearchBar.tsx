import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

type LanguageKeys = 'en' | 'es' | 'it' | 'ja' | 'ru' | 'pt' | 'fr';

const languages: Record<LanguageKeys, { searchPlaceholder: string; noResults: string; items: { name: string; link: string; }[] }> = {
  en: {
    searchPlaceholder: 'Search...',
    noResults: 'No results found',
    items: [
      { name: 'Insurance', link: '/assurance' },
      { name: 'Professionals & Agencies', link: '/professionals' },
      { name: 'Privacy Terms', link: '/aide' },
      { name: 'Rent a Car', link: '/' },
      { name: 'Become a Host', link: '/new' },
      { name: 'Contact', link: '/contact' },
    ],
  },
  es: {
    searchPlaceholder: 'Buscar...',
    noResults: 'No se encontraron resultados',
    items: [
      { name: 'Seguro', link: '/assurance' },
      { name: 'Profesionales y agencias', link: '/professionals' },
      { name: 'Términos de privacidad', link: '/aide' },
      { name: 'Alquilar un coche', link: '/' },
      { name: 'Conviértete en anfitrión', link: '/new' },
      { name: 'Contacto', link: '/contact' },
    ],
  },
  it: {
    searchPlaceholder: 'Cerca...',
    noResults: 'Nessun risultato trovato',
    items: [
      { name: 'Assicurazione', link: '/assurance' },
      { name: 'Professionisti e agenzie', link: '/professionals' },
      { name: 'Termini sulla privacy', link: '/aide' },
      { name: 'Noleggia un’auto', link: '/' },
      { name: 'Diventa un host', link: '/new' },
      { name: 'Contatto', link: '/contact' },
    ],
  },
  ja: {
    searchPlaceholder: '検索...',
    noResults: '結果が見つかりません',
    items: [
      { name: '保険', link: '/assurance' },
      { name: '法人・代理店', link: '/professionals' },
      { name: 'プライバシーの規約', link: '/aide' },
      { name: 'レンタカー', link: '/' },
      { name: 'ホストになる', link: '/new' },
      { name: 'お問い合わせ', link: '/contact' },
    ],
  },
  ru: {
    searchPlaceholder: 'Поиск...',
    noResults: 'Результатов не найдено',
    items: [
      { name: 'Страхование', link: '/assurance' },
      { name: 'Профессионалы и агентства', link: '/professionals' },
      { name: 'Политика конфиденциальности', link: '/aide' },
      { name: 'Аренда автомобиля', link: '/' },
      { name: 'Стать хозяином', link: '/new' },
      { name: 'Контакт', link: '/contact' },
    ],
  },
  pt: {
    searchPlaceholder: 'Pesquisar...',
    noResults: 'Nenhum resultado encontrado',
    items: [
      { name: 'Seguro', link: '/assurance' },
      { name: 'Profissionais e agências', link: '/professionals' },
      { name: 'Termos de privacidade', link: '/aide' },
      { name: 'Alugar um carro', link: '/' },
      { name: 'Torne-se um anfitrião', link: '/new' },
      { name: 'Contato', link: '/contact' },
    ],
  },
  fr: {
    searchPlaceholder: 'Rechercher...',
    noResults: 'Aucun résultat trouvé',
    items: [
      { name: 'Assurance', link: '/assurance' },
      { name: 'Professionnels et agences', link: '/professionals' },
      { name: 'Conditions de confidentialité', link: '/aide' },
      { name: 'Louer une voiture', link: '/' },
      { name: 'Devenir hôte', link: '/new' },
      { name: 'Contact', link: '/contact' },
    ],
  },
};

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17 17L13.05 13.05M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SearchBar() {
  const locale = useLocale();  // Get current locale from useLocale hook
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const currentLanguage = locale as LanguageKeys;  // Use the current locale as the language key
  const placeholderText = languages[currentLanguage]?.searchPlaceholder || 'Search...';


  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const filteredItems = languages[currentLanguage]?.items?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <>
      {/* Search Button */}
      <button
        onClick={toggleSearch}
        className="ml-3 flex h-10 w-10 items-center justify-center rounded-[20px] bg-[#52bf88] p-2 text-white transition hover:bg-[#2f8d61]"
      >
        <SearchIcon />
      </button>

    


    {/* Search Modal with Glass Effect */}
<AnimatePresence>
  {isSearchOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/25 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-lg rounded-[8px] border border-black/10 bg-white p-6 shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={toggleSearch}
          className="absolute right-4 top-4 rounded-[6px] bg-[#f4f6f2] p-1 text-gray-700 transition-all duration-300 hover:text-black"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Search Input */}
        <div className="flex items-center rounded-[6px] border border-black/10 bg-[#f4f6f2] px-4 py-3">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />

<input
  type="text"
  className="ml-3 w-full bg-transparent focus:outline-none text-gray-900 placeholder-gray-500 text-lg"
  placeholder={placeholderText}
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  autoFocus
/>

        </div>

        {/* Search Results */}
        {searchQuery && (
          <ul className="mt-4 space-y-2">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} onClick={toggleSearch}>
                    <span className="block rounded-[6px] px-4 py-3 text-lg font-semibold text-gray-800 transition duration-200 hover:bg-[#f4f6f2]">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-500 px-4 py-2">{languages[currentLanguage].noResults}</li>
            )}
          </ul>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



    </>
  );
}
