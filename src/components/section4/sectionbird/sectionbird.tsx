import {  useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bird1 from '../../../assets/bird1.webp';
import bird2 from '../../../assets/bird2.webp';
import bird3 from '../../../assets/bird3.webp';
const birdImages = [bird1, bird2, bird3];
export default function SectionBird() {
  const [currentImage, setCurrentImage] = useState(0);
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
        </div>
      </div>
    </div>
  );
}
