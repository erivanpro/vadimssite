'use client';

import { useLocale } from 'next-intl';
import React from 'react';

const frenchCities = [
  "Marseille", "Lyon", "Paris", "Montpellier", "Nice", "Toulouse",
  "Bordeaux", "Nantes", "Strasbourg", "Lille", "Rennes", "Ajaccio",
  "Biarritz", "Clermont-Ferrand", "Grenoble", "Perpignan", "Avignon",
  "La Rochelle", "Brest", "Dijon"
];

const englishCities = [
  "London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Bristol",
  "Sheffield", "Nottingham", "Leicester", "Southampton", "Newcastle",
  "Cambridge", "Oxford", "Brighton", "Cardiff", "Edinburgh", "Glasgow"
];

export default function RentComponent() {
  const locale = useLocale();

  if (locale !== 'fr' && locale !== 'en') {
    return null; // or return a fallback like <p>Not supported</p>
  }

  const isFrench = locale === 'fr';
  const cities = isFrench ? frenchCities : englishCities;
  const renderItems = [...cities, ...cities]; // Scroll infini

  return (
    <div className="overflow-hidden bg-white px-4 py-8">
      <div className="flex w-max gap-4 animate-scroll">
        {renderItems.map((city, index) => (
          <a
            key={index}
            href="/gettheapp"
            className="inline-block whitespace-nowrap rounded-[6px] border border-black/10 bg-[#f6f8f4] px-6 py-3 text-sm font-bold text-[#142019] transition hover:border-[#52bf88] hover:bg-white"
          >
            {isFrench
              ? `Louez une voiture à l'aéroport de ${city}`
              : `Rent a car at ${city} airport`}
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
