"use client";
import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";

import {
  ArrowPathIcon,
  Bars3Icon,
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
import Footer from "../components/footer";
import logo from "@/app/components/images/Logo - White.png";
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from "next/image";
import Boxone from "../components/box1/Boxone";
import Reviews from "../components/reviews/reviews";
import FAQSection from "../components/faq/faq";
import Cars from "../components/cars/carsbanner";
import BannerBusiness from "../components/cars/carsbannertwo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import image from "@/app/components/images/24.png";
import SvgComponentTrois from "../icons/Icon";
import SvgComponentQuatre from "../icons/newicon";
import Box2 from "../components/box2/Box2";
import MenuIcon from "../components/menuIcon/MenuIcon";
import InfoModal from "../components/OpenBox/OpenBox";
import { useTranslations } from "next-intl";
import Team from "../team";
import LocaleSwitcher from "../components/localeSwitcher/LocaleSwitcher";
import "./style.css"; // Import your custom styles
import heroPhone from "@/app/components/Devices 6/Apple/francais.png";
import { FaX } from "react-icons/fa6";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTumblr,
} from "react-icons/fa";
import ModalDialog from "../components/modalsialog/modaldialog";
import BlogSectione from "../components/blog/product";
import "./style.css"; // Assurez-vous que le chemin est correct selon votre structure de projet
import localFont from "next/font/local";
import BottomNav from "../components/bottomnav/bottomnav";
import SvgComponentSix from "../icons/six";
import Alert from "../components/Alert/Alert";
import Features from "../components/select/NewsScelect";
import Stats from "../components/stats/stats";
import Brands from "../components/brands/brands";
import SearchBar from "../components/serachbar/SearchBar";
import TestBox from "../components/testBox/TestBox";
import carsmall from "../icons/carsmall";
import mapsmall from "../icons/mapsmall";
import chat from "../icons/chat";

const products = [
  {
    name: "",
    description: "ge",
    href: "/gettheapp",
    icon: SvgComponentSix,
  },
  {
    name: "",
    description: "secodeux",
    href: "/gettheapp",
    icon: carsmall,
  },
  {
    name: "",
    description: "tercodeux",
    href: "/gettheapp",
    icon: mapsmall,
  },
  {
    name: "",
    description: "quatrodeux",
    href: "/gettheapp",
    icon: chat,
  },
];

