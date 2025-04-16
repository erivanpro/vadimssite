import { motion } from 'framer-motion';
import Cube3D from '../cube3d/cube'; // Importer le composant Cube3D

export default function Section1() {
  return (
    <div className="overflow-hidden section bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-white">
                à votre disposition
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Je propose mes services en tant que designer UI et 3D.
              </p>
              <p className="mt-6 text-lg/8 text-white">
                N'hésitez pas à m'envoyer un email ou à me demander un devis.
              </p>
            </div>
          </motion.div>

          {/* Animated Cube3D */}
          <motion.div
            className="h-[200px] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
           
          </motion.div>

        </div>
      </div>
    </div>
  );
}
