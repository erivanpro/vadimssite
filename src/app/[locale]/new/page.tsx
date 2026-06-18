"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "@/app/components/images/Logo - White.png";
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from "next/image";
import './car.css'
import '../style.css'
import hostHeroPhone from "@/app/components/imagesiphone/2rentyourcar.png";









import Team from "@/app/team";
import Footer from "@/app/components/footer";
import BoxSecond from "@/app/components/box1/Boxsecond";
import FAQSectiontwo from "@/app/components/faq/faqsecond";
import BannerHostBusinessTwo from "@/app/components/cars/carsbannerthird";
import Numbers from "@/app/Numbers/Numberd";
import SvgComponentTrois from "@/app/icons/Icon";
import SvgComponentQuatre from "@/app/icons/newicon";
import MenuIcon from "@/app/components/menuIcon/MenuIcon";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/app/components/localeSwitcher/LocaleSwitcher";
const products = [
  {
    name: "Google Play",
    description: "Trouvez des voitures proches de chez vous",
    href: "#",
    icon: SvgComponentTrois,
  },
  {
    name: "App Store",
    description: "Discutez directement avec les locataires",
    href: "#",
    icon: SvgComponentQuatre,
  },

  
];


const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const backgroundImageStyle: React.CSSProperties = {
  backgroundImage:
    "url('https://media.istockphoto.com/id/1170825611/pt/foto/blue-and-green-blurred-motion-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=h3p0V8Q9BMMJJXiH4lOqM45KY6pItE1MRZ_4QHBOXL0=')", // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
};








export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const t = useTranslations('homePage')
const t_new = useTranslations('newPage');
  return (
    <div className="subpage-shell renter-accent-page">
     
      <header className="modern-header">
        <nav aria-label="Global" className="modern-nav">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="modern-menu-button">
              <span className="sr-only">Open main menu</span>
              <MenuIcon/>
            </button>

          </div>
          <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-2">
            <Popover className="relative">
              <PopoverButton className="modern-nav-link">
                {t('Location de voiture')}
                <ChevronDownIcon aria-hidden="true" className="h-4 w-4 flex-none text-black" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="modern-popover transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="modern-popover-item group relative text-sm leading-6">
                       <div className="modern-popover-icon">
                        <item.icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{t(item.description)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <a href="#" className="modern-nav-link">
              
              {t('Devenir locataire')}</a>
<a href="/professionals" className="modern-nav-link">{t('Professionnels')}</a>
<a href="/assurance" className="modern-nav-link">{t('Assurance')}</a>
<a href="/aide" className="modern-nav-link">{t('Aide')}</a>
<a href="/aide" className="modern-nav-link">{t('Légal')}</a>

          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">


      
<LocaleSwitcher/>
              
           
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-slate-900/20" />
          <DialogPanel className="modern-mobile-panel">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />

              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="modern-menu-button">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
             



              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]">
                    {t('Télécharger')}
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {products.map((item) => (
                        <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-2xl py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#f4f6f2]">
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a href="/new" className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]">{t('Devenir hôte')}</a>
                  <a href="/professionals" className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]">{t('Professionnels')}</a>
                  <a href="/assurance" className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]">{t('Assurance')}</a>
                  <a href="/aide" className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]">{t('Aide')}</a>
                </div>
                <LocaleSwitcher/>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>





      <section className="subpage-hero subpage-hero-dark">
  <div className="subpage-hero-inner gleb-subhero-layout">
    <div className="max-w-3xl">
      <h2 className="subpage-title different">
        <span className="different">
          {t_new("Gagner de l'argent")} 
        </span>
      </h2>
      <p className="subpage-copy">
     {t_new('main-desc')}
      </p>
      <div className="mt-10 flex items-center">
      <a
  href="#"
  className="modern-button modern-button-secondary"
>
  {t_new("Verifer vos documents et commencez à gagner de l'argent")}
</a>



      </div>
    </div>
    <div className="gleb-os-stage gleb-host-stage" aria-hidden="true">
      <div className="gleb-ui-panel gleb-panel-one" />
      <div className="gleb-ui-panel gleb-panel-two" />
      <div className="gleb-device-shell">
        <Image src={hostHeroPhone} alt="" priority />
      </div>
      <div className="gleb-route-card">
        <div className="gleb-route-row">
          <span className="gleb-route-dot" />
          <span className="gleb-route-line" />
          <span className="gleb-route-chip" />
        </div>
        <div className="gleb-route-map" />
      </div>
    </div>
  </div>
</section>





<Numbers/>
<BannerHostBusinessTwo/>
      <BoxSecond/>
      <FAQSectiontwo/>
      <Team />
      <Footer />
    </div>
  );
}
