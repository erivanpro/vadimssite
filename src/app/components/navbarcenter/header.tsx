'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from 'next/image';
import Navsearch from './navsearch';
import Footer from '../footer';
import { useRouter } from 'next/navigation';  // Import useRouter
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../localeSwitcher/LocaleSwitcher';
import NavSearchTwo from './NavSearchTwo';
import MenuIcon from '../menuIcon/MenuIcon';




const navigation = [
  { name: 'Location de voiture', href: '/' },
  { name: 'Devenir locataire', href: '/new' },  // Direct link, no need for handleNavigate
  { name: 'Professionnels', href: '/professionals' },
  { name: 'Assurance', href: '/assurance' },
  { name: 'Aide', href: '/aide' },
  { name: 'Légal', href: '/aide' },
]



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();  // Initialize router
  
  // Handle navigation to the new page
  const handleNavigate = () => {
    router.push('/new');  // Navigate to the '/new' page
  };
const t = useTranslations("homePage")
  return (
    <div className="subpage-shell">
      <header className="modern-header">
        <nav aria-label="Global" className="modern-nav">
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:items-center lg:gap-x-2">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="modern-nav-link">
                  {t(item.name)}
                </a>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="modern-menu-button"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon />
              </button>
            </div>
          </div>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />
          </a>
         
          <div className="flex flex-1 justify-end">
          <LocaleSwitcher removePadding removeMargin/>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-slate-900/20" />
          <DialogPanel className="modern-mobile-panel">
            <div className="flex items-center justify-between">
              <div className="flex flex-1">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="modern-menu-button"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />


              </a>
              <div className="flex flex-1 justify-end">
            
              </div>
            </div>
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
            </div>
          </DialogPanel>
        </Dialog>
      </header>


      
      <NavSearchTwo />
      <Footer />
    </div>
  );
}
