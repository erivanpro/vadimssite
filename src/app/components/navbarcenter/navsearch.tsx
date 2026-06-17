"use client"; // This is still here since it's typically necessary for Next.js 13+ to denote client-side rendering

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';  // Import useRouter
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../localeSwitcher/LocaleSwitcher';
import SearchBar from '../serachbar/SearchBar';  // Assuming this is your search bar component
import Footer from '../footer';
import { FaSearch } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';  // Import the HiSearch icon
import './style.css'
// Define the navigation menu items
const navigation = [
  { name: 'Location de voiture', href: '/' },
  { name: 'Devenir locataire', href: '/new' },
  { name: 'Professionnels', href: '/professionals' },
  { name: 'Assurance', href: '/assurance' },
  { name: 'Aide', href: '/aide' },
  { name: 'Légal', href: '/aide' },
];






const topics = {
  "Hôtes": [
    { question: "Comment publier une voiture ?", answer: "Vous pouvez publier une voiture depuis votre tableau de bord"},
    { question: "Puis-je modifier ma publication ?", answer: "Oui, accédez à vos annonces pour les modifier"},
    { question: "Comment supprimer une annonce ?", answer: "Accédez à vos annonces et supprimez celle que vous souhaitez"},
    { question: "Combien de voitures puis-je publier ?", answer: "Vous pouvez publier un nombre illimité de voitures"},
    { question: "Puis-je publier une voiture sans photo ?", answer: "Non, des photos sont nécessaires pour publier une voiture"},
    { question: "Comment ajouter des photos à mon annonce ?", answer: "Dans votre tableau de bord, vous pouvez télécharger des photos pour chaque voiture"},
    { question: "Que faire si je veux modifier les informations d’une voiture ?", answer: "Accédez à vos annonces et modifiez les informations de la voiture"},
    { question: "Comment gérer mes réservations ?", answer: "Vous pouvez gérer vos réservations depuis votre tableau de bord"},
    { question: "Que faire si ma voiture est endommagée pendant une réservation ?", answer: "Contactez notre équipe de support et nous vous aiderons à résoudre le problème"},
    { question: "Comment annuler une réservation ?", answer: "Accédez à vos réservations et sélectionnez l'option pour annuler"},
    { question: "Que faire si un locataire annule à la dernière minute ?", answer: "Contactez notre équipe de support pour obtenir de l’aide"},
    { question: "Puis-je définir des conditions particulières pour la location ?", answer: "Oui, vous pouvez définir des conditions dans l'annonce"},
    { question: "Comment voir les réservations à venir ?", answer: "Dans votre tableau de bord, vous trouverez toutes vos réservations à venir"},
    { question: "Comment voir les avis laissés par les locataires ?", answer: "Les avis sont visibles dans la section des réservations passées"},
    { question: "Comment gérer mes prix de location ?", answer: "Vous pouvez ajuster les prix depuis votre tableau de bord"},
    { question: "Puis-je refuser une réservation ?", answer: "Oui, vous pouvez refuser une réservation en accédant à votre tableau de bord"},
    { question: "Comment faire la vérification des documents d’un locataire ?", answer: "Nous vérifions les documents avant chaque réservation, vous n'avez rien à faire"},
    { question: "Que faire si un locataire ne me rend pas la voiture à temps ?", answer: "Contactez le locataire et, si nécessaire, contactez notre équipe de support"},
    { question: "Comment savoir si la voiture est assurée ?", answer: "L’assurance est incluse dans chaque réservation, vous pouvez vérifier dans les détails de la réservation"},
    { question: "Comment mettre en pause mes annonces ?", answer: "Dans votre tableau de bord, vous pouvez mettre en pause vos annonces"},
    { question: "Que faire si un locataire a un comportement inapproprié ?", answer: "Contactez notre équipe de support et nous prendrons les mesures nécessaires"},
    { question: "Comment contacter le support en cas de problème avec un locataire ?", answer: "Utilisez notre formulaire de contact pour nous signaler tout problème"},
    { question: "Comment signaler un problème avec un locataire ?", answer: "Contactez notre équipe via le centre d’aide de l’application"},
  ],
  
  "Locataires": [
    { question: "Comment réserver une voiture ?", answer: "Recherchez une voiture et cliquez sur le bouton réserver"},
    { question: "Que faire en cas de retard ?", answer: "Contactez l'hôte pour l'informer du retard"},
    { question: "Comment savoir si la voiture est disponible ?", answer: "La disponibilité de la voiture est indiquée sur la page de l'annonce"},
    { question: "Que faire si l’hôte annule la réservation ?", answer: "Nous vous proposerons une alternative ou un remboursement"},
    { question: "Comment changer la date de ma réservation ?", answer: "Vous pouvez changer la date dans votre tableau de bord, sous l'option 'Modifier la réservation'"},
    { question: "Que faire si la voiture n'est pas comme décrite dans l'annonce ?", answer: "Contactez l'hôte et, si nécessaire, notre support"},
    { question: "Comment récupérer la voiture après avoir réservé ?", answer: "L'hôte vous fournira les instructions pour récupérer la voiture"},
    { question: "Puis-je modifier mes informations personnelles ?", answer: "Oui, vous pouvez modifier vos informations dans les paramètres de votre compte"},
    { question: "Comment obtenir une facture pour ma location ?", answer: "La facture vous sera envoyée après la fin de votre réservation"},
    { question: "Comment faire une réservation pour un autre utilisateur ?", answer: "Vous pouvez réserver au nom de quelqu'un d'autre depuis votre tableau de bord"},
    { question: "Que faire si la voiture a un problème pendant la location ?", answer: "Contactez l'hôte ou notre support pour obtenir de l'aide"},
    { question: "Puis-je prolonger ma location ?", answer: "Oui, vous pouvez prolonger votre location en contactant l'hôte"},
    { question: "Comment annuler une réservation ?", answer: "Vous pouvez annuler une réservation depuis votre tableau de bord"},
    { question: "Que faire si la voiture n’est pas disponible lors de la réservation ?", answer: "Contactez notre équipe de support pour vous aider à trouver une solution"},
    { question: "Comment évaluer un hôte ?", answer: "Vous pouvez évaluer l'hôte après chaque location depuis la page de la réservation"},
    { question: "Que faire si le locataire ne respecte pas les règles ?", answer: "Signalez-le à notre support via le centre d'aide"},
    { question: "Comment savoir si la voiture a une assurance ?", answer: "L'assurance est incluse dans le processus de réservation et est visible sur la page de la réservation"},
    { question: "Comment vérifier que le locataire a bien validé ses documents ?", answer: "Nous vérifions tous les documents avant chaque réservation"},
    { question: "Que faire si je perds mes clés pendant la location ?", answer: "Contactez l'hôte ou notre équipe de support pour obtenir de l'aide"},
    { question: "Comment savoir si mon paiement a bien été effectué ?", answer: "Vous recevrez une confirmation par email une fois le paiement effectué"},
    { question: "Que faire en cas de comportement suspect d’un locataire ?", answer: "Signalez immédiatement le problème à notre équipe de support"},
  ],

  "Assurance": [
    { question: "Suis-je couvert en cas d'accident ?", answer: "Oui, notre assurance couvre les dommages accidentels"},
    { question: "Comment souscrire une assurance ?", answer: "L'assurance est incluse dans le processus de réservation"},
    { question: "Que faire si j’ai un accident pendant ma location ?", answer: "Contactez notre support immédiatement et suivez les instructions"},
    { question: "L'assurance couvre-t-elle les dommages causés par le locataire ?", answer: "Oui, l'assurance couvre les dommages causés par le locataire"},
    { question: "Puis-je choisir une assurance différente ?", answer: "Non, l'assurance fournie est obligatoire et incluse dans la réservation"},
    { question: "L’assurance est-elle incluse dans toutes les réservations ?", answer: "Oui, l'assurance est incluse dans chaque réservation"},
    { question: "Comment vérifier ma couverture d'assurance ?", answer: "Vous pouvez vérifier les détails de l'assurance dans votre réservation"},
    { question: "Est-ce que l’assurance couvre la perte de la voiture ?", answer: "L'assurance couvre la perte de la voiture sous certaines conditions Veuillez consulter les termes de l'assurance"},
    { question: "Que faire si j’ai un accident et que je ne sais pas comment procéder ?", answer: "Contactez immédiatement notre équipe de support pour vous guider dans les démarches"},
    { question: "Comment déposer une réclamation d'assurance ?", answer: "Vous pouvez soumettre une réclamation via notre centre d’aide"},
  ],

  "Légal": [
    { question: "Quelles sont les conditions générales ?", answer: "Consultez nos conditions générales sur notre site web"},
    { question: "Comment signaler un problème ?", answer: "Utilisez notre formulaire de contact pour signaler un problème"},
    { question: "Que faire si j’ai un problème légal ?", answer: "Contactez notre équipe juridique via le formulaire de contact"},
    { question: "Comment connaître les conditions d’utilisation ?", answer: "Les conditions d’utilisation sont disponibles dans le centre d’aide de l'application"},
    { question: "Comment gérer mes droits et responsabilités ?", answer: "Les informations sur vos droits et responsabilités sont disponibles dans nos conditions générales"},
  ],
};



