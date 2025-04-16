import { motion } from 'framer-motion';
import thetrace from '../../assets/thetrace.webp';

export default function Section4() {
  return (
    <div id="section4" className="section overflow-hidden bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* Animated Text Block (from left) */}
          <motion.div
            className="lg:pr-8 lg:pt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="lg:max-w-lg">
              <p className="text-cyan-600 text-3xl font-semibold tracking-tight sm:text-4xl">
                THE TRACE
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                Création d&apos;une couverture de magazine pour THE TRACE
              </p>
            </div>
          </motion.div>

          {/* Animated Image (with Apple effect: smooth scaling and shadow) */}
          <motion.img
            src={thetrace}
            alt="The Trace magazine cover"
            className="w-80 h-auto rounded-xl shadow-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}
