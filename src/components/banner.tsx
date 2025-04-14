import { motion } from 'framer-motion'; // Import Framer Motion
import ThreeJsCarousel from "./carousel/carousel"; // Assuming ThreeJsCarousel is still in use.
import './banner.css'
export default function Banner() {
  return (
    <div className="relative bg-white h-screen w-full overflow-hidden">
      
   
      <div className="px-6 py-24 sm:px-6 sm:py-12 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
        <div className="relative rounded-full p-[2px] mb-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500">
  <motion.div
    className="rounded-full  px-3 py-1 text-sm text-gray-600 bg-white dark:bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    je suis disponible pour de nouveaux projets
    <a
      href="https://www.instagram.com/vadims_mrtnez/"
      className="font-semibold ml-4 text-cyan-600 relative"
    >
      <span aria-hidden="true" className="absolute inset-0" />
      rejoignez mon instagram <span aria-hidden="true">&rarr;</span>
    </a>
  </motion.div>
</div>

<motion.h2
  className="text-balance text-4xl font-bold tracking-tight sm:text-5xl uppercase relative"
  style={{ fontFamily: 'Futura, sans-serif' }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  <span className="bg-gradient-to-r from-blue-500 via-cyan-400 via-purple-500 to-orange-400 bg-clip-text text-transparent relative z-10">
    Digital
  </span>{' '}
  <span className="border-2 border-black py-2.5 px-4 inline-block relative z-10">
    Designer ---------------&gt;
  </span>

  {/* Mario and Turtle Animation */}
  <div className="animation-container absolute top-0 left-0 z-0 w-full h-full">
    <div className="mario-container absolute top-1/3 left-1/4 animate-mario z-0">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXuam9tXIXUUCrh95GbURDwDjnr-PVret7w&s" // Replace with Mario image URL
        alt="Mario"
        className="h-20 w-20"
      />
    </div>
    <div className="turtle-container absolute top-1/2 left-1/2 animate-turtle z-0">
      <img
        src="https://i.pinimg.com/736x/fa/0c/75/fa0c75a1eb14be36fa4aed640ac6a439.jpg" // Replace with Turtle image URL
        alt="Turtle"
        className="h-16 w-16"
      />
    </div>
  </div>

</motion.h2>




<motion.p
  className="mx-auto mt-6 max-w-xl text-lg text-black"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.5 }}
>
  Que vous ayez besoin d'une expérience utilisateur fluide, d'interfaces intuitives ou de visuels <em>3D innovants</em>, je mets mes compétences à votre service pour concrétiser vos projets numériques.
</motion.p>


          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
           <a
  href="mailto:vadimsmartinezpro@gmail.com"
  className="flex items-center gap-2 rounded-md lg:rounded-full bg-black lg:px-3.5 lg:py-3.5 px-2 py-1.25 text-sm font-semibold text-white shadow-sm hover:bg-black hover:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
>
  {/* Gmail Icon (White) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M12 13.065L2 6.923V18a2 2 0 002 2h16a2 2 0 002-2V6.923l-10 6.142zM12 11L2 4h20L12 11z" />
  </svg>
  Contactez-moi
</a>

            <a href="https://www.figma.com/proto/KiM2uouvXGr0YBN02MzBgt/portfolio-2024?page-id=0%3A1&node-id=11-2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A2&t=nranzJc5pzANBwY4-1" className="text-sm underline font-semibold text-black">
             mon figma <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <ThreeJsCarousel />
    </div>
  );
}
