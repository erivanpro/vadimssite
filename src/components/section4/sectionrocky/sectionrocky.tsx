import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import rockyone from '../../../assets/rocky1.webp';
import rockytwo from '../../../assets/rocky2.png';

const rockyImages = [rockyone, rockytwo];

export default function SectionRocky() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % rockyImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

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
                Rocky
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                Création d&apos;un logo pour Rocky.
              </p>
            </div>
          </motion.div>

          {/* Auto-changing Animated Image */}
          <motion.img
            key={currentImage}
            src={rockyImages[currentImage]}
            alt="Rocky logo design"
            className="w-80 h-auto rounded-xl shadow-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}
