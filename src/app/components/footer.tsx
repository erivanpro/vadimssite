import Image from "next/image";
import logo from '@/app/components/images/Logo - Black.png';
import { useTranslations } from "next-intl";
import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaReddit, FaLinkedin, FaTumblr } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const navigation = {
  solutions: [
    { name: 'Comment ça marche ?', href: '/' },
    { name: 'Un service de confiance', href: '/new' },
    { name: 'Applis mobile', href: '/new' },
    { name: 'Contact', href: '/new' },
    { name: 'Blog', href: 'https://x.com/LimitlessA66221' },
  ],

  legal: [
    { name: 'Ressources', href: '/aide' },
    { name: 'Assurance', href: '/assurance' },
    { name: 'Professionnels et agences', href: '/professionals' },
    { name: 'Remboursement et Aide', href: '/aide' },
  ],
};

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer aria-labelledby="footer-heading" className="footer-modern">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="modern-container">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo Section */}
          <div className="flex items-center mb-8 xl:mb-0">
            <Image src={logo} alt="limitless Logo" className="h-8 w-auto" width={52} height={52} />
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-2">
            {/* Solutions Section */}
            <div>
              <h3 className="text-sm font-black text-gray-900">{t('Solutions')}</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm transition-all duration-300"
                    >
                      {t(item.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-sm font-black text-gray-900">{t('Légal')}</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm transition-all duration-300"
                    >
                      {t(item.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

       {/* Social Media Section */}
<div className="mt-16 text-center">
  <div className="flex justify-center space-x-6">
    <a href="https://x.com/LimitlessA66221" aria-label="Twitter">
      <FaX size={20} />
    </a>
    <a href="https://www.instagram.com/limitlescar/" aria-label="Instagram">
      <FaInstagram size={20} />
    </a>
    <a href="https://www.facebook.com/profile.php?id=61571093265011" aria-label="Facebook">
      <FaFacebook size={20} />
    </a>
    <a href="mailto:rentalcarapplimitlessslimitles@gmail.com" aria-label="Gmail">
      <FaEnvelope size={20} />
    </a>
    <a href="https://www.reddit.com/user/Born_Pangolin_3308/" aria-label="Reddit">
      <FaReddit size={20} />
    </a>
    <a href="https://www.linkedin.com/in/limitlessapp-rental-car-app-limitlesss-1293b5344/" aria-label="LinkedIn">
      <FaLinkedin size={20} />
    </a>
    <a href="https://www.tumblr.com/blog/golimitlesscom" aria-label="Tumblr">
      <FaTumblr size={20} />
    </a>
  </div>
</div>

        {/* Footer Bottom */}
        <div className="footer-modern-muted mt-16 border-t border-black/10 pt-6 text-center text-sm">
          <p>&copy; {t('2025 limitless Tous droits réservés')}</p>
          <p>{t("Le contenu de ce site est protégé par les lois françaises et internationales sur le droit d'auteur")}</p>
          <p>{t("Aucun texte, image, logo ou autre élément de ce site ne peut être copié, reproduit, distribué ou modifié sans autorisation préalable")}</p>
          <p>{t("Toute reproduction ou représentation, intégrale ou partielle, est strictement interdite sans le consentement écrit de limitless")}</p>
          <p>{t("Les marques et logos affichés sur ce site sont des marques déposées et protégées par le droit des marques")}</p>
          <p>{t("Le non-respect de ces droits de propriété intellectuelle pourra entraîner des poursuites judiciaires")}</p>
          <p>{t("Les utilisateurs s'engagent à ne pas utiliser le contenu à des fins commerciales ou illicites")}</p>
          <p>{t("limitless se réserve le droit de modifier les termes de cette politique de confidentialité à tout moment")}</p>
          <p>{t("En utilisant ce site, vous acceptez pleinement nos conditions d'utilisation et notre politique de confidentialité")}</p>
          <p>{t("Pour toute demande d'autorisation, veuillez nous contacter directement via notre formulaire de contact")}</p>
        </div>
      </div>
    </footer>
  );
}
