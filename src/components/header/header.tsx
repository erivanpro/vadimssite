'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/signature_vadims_noir.webp'
import cv from '../../assets/cv 2025.pdf';

const navigation = [
  { name: 'Mes projets', href: '' },
  { name: 'Contact', href: 'mailto:vadimsmartinezpro@gmail.co' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/100 backdrop-blur-2xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8 rounded-xl"
      >
        <div className="flex lg:flex-1">
          <a href="https://www.instagram.com/blooky.product/" className="block -m-1.5 p-1.5 text-left">
            <span className="sr-only">Your Company</span>
            <img src={logo} className="lg:h-26 lg:w-36 mr-12 w-22 h-22" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-black">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
        <a
  href={cv}
  className="inline-block rounded-full text-[8px] bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-4 py-2 lg:text-sm md:px-6 md:py-3 md:text-base font-semibold shadow-sm hover:from-cyan-500 hover:to-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-300"
>
  Télécharger mon CV
</a>

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white/10 backdrop-blur-xl rounded-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={logo} className="lg:h-26 lg:w-36 mr-12 w-36 h-22" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://www.linkedin.com/in/vadims-martinez/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-black hover:bg-gray-50"
                >
                  voir mon linkedin
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
