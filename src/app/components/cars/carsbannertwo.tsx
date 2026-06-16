import { useTranslations } from "next-intl";
import './car.css'


const incentives = [
  {
    name: 'Voitures Vérifiées',
    description: "Voitures Vérifiées-desc",
  },
  {
    name: 'Assistance 24/7',
    description: "Notre équipe est disponible à tout moment pour vous aider, que ce soit en cas de panne ou pour répondre à vos questions",
  },
  {
    name: 'Réservation Facile',
    description: "Réservation Facile-desc",
    
  },
];

export default function BannerBusiness() {
  const t = useTranslations('homePage.carsBanner')
  return (
    <section className="proof-section soft-section">
      <div className="modern-container">
        <div className="proof-grid">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="proof-card"
            >
              <div>
                
                <h3   className="different proof-card-title"
                >{t(incentive.name)}</h3>
                <p className="proof-card-copy">{t(incentive.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
