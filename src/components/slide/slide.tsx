import  { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './slide.css'



const slides = [
  {
    title: 'PROJET XV DE FRANCE',
    description: `En charge de réaliser le backstage du reportage d’un joueur du XV de France en sélection nationale.`,
    image: 'https://images.unsplash.com/photo-1726137065565-2c088892ee76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
  },
  {
    title: 'Maison Chalon',
    description: `Création d'un branding pour une boutique de luxe spécialisée dans la petite maroquinerie.`,
    image: '',
  },
  {
    title: 'The Trace',
    description: `Interface UX/UI pour un projet e-tron. Importance du design immersif et fluide.`,
    image: 'https://www.vadimsmartinez.com/assets/thetrace-CnAoI2d3.webp',
  },
  {
    title: 'Vortex Utopia',
    description: `Création d'un programme dépliant pour un festival de musique techno (Vortex Utopia).`,
    image: 'https://www.vadimsmartinez.com/assets/vortex-DmaGsQF-.webp',
  },
  {
    title: 'Skates JACKER',
    description: `Dans le cadre de ce projet, j'ai conçu un design de skates pour la marque JACKER. J'ai utilisé Adobe Illustrator et Adobe Photoshop pour réaliser la mise en forme et les détails du design.`,
    image: 'https://www.vadimsmartinez.com/assets/skate-DuDfY3dX.webp',
  },
 
  {
    title: 'Rocky',
    description: `Création d'un logo pour Rocky.`,
    image: 'https://www.vadimsmartinez.com/assets/rocky2-nFacTLIj.png',
  },

  {
    title: 'Cours de Photoshop',
    description: `Création d'un logo pour Rocky.`,
    image: 'https://www.vadimsmartinez.com/assets/bird1-BAN48Z_w.webp',
  },
];














const HorizontalSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    tween.current = gsap.to(track, {
      xPercent: -50,
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  const changeSlide = (direction: 'prev' | 'next') => {
    if (tween.current) tween.current.pause();
    gsap.to(trackRef.current, {
      x: direction === 'prev' ? '+=300' : '-=300',
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        tween.current?.play();
        return void 0;
      },
    });

    setCurrentIndex((prevIndex) =>
      direction === 'prev'
        ? (prevIndex - 1 + slides.length) % slides.length
        : (prevIndex + 1) % slides.length
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto h-[80vh] bg-black overflow-hidden relative rounded-3xl shadow-2xl">
      {/* Partie gauche dynamique */}
      <div
        className="relative w-full lg:w-1/2 h-[40vh] bg-black/50 lg:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase">
            {currentSlide.title}
          </h2>
          <p className="mt-4 text-white text-sm md:text-base max-w-sm">
            {currentSlide.description}
          </p>
        </div>
      </div>

      {/* Partie droite - carrousel horizontal */}
      <div className="w-full lg:w-1/2 relative overflow-hidden z-10">
        <div
          ref={trackRef}
          className="flex w-max space-x-6 px-6 py-8"
          style={{ whiteSpace: 'nowrap' }}
        >
          {[...slides, ...slides].map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-md bg-white transition-transform hover:scale-105 cursor-pointer"
              onClick={() => setCurrentIndex(idx % slides.length)}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Boutons */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-20">
        <button
          onClick={() => changeSlide('prev')}
          className="text-2xl p-3 bg-gray-700 hover:bg-black rounded-full text-white"
        >
          ←
        </button>
        <button
          onClick={() => changeSlide('next')}
          className="text-2xl p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HorizontalSlider;
