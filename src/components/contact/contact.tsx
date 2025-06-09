import {  EnvelopeIcon } from '@heroicons/react/24/outline'
import Header from '../header/header'
import Footer from '../footer/footer'

export default function ContactComponent() {
  return (
    <>
      <Header />
      <div className="relative isolate bg-black text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              
                Entrez en contact
              </h2>
             
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
               
                
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="mailto:hello@example.com" className="hover:text-white">
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* FORMULAIRE */}
          <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {[
                  { id: 'first-name', label: 'Prénom ', auto: 'given-name' },
                  { id: 'last-name', label: 'Nom', auto: 'family-name' }
                ].map(({ id, label, auto }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-semibold text-white">
                      {label}
                    </label>
                    <div className="mt-2.5">
                      <input
                        id={id}
                        name={id}
                        type="text"
                        autoComplete={auto}
                        className="block w-full rounded-md bg-gray-800 text-white px-3.5 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-gray-800 text-white px-3.5 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold text-white">
                   Numéro de téléphone
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md bg-gray-800 text-white px-3.5 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-white">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-gray-800 text-white px-3.5 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Envoyer le message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
       <Footer />
    </>
  )
}
