import { useRef } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
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
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">

          {/* Responsive Video with ref */}
          <video
            ref={videoRef}
            src={video}
            controls
            className="w-full h-auto rounded-xl shadow-md"
            poster="/path-to-thumbnail.jpg" // Optional
          />

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-cyan-600 sm:text-5xl">
                Projet 3D Pearl
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Création d&apos;une couverture de magazine pour THE TRACE
              </p>
              <button
                onClick={handlePlayVideo}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm ring-4 ring-cyan-600 hover:ring-cyan-100"
              >
                <PlayCircleIcon className="h-6 w-6" />
                voir la vidéo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
