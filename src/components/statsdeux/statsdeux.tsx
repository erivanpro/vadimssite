const stats = [
    { id: 1, name: 'Projets totaux', value: '9 projets réalisés' },
    { id: 2, name: 'Projets UI/UX', value: '15 projets UI/UX' },
    { id: 3, name: 'Clients satisfaits', value: '120 clients satisfaits' },
  ]
  
  export default function Statsdeux() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  