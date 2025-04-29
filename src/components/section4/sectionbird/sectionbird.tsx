import { useRef, useState, useEffect } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import bird1 from '../../../assets/bird1.webp';
import bird2 from '../../../assets/bird2.webp';
import bird3 from '../../../assets/bird3.webp';

const birdImages = [bird1, bird2, bird3];

export default function SectionBird() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % birdImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div id="section5" className="section overflow-hidden bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">

          {/* Animated Image instead of video */}
          <motion.img
            key={currentImage}
            src={birdImages[currentImage]}
            alt="Bird"
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
              <p className="mt-2 text-cyan-600 text-3xl font-semibold tracking-tight sm:text-4xl">
                Cours de Photoshop
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
               Création photoshop d'un oiseau en 3D , ainsi que d'autres éléments graphiques.
              </p>
              <button
                onClick={handlePlayVideo}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg ring-4 ring-cyan-600 hover:ring-cyan-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <PlayCircleIcon className="h-6 w-6" />
                Voir la vidéo
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