const backgroundImageStyle: React.CSSProperties = {
  backgroundImage: "",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const myFont = localFont({ src: "./font/Poppins-SemiBold.ttf" });

export default function Page() {
  const t = useTranslations("homePage");

  const router = useRouter();

  const navigateToNew = () => {
    router.push("/new");
  };

  const handleNavigate = () => {
    router.push("/new"); // Replace with your desired path
  };

  const handleNavigateTwo = () => {
    router.push("/aide"); // Replace with your desired path
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false); // Simulate end of loading
          return 100;
        }
        return prevProgress + 1;
      });
    }, 10); // Adjust the interval time to control progress speed
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#f4f6f2] text-[#142019]">
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-0 rounded-full bg-[#52bf88]/10 animate-pulse"></div>
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="z-10 mb-4"
            priority
          />
          <div className="text-[#142019] font-bold text-lg animate-bounce mb-4">
            ...
          </div>
          <div className="w-64 bg-white rounded-full h-2 shadow-inner">
            <div
              className="bg-[#52bf88] h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-[#142019] font-medium mt-2">{progress}%</div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-shell">
      <div className={myFont.className}>
        <header className="modern-header">
          <nav
            aria-label="Global"
            className="modern-nav"
          >
            <div className="flex lg:flex-1">
              <a href="https://golimitless.fr/" className="-m-1.5 p-1.5">
                <span className="sr-only">GoLimitless</span>
                <Image
                  src={logoblack}
                  alt="Logo"
                  className="h-8 w-auto"
                  width={52}
                  height={52}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="modern-menu-button"
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon />
              </button>
              <button
                onClick={handleNavigateTwo}
                type="button"
                className="modern-nav-cta ml-3"
              >
                {t("Aide et Légal")}
              </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-2">
              <Popover className="relative">
                <PopoverButton className="modern-nav-link">
                  {t("Location de voiture")}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-4 w-4 flex-none text-black"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="modern-popover transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="modern-popover-item group relative text-sm leading-6"
                      >
                        <div className="modern-popover-icon">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {t(item.description)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              <button
                onClick={handleNavigate}
                className="modern-nav-link"
              >
                {t("Devenir locataire")}
              </button>
              <a
                href="/aide"
                className="modern-nav-link"
              >
                {t("Aide")}
              </a>
              <a
                href="/aide"
                className="modern-nav-link"
              >
                {t("Légal")}
              </a>
              <a
                href="/contact"
                className="modern-nav-link"
              >
                {t("Contact-w")}
              </a>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <LocaleSwitcher />
            </div>
            <SearchBar />
          </nav>

          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-40 bg-slate-900/20" />
            <DialogPanel className="modern-mobile-panel">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">limitless</span>
                  <Image
                    src={logoblack}
                    alt="Logo"
                    className="h-8 w-auto"
                    width={52}
                    height={52}
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="modern-menu-button"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton
                        style={{ outline: "none", boxShadow: "none" }}
                        className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2] focus:outline-none focus:ring-0 focus:shadow-none"
                      >
                        {t("Télécharger")}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            style={{ outline: "none", boxShadow: "none" }}
                            className="block rounded-2xl py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#f4f6f2] focus:outline-none focus:ring-0 focus:shadow-none"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>

                    <a
                      href="/new"
                      className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]"
                    >
                      {t("Devenir hôte")}
                    </a>
                    <a
                      href="/aide"
                      className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]"
                    >
                      {t("Aide")}
                    </a>
                    <a
                      href="/contact"
                      className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]"
                    >
                      {t("Contact-w")}
                    </a>
                    <LocaleSwitcher removeMargin removePadding />

                    <div className="mt-12 flex justify-center space-x-5 border-t border-gray-100 pt-8">
                      <a
                        href="https://x.com/LimitlessA66221"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Twitter"
                      >
                        <FaX size={20} />
                      </a>
                      <a
                        href="https://instagram.co"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Instagram"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61571093265011"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Facebook"
                      >
                        <FaFacebook size={20} />
                      </a>
                      <a
                        href="mailto:rentalcarapplimitlessslimitles@gmail.com"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Gmail"
                      >
                        <FaEnvelope size={20} />
                      </a>
                      <a
                        href="https://www.reddit.com/user/Born_Pangolin_3308/"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Reddit"
                      >
                        <FaReddit size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/limitlessapp-rental-car-app-limitlesss-1293b5344/"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a
                        href="https://www.tumblr.com/blog/golimitlesscom"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Tumblr"
                      >
                        <FaTumblr size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <section className="modern-hero gleb-product-hero">
          <div className="modern-hero-inner gleb-hero-grid">
            <div className="gleb-copy-stack">
              <motion.div
                className="mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="modern-eyebrow">
                  <a href="/aide">
                    {t("Notre assurance prend en compte tout")}
                  </a>
                </span>
              </motion.div>

             <h2 className="different modern-hero-title !text-2xl md:!text-3xl">
  <span>{t("Location de voitures")}</span>
</h2>
              <p className="modern-hero-copy">
                {t("appDescription")}
              </p>

              <div className="modern-hero-actions">
                <a
                  href="gettheapp"
                  className="modern-button modern-button-primary"
                >
                  <SvgComponentTrois />
                  {t("Télécharger l'appli pour IOS")}
                </a>

                <a
                  href="gettheapp"
                  className="modern-button modern-button-secondary"
                >
                  <SvgComponentQuatre />
                  {t("Télécharger l'appli pour Android")}
                </a>
              </div>

              <div className="modern-assurance">
                <p>
                  {t(
                    "Location de voiture entre particuliers et pros assurée par AXA"
                  )}
                </p>
                <Image
                  src="data:image/png;base64,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"
                  alt="Logo AXA"
                  width={100}
                  height={50}
                  className="modern-assurance-logo"
                />
              </div>

              <div className="modern-rating animate-rating">
                <span className="font-semibold">4.6/5</span>
                <span className="text-[12px]">★ ★ ★ ★ ★</span>
                <span>
                  ({t("10k avis sur les stores")})
                </span>
              </div>
            </div>
            <motion.div
              className="gleb-os-stage"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            >
              <div className="gleb-ui-panel gleb-panel-one" />
              <div className="gleb-ui-panel gleb-panel-two" />
              <div className="gleb-ui-panel gleb-panel-three" />
              <div className="gleb-device-shell">
                <Image src={heroPhone} alt="" priority />
              </div>
              <div className="gleb-route-card">
                <div className="gleb-route-row">
                  <span className="gleb-route-dot" />
                  <span className="gleb-route-line" />
                  <span className="gleb-route-chip" />
                </div>
                <div className="gleb-route-map" />
              </div>
            </motion.div>
          </div>
        </section>
        <TestBox />
        <Brands />
        <Features />
        <BannerBusiness />
        <Box2 />
        <InfoModal />
        <Boxone />
        <BlogSectione />
        <Reviews />
        <FAQSection />
        <Team />
        <Footer />
      </div>
    </div>
  );
}
