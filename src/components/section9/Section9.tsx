import { motion } from 'framer-motion';
import maisonchalon from '../../assets/affiche-chalon-marrin-portfolio-vadims.webp';
import maisonchalonlogo from '../../assets/Fichier_11logo_hiboux_chalon_noir.webp';

export default function Section9() {
  return (
    <div id="section9" className="overflow-hidden section bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">

          {/* Animated Image with Apple effect (smooth scaling on hover) */}
          <motion.img
            src={maisonchalon}
            alt="Maison Chalon"
            className="w-48 h-auto rounded-xl shadow-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          />

          {/* Animated Text Block */}
          <motion.div
            className="lg:pr-8 lg:pt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="lg:max-w-lg">
              <div className="w-36 h-auto mb-4">
                <img
                  src={maisonchalonlogo}
                  alt="Maison Chalon Logo"
                  className="w-16 h-auto object-contain"
                />
              </div>

              <p className="text-cyan-600 text-3xl font-semibold tracking-tight sm:text-4xl">
                Maison Chalon
              </p>

              <p className="mt-4 text-lg leading-8 text-white">
                Création d&apos;un branding pour une boutique de luxe spécialisée dans la petite maroquinerie.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
