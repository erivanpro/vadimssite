import { motion } from 'framer-motion';
import vortex from '../../assets/vortex.webp';

export default function Section8() {
  return (
    <div id="section8" className="section overflow-hidden bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* Animated Image with Apple effect (scale & shadow) */}
          <motion.img
            src={vortex}
            alt="Vortex Utopia"
            className="w-80 h-auto rounded-xl shadow-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          />

          {/* Animated Text Block with smooth transition */}
          <motion.div
            className="lg:pr-8 lg:pt-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="lg:max-w-lg">
              <p className="mt-2 text-cyan-600 text-3xl font-semibold tracking-tight sm:text-4xl">
                Vortex Utopia
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                Création d&apos;un programme dépliant pour un festival de musique techno (Vortex Utopia).
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
