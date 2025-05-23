import { useState } from 'react';

const faqs = [
  {
    question: 'Comment créez-vous des designs UI/UX ?',
    answer:
      'Nous commençons par comprendre vos besoins et l\'expérience utilisateur que vous souhaitez. Ensuite, nous élaborons des maquettes et prototypes interactifs pour vous aider à visualiser le produit final. Enfin, nous réalisons le design en veillant à son ergonomie et à sa fluidité.',
  },
  {
    question: 'Qu\'est-ce qu\'un designer 3D fait exactement ?',
    answer:
      'Un designer 3D crée des objets, des personnages, ou des environnements en trois dimensions. Ce travail implique l’utilisation de logiciels spécialisés pour modeler, texturer et animer des éléments qui seront utilisés dans des jeux vidéo, des films d’animation, ou même des applications de réalité virtuelle.',
  },
  {
    question: 'Quel est le processus pour concevoir un projet UI/UX ?',
    answer:
      'Le processus commence par une phase de recherche où nous analysons vos utilisateurs et vos objectifs. Ensuite, nous créons des wireframes, des prototypes et nous testons le design pour nous assurer qu’il offre une expérience utilisateur optimale.',
  },
  {
    question: 'Quels logiciels utilisez-vous pour la conception 3D ?',
    answer:
      'Nous utilisons des logiciels comme Blender, Autodesk Maya, et ZBrush pour créer des modèles 3D. Ces outils nous permettent de travailler sur la modélisation, l’animation, le rendu et la simulation pour obtenir des résultats de haute qualité.',
  },
  // More questions...
];

export default function FAQ() {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    // Toggle the answer visibility for the clicked question
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Questions fréquemment posées
            </h2>
            <p className="mt-4  text-sm font-semibold text-white">
              Vous ne trouvez pas la réponse que vous cherchez ? Contactez notre{' '}
              <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
                équipe de support client
              </a>.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border border-gray-300 rounded-lg p-6 bg-gray-50"
                >
                  <dt
                    className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center"
                    onClick={() => toggleAnswer(index)} // Toggle the answer visibility
                  >
                    <span className="mr-2">
                      {openIndex === index ? '-' : '+'}
                    </span>
                    {faq.question}
                  </dt>
                  {openIndex === index && (
                    <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
