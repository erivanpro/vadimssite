import { motion } from 'framer-motion'; // Import Framer Motion
import ThreeJsCarousel from "./carousel/carousel"; // Assuming ThreeJsCarousel is still in use.

export default function Banner() {
  return (
    <div className="relative bg-white h-screen w-full overflow-hidden">
      
   
      <div className="px-6 py-24 sm:px-6 sm:py-12 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">

          <motion.div
            className="relative rounded-full px-3 mb-12 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            je suis disponible pour de nouveaux projets
            <a href="https://www.instagram.com/vadims_mrtnez/" className="font-semibold ml-4 text-cyan-600">
              <span aria-hidden="true" className="absolute inset-0 " />
              rejoignez mon instagram <span aria-hidden="true">&rarr;</span>
            </a>
        
          </motion.div>
          
          <motion.h2
            className="text-balance text-4xl font-bold tracking-tight text-black sm:text-5xl uppercase"
            style={{ fontFamily: 'Futura, sans-serif' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Digital Designer
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Que vous ayez besoin d'une expérience utilisateur fluide, d'interfaces intuitives ou de visuels 3D
            innovants, je mets mes compétences à votre service pour concrétiser vos projets numériques.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <a
              href="mailto:vadimsmartinezpro@gmail.co"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black hover:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contactez-moi
            </a>
            <a href="https://www.figma.com/proto/KiM2uouvXGr0YBN02MzBgt/portfolio-2024?page-id=0%3A1&node-id=11-2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A2&t=nranzJc5pzANBwY4-1" className="text-sm underline font-semibold text-black">
              Découvrez mes design sur figma <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* 3D Carousel Component */}
      <ThreeJsCarousel />
    </div>
  );
}
