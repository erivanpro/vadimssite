import allemand from '@/app/components/Devices 2/Apple/allemand.png';
import screenOne from '@/app/components/Devices 2/Apple/allemand.png';
import screenTwo from '@/app/components/imagesiphone/2rentyourcar.png';
import screenThree from '@/app/components/imagesiphone/screenthree.png';
import screenFour from '@/app/components/imagesiphone/screenfour.png';
import screenFive from '@/app/components/imagesiphone/screenshotfive.png';
import screenSix from '@/app/components/imagesiphone/screensix.png';
import Image from 'next/image';
import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import './style.css'; // Adjust the path as needed




import français from "@/app/components/Devices/Apple/francais.png";
import anglais from "@/app/components/Devices/Apple/anglais.png";
import portuguais from "@/app/components/Devices/Apple/portuguais.png";
import japonais from "@/app/components/Devices/Apple/japonais.png";
import espagnol from "@/app/components/Devices/Apple/espagnol.png";
import italian from "@/app/components/Devices/Apple/italian.png";
import russian from "@/app/components/Devices/Apple/russe.png";






import françaisdeux from "@/app/components/Devices 2/Apple/francais.png";
import japonaisdeux from "@/app/components/Devices 2/Apple/japonais.png";
import anglaisdeux from "@/app/components/Devices 2/Apple/anglais.png";
import portuguaisdeux from "@/app/components/Devices 2/Apple/portuguais.png";
import espagnoldeux from "@/app/components/Devices 2/Apple/portuguais.png";
import italiandeux from "@/app/components/Devices 2/Apple/italian.png";
import russiandeux from "@/app/components/Devices 2/Apple/russe.png";






import françaistrois from "@/app/components/Devices 3/Apple/francais.png";
import anglaistrois from "@/app/components/Devices 3/Apple/anglais.png";
import portuguaistrois from "@/app/components/Devices 3/Apple/portuguais.png";
import japonaistrois from "@/app/components/Devices 3/Apple/japonais.png";
import espagnoltrois from "@/app/components/Devices 3/Apple/espagnol.png";
import italiantrois from "@/app/components/Devices 3/Apple/italian.png";
import russiantrois from "@/app/components/Devices 3/Apple/russe.png";




import françaisquatre from "@/app/components/Devices 4/Apple/francais.png";
import anglaisquatre from "@/app/components/Devices 4/Apple/english.png";
import portuguaisquatre from "@/app/components/Devices 4/Apple/portuguais.png";
import japonaisquatre from "@/app/components/Devices 4/Apple/japonais.png";
import italianquatre from "@/app/components/Devices 4/Apple/italian.png";
import espagnolquatre from "@/app/components/Devices 4/Apple/espgnol.png";
import russianquatre from "@/app/components/Devices 4/Apple/russe.png";


import françaiscinq from "@/app/components/Devices 5/Apple/francais.png";
import anglaiscinq from "@/app/components/Devices 5/Apple/anglais.png";
import portuguaiscinq from "@/app/components/Devices 5/Apple/portuguais.png";
import japonaiscinq from "@/app/components/Devices 5/Apple/japonais.png";
import espagnolcinq from "@/app/components/Devices 5/Apple/espagnol.png";
import italiancinq from "@/app/components/Devices 5/Apple/italian.png";
import russiancinq from "@/app/components/Devices 5/Apple/russe.png";






import françaissix from "@/app/components/Devices 6/Apple/francais.png";
import anglaissix from "@/app/components/Devices 6/Apple/anglais.png";
import portuguaissix from "@/app/components/Devices 6/Apple/portuguais.png";
import japonaissix from "@/app/components/Devices 6/Apple/japonais.png";
import italiansix from "@/app/components/Devices 6/Apple/italian.png";
import espagnolsix from "@/app/components/Devices 6/Apple/espagnol.png";
import russiansix from "@/app/components/Devices 6/Apple/russe.png";






import françaisept from "@/app/components/Devices 7/Apple/francais.png";
import anglaissept from "@/app/components/Devices 7/Apple/english.png";
import portuguaissept from "@/app/components/Devices 7/Apple/portuguais.png";
import japonaisept from "@/app/components/Devices 7/Apple/japonais.png";
import italiansept from "@/app/components/Devices 7/Apple/italian.png";
import espagnolsept from "@/app/components/Devices 7/Apple/espagnol.png";
import russiansept from "@/app/components/Devices 7/Apple/russe.png";


import françaishuit from "@/app/components/Devices 8/Apple/francais.png";
import anglaishuit from "@/app/components/Devices 8/Apple/anglais.png";
import portuguaishuit from "@/app/components/Devices 8/Apple/portuguais.png";
import japonaishuit from "@/app/components/Devices 8/Apple/japonais.png";
import espagnolhuit from "@/app/components/Devices 8/Apple/espagnol.png";
import italianlhuit from "@/app/components/Devices 8/Apple/italian.png";
import russianhuit from "@/app/components/Devices 8/Apple/russe.png";
import './style.css'; // Adjust the path as needed












