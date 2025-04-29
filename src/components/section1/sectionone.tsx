import { motion } from 'framer-motion';

export default function Section1() {
  return (
    <div className="overflow-hidden  section bg-black py-24 sm:py-32 flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Flexbox container for one row */}
        <div className="flex items-center justify-center space-x-8">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:pr-8 lg:pt-4 mb-12"
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
          
        </div>
      </div>
    </div>
  );
}
