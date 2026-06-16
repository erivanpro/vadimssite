'use client'

import { useState } from 'react'
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
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', href: '#', description: 'Get detailed analytics.', icon: ChartPieIcon },
  { name: 'Engagement', href: '#', description: 'Boost customer engagement.', icon: CursorArrowRaysIcon },
  { name: 'Security', href: '#', description: 'Advanced security features.', icon: FingerPrintIcon },
  { name: 'Integrations', href: '#', description: 'Seamless integrations.', icon: SquaresPlusIcon },
]

const callsToAction = [
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  { name: 'Watch Demo', href: '#', icon: PlayCircleIcon },
  { name: 'View All', href: '#', icon: RectangleGroupIcon },
]

const navigation = [
  { name: 'Location de voiture', href: '/' },
  { name: 'Devenir locataire', href: '/new' },
  { name: 'Aide', href: '/aide' },
  { name: 'Légal', href: '/legal' },
]

export default function SuperHead() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative isolate z-10 bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              Product
              <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel className="absolute inset-x-0 top-0 bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8">
                {products.map((item) => (
                  <div key={item.name} className="group relative rounded-lg p-6 text-sm hover:bg-gray-50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <a href={item.href} className="mt-6 block font-semibold text-gray-900">
                      {item.name}
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50">
                <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm">
          {/* Dialog content */}
        </DialogPanel>
      </Dialog>
    </header>
  )
}
