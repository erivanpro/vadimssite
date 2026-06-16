import { useTranslations } from "next-intl"

const testimonials = [
  
    {
      body: 'Un service rapide, pratique et fiable Grâce à limitless, j\'ai pu réserver une voiture en quelques minutes seulement',
      author: {
        name: 'Claire Martin',
        handle: 'clairemartin',
        imageUrl:
          'data:image/jpeg;base64,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',
      },
    },
   
    {
      body: 'Une expérience sans tracas ! Les véhicules sont toujours propres et disponibles limitless a totalement changé ma façon de voyager',
      author: {
        name: 'Sophie Dufresne',
        handle: 'sophiedufresne',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD527s1e9dXM1ek5OBNPnNK-bbTpV0DVa9FA&s',
      },
    },
    {
      body: 'J\'ai réservé une voiture pour un week-end et le service a été exceptionnel Une interface facile à utiliser et un service client réactif',
      author: {
        name: 'Lucien Bernard',
        handle: 'lucienbernard',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeZjZWEr4oFmJhILQQgTy7-WUX9BmRrAAFw&s',
      },
    },
    {
      body: 'Louer une voiture n\'a jamais été aussi simple et rapide Merci limitless pour ce service de qualité !',
      author: {
        name: 'Julie Thibault',
        handle: 'julie_thibault',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjKbB2XQoZx4Hk2zYFH5WkNhPAdqR_Er9dQ&s',
      },
    },
    {
      body: 'J\'adore utiliser limitless! Le choix des véhicules est vaste, et tout est très bien organisé Je ne louerai plus jamais autrement',
      author: {
        name: 'Pierre Moreau',
        handle: 'pierremoreau',
        imageUrl:
          'https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg',
      },
    },
    {
      body: 'L\'application est intuitive et l\'assistance client est top Si vous avez besoin d\'une voiture, limitless est la solution idéale',
      author: {
        name: 'Emilie Dubois',
        handle: 'emiliedubois',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLM1Q7qT-rEEMkwci95ITtFQf46zv6EIbMdQ&s',
      },
    },
  ]
  
  export default function Reviews() {
    const t= useTranslations('homePage')
    return (
      <section className="review-section soft-section">
        <div className="modern-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-black text-[#2f8d61]">{t('Témoignages')}</h2>
            <p  className="different modern-section-title mt-3">
             {t('Nous avons travaillé avec des milliers de personnes formidables')}
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-6 sm:-mx-3 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-6 sm:inline-block sm:w-full sm:px-3">
                  <figure className="testimonial-card text-sm/6">
                    <blockquote className="text-gray-900">
                      <p>{t(`“${testimonial.body}”`)}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