export default function BoxSecond() {
  const locale = useLocale();
  useEffect(() => {
    const elementsLeft = document.querySelectorAll('.animate-on-scroll-left');
    const elementsRight = document.querySelectorAll('.animate-on-scroll-right');

    const observerOptions = {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animate-on-scroll-left')) {
            entry.target.classList.add('animate-left');
          } else if (entry.target.classList.contains('animate-on-scroll-right')) {
            entry.target.classList.add('animate-right');
          }
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    }, observerOptions);

    elementsLeft.forEach((el) => observer.observe(el));
    elementsRight.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);


  
  useEffect(() => {
    const elementsLeft = document.querySelectorAll('.animate-on-scroll-left');
    const elementsRight = document.querySelectorAll('.animate-on-scroll-right');

    const observerOptions = {
      root: null, // The viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animate-on-scroll-left')) {
            entry.target.classList.add('animate-left');
          } else if (entry.target.classList.contains('animate-on-scroll-right')) {
            entry.target.classList.add('animate-right');
          }
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    }, observerOptions);

    elementsLeft.forEach((el) => observer.observe(el));
    elementsRight.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);
  


  const getImageByLocale = (frImage:any, ruImage:any, esImage:any, itImage:any, enImage:any, ptImage:any, jpImage:any) => {
    let selectedImage;
    switch (locale) {
      case 'fr':
        selectedImage = frImage;
        break;
        case 'ru':
        selectedImage = ruImage;
        break;
      case 'en':
        selectedImage = enImage;
        break;
      case 'es':
        selectedImage = esImage;
        break;
      case 'it':
        selectedImage = itImage;
        break;
      case 'pt':
        selectedImage = ptImage;
        break;
      case 'ja':
        selectedImage = jpImage;
        break;
      default:
        selectedImage = enImage; // Fallback to English
    }
  
    console.log(`Selected Image for ${locale}:`, selectedImage); // Log the selected image
    return selectedImage;
  };

  


  const featuresHoster = [
    {
      title: 'Gérez vos annonces',
      description:
        'Ajoutez, modifiez ou supprimez vos annonces pour mieux gérer vos locations',
      buttonText: 'Gérez vos annonces',
      image: locale === 'it' ? italian 
      : locale === 'es' ? espagnol 
      : locale === 'fr' ? français 
      : locale === 'en' ? anglais 
      : locale === 'pt' ? portuguais 
      : locale === 'ja' ? japonais 
      : locale === 'ru' ? russian // Add Russian case here
      : anglais, // Default to English if no match
      },
    {
      title: 'Suivez vos réservations',
      description:
        'Consultez et gérez vos réservations avec un tableau de bord simple et intuitif',
      buttonText: 'Voir vos réservations',
      image: locale === 'it' ? italianquatre 
      : locale === 'es' ? espagnolquatre 
      : locale === 'fr' ? françaisquatre 
      : locale === 'en' ? anglaisquatre 
      : locale === 'pt' ? portuguaisquatre 
      : locale === 'ja' ? japonaisquatre 
      : locale === 'ru' ? russianquatre// Add Russian case here
      : anglaisquatre, // Default to English if no match
      },
    {
      title: 'Communiquez avec vos clients',
      description:
        'Utilisez notre système de messagerie pour rester en contact avec vos clients',
      buttonText: 'Envoyez un message',
      image: locale === 'it' ? italiancinq 
      : locale === 'es' ? espagnolcinq 
      : locale === 'fr' ? françaiscinq 
      : locale === 'en' ? anglaiscinq 
      : locale === 'pt' ? portuguaiscinq 
      : locale === 'ja' ? japonaiscinq 
      : locale === 'ru' ? russiancinq // Add Russian case here
      : anglaiscinq, // Default to English if no match
      },
    {
      title: 'Recevez des avis',
      description:
        'Collectez des retours pour améliorer vos services et attirer plus de clients',
      buttonText: 'Voir les avis',
      image: locale === 'it' ? italiansix 
      : locale === 'es' ? espagnolsix 
      : locale === 'fr' ? françaissix 
      : locale === 'en' ? anglaissix 
      : locale === 'pt' ? portuguaissix 
      : locale === 'ja' ? japonaissix 
      : locale === 'ru' ? russiansix // Add Russian case here
      : anglaissix, // Default to English if no match
      },
    {
      title: 'Gérez vos documents',
      description:
        'Téléchargez et organisez vos documents importants en toute sécurité',
      buttonText: 'Gérez vos documents',
      image: locale === 'it' ? italianlhuit 
      : locale === 'es' ? espagnolhuit 
      : locale === 'fr' ? françaisept 
      : locale === 'en' ? anglaissept 
      : locale === 'pt' ? portuguaissept 
      : locale === 'ja' ? japonaisept 
      : locale === 'ru' ? russianhuit // Add Russian case here
      : anglaissept, // Default to English if no match
      },
  ];
  
  

  const t = useTranslations('newPage');
  return (
    <section className="modern-feature-flow">
  <div className="modern-container">
    {featuresHoster.map((feature, index) => (
      <div
        key={index}
        className={`host-feature-card ${
          index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
        } animate-fadeIn`} // Adding the animation class here
      >
        <div
          className={`${index % 2 === 1 ? 'lg:order-2' : ''} modern-phone-frame`}
        >
          <Image
            alt={feature.title}
            src={feature.image}
            className="modern-phone-image"
          />
        </div>
        <div className="feature-copy-block">
          <h2 className="modern-section-title different">{t(feature.title)}</h2>
          <p className="modern-section-copy">{t(feature.description)}</p>
          <a
            href="gettheapp"
            className="modern-button modern-button-primary mt-8"
          >
            {t(feature.buttonText)}
          </a>
        </div>
      </div>
    ))}
  </div>
</section>




  );
}
