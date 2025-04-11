import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'UI/UX Designer',
    id: 'tier-ux',
    href: '#',
    priceMonthly: '300€ minimum',
    description: 'Design d\'interfaces utilisateur et expérience utilisateur sur mesure pour améliorer l\'ergonomie et l\'esthétique de vos produits.',
    features: ['Design de maquettes', 'Audit UX/UI', 'Wireframes', 'Prototypes interactifs'],
  },
  {
    name: '3D Blender Designer',
    id: 'tier-3d',
    href: '#',
    priceMonthly: '1200€',
    description: 'Création de modèles 3D, animations et visualisations haute qualité avec Blender pour donner vie à vos idées.',
    features: [
      'Modélisation 3D',
      'Rendu photoréaliste',
      'Animation 3D',
      'Simulation physique avancée',
    ],
  },
]

export default function MesServices() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base/7 font-semibold text-cyan-400">Services</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Choisissez le service adapté à vos besoins
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Choisissez un service de qualité, adapté à vos projets, qu'il s'agisse de design UI/UX ou de création 3D.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3 id={tier.id} className="text-base/7 font-semibold text-cyan-600">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                      <span className="text-base/7 font-semibold text-gray-600">/service</span>
                    </div>
                    <p className="mt-6 text-base/7 text-gray-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-cyan-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="mailto:contact@example.com"  // Remplacez par votre adresse email
                    className="mt-8 block rounded-full bg-cyan-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  >
                    Contacter par email
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
