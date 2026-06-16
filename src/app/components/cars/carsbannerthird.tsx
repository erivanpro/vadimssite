import { useTranslations } from "next-intl";
import styled from "styled-components";
import './car.css'; // Custom styles for any additional styles you may need

const hostIncentives = [
  {
    name: "Gagnez de l'argent rapidement tout les jours",
    description:
      "Proposez votre voiture sur notre plateforme et générez des revenus supplémentaires facilement",
  },
  {
    name: "Flexibilité totale",
    description:
      "Vous avez le contrôle total sur la disponibilité, les tarifs et les conditions de location de votre véhicule",
  },
  {
    name: "Assurance incluse",
    description:
      "Votre véhicule est protégé par une assurance complète pendant chaque location, pour une tranquillité d'esprit totale",
  }
];

// Styled-component for Glassmorphism effect
const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px); /* Stronger blur effect */
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
  
  &:hover {
    transform: translateY(-10px); /* Lift effect on hover */
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5); /* Deep shadow effect on hover */
  }
`;

const Title = styled.h3`
  font-size: 1.25rem; /* Adjusted font size */
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7); /* Light gray text */
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
`;

export default function BannerHostBusinessTwo() {
  const t = useTranslations("newPage.hostIncentives");

  return (
    <section className="host-incentive-section">
      <div className="modern-container">
        <div className="proof-grid">
          {hostIncentives.map((incentive) => (
            <div
              key={incentive.name}
              className="host-incentive-card"
            >
              <h3 className="text-2xl font-black leading-tight">{t(incentive.name)}</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">{t(incentive.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
