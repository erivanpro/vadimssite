import { motion } from "framer-motion";

const logos = [
  {
    alt: 'Figma',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png',
  },
  {
    alt: 'Photoshop',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
  },
  {
    alt: 'Adobe',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEPcn7-1FET8-xENfhX6J97htkiZnanwxbg&s',
  },
  {
    alt: 'Blender',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTlRTVHi3l7nOcFO4cni11SqS6oSVh0aRRg&s',
  },
  {
    alt: 'Adobe Creative Cloud',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1280px-Adobe_Corporate_logo.svg.png',
  },
];

export default function Tech() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Création d'interfaces et de visuels 3D avec des outils modernes
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <motion.img
              key={logo.alt}
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 3, delay: index * 0.2 }}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
