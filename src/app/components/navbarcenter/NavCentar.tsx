"use client";  // This is still necessary for Next.js 13+ for client-side rendering
import { useEffect, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from 'next/image';
import Footer from '../footer';
import { useRouter } from 'next/navigation';  // Import useRouter
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../localeSwitcher/LocaleSwitcher';
import SearchBar from '../serachbar/SearchBar';  // Import SearchBar here
import './style.css'
const navigation = [
  { name: 'Location de voiture', href: '/' },
  { name: 'Devenir locataire', href: '/new' },  // Direct link, no need for handleNavigate
  { name: 'Aide', href: '/aide' },
  { name: 'Légal', href: '/aide' },
];

type NavsearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
};

// Navsearch component
export default function Navsearch({ searchQuery, setSearchQuery, isLoading }: NavsearchProps) {
  const t = useTranslations('aidePage');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const topics = {
    topic1: [
      { question: 'question1', answer: 'answer1' },
      { question: 'question2', answer: 'answer2' },
    ],
    topic2: [
      { question: 'question3', answer: 'answer3' },
      { question: 'question4', answer: 'answer4' },
    ],
  };

  const filteredTopics = Object.entries(topics).map(([topic, questions]) => {
    const filteredQuestions = questions.filter((q) =>
      t(`topics.${q.question}`).toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { topic, questions: filteredQuestions };
  });

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl px-6 mx-auto sm:px-12 lg:px-16">
        <div className="max-w-screen-md mx-auto text-center mb-12">
          <h2 className="text-3xl different font-extrabold text-gray-800 ">{t('Comment pouvons-nous vous aider ?')}</h2>
          <p className="text-lg text-gray-600 mt-4">{t('Trouvez des réponses à vos questions ci-dessous ou utilisez la barre de recherche pour affiner votre recherche')}</p>

          <div className="mt-6 relative">
            <input
              type="text"
              className="w-full px-6 py-3 pl-12 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500"
              placeholder={t("Tapez des mots-clés pour trouver des réponses")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.map(({ topic, questions }) => (
            <div key={topic} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t(topic)}</h3>
              <ul className="space-y-4">
                {questions.map((q, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveQuestion(activeQuestion === q.question ? null : q.question)}
                      className="text-left text-blue-600 hover:underline w-full text-lg font-medium"
                    >
                      {t(`topics.${q.question}`)}
                    </button>
                    {activeQuestion === q.question && (
                      <p className="mt-2 text-gray-700 text-base">{t(`topics.${q.answer}`)}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// NavCenter component
export function NavCenter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("homePage");

  // Handle search input
  const handleSearch = (query: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Handle search result logic here
    }, 500);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchQuery) handleSearch(searchQuery);
    }, 300);
    
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <div>
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex flex-1">
            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700">
                  {t(item.name)}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>

          {/* Logo */}
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />
          </a>

          {/* LocaleSwitcher and Search Bar */}
          <div className="flex flex-1 justify-end">
            <LocaleSwitcher removePadding removeMargin />
            <SearchBar />
          </div>
        </nav>

        {/* Mobile Menu (Dialog) */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />
              </a>
            </div>

            {/* Mobile Menu Items */}
            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t(item.name)}
                </a>
              ))}
              <SearchBar />
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <Navsearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
      />
      
      <Footer />
    </div>
  );
}
