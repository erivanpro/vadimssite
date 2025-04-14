import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';

export default function Linkedin() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const bannerDismissed = localStorage.getItem('linkedinBannerDismissed');
    if (bannerDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('linkedinBannerDismissed', 'true');
  };

  if (!isVisible) {
    return null; // Si l'alerte est fermée, on la masque en renvoyant null
  }

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#0E76A8] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm text-white">
          Rejoignez-nous sur linkedin pour rester informé des dernières nouvelles et mises à jour de mon travail
        </p>
        <a
          href="https://www.linkedin.com/in/vadims-martinez/?originalSubdomain=fr"
          className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-black shadow-sm "
        >
          voir mon linkedin
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismiss}>
          <span className="sr-only">Fermer</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
}
