import { useRef } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'; // Import framer-motion
import video from '../../assets/animation_sphere_bleu_Vadims.mp4';

export default function Section5() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.scrollIntoView({ behavior: 'smooth' }); // Optional: scroll to video
    }
  };

  return (
    <div id="section5" className="section overflow-hidden bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">

          {/* Animated Video Player (with Apple effect) */}
          <motion.video
            ref={videoRef}
            src={video}
            controls
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            poster="/path-to-thumbnail.jpg" // Optional: add a custom poster image
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          />

          {/* Animated Text Block (with smooth transition) */}
          <motion.div
            className="lg:pr-8 lg:pt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="lg:max-w-lg">
              <p className="mt-2 text-cyan-600 text-3xl font-semibold tracking-tight sm:text-4xl">
                Projet 3D Pearl
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                Création d&apos;une animation 3D pour un projet vidéo interactif.
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