// Define the Navsearch component
export default function Navsearch({ searchQuery, setSearchQuery, isLoading }: { searchQuery: string; setSearchQuery: React.Dispatch<React.SetStateAction<string>>; isLoading: boolean }) {
  const t = useTranslations('aidePage');
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const filteredTopics = Object.entries(topics).map(([topic, questions]) => {
    const filteredQuestions = questions.filter((q) =>
      t(`topics.${q.question}`).toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { topic, questions: filteredQuestions };
  });

  return (
    <section className="subpage-hero gleb-help-hero">
      <div className="subpage-hero-inner">
        <div className="max-w-3xl">
          <h2 className="subpage-title different">{t('Comment pouvons-nous vous aider ?')}</h2>
          <p className="subpage-copy">{t('Trouvez des réponses à vos questions ci-dessous ou utilisez la barre de recherche pour affiner votre recherche')}</p>

          <div className="help-search">
            <input
              type="text"
              className="help-search-input"
              placeholder={t("Tapez des mots-clés pour trouver des réponses")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="modern-container mt-14">
        <div className="help-grid md:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.map(({ topic, questions }) => (
            <div key={topic} className="help-topic-card">
              <h3 className="help-topic-title mb-5">{t(topic)}</h3>
              <ul className="space-y-4">
                {questions.map((q, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveQuestion(activeQuestion === q.question ? null : q.question)}
                      className="help-question-button"
                    >
                      {t(`topics.${q.question}`)}
                    </button>
                    {activeQuestion === q.question && (
                      <p className="help-answer">{t(`topics.${q.answer}`)}</p>
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

// Main NavCenter component
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
    <div className="subpage-shell">
      <header className="modern-header">
        <nav aria-label="Global" className="modern-nav">
          <div className="flex flex-1">
            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-2">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="modern-nav-link">
                  {t(item.name)}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="modern-menu-button"
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
          <div className="fixed inset-0 z-40 bg-slate-900/20" />
          <DialogPanel className="modern-mobile-panel left-3 right-auto">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="modern-menu-button"
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
                  className="-mx-3 block rounded-2xl px-4 py-3 text-base/7 font-bold text-gray-900 hover:bg-[#f4f6f2]"
                >
                  {t(item.name)}
                </a>
              ))}
              <SearchBar />
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Search Section */}
      <Navsearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
      />

      <Footer />
    </div>
  );
}
