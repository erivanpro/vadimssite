import { motion } from 'framer-motion'; // Import Framer Motion
import ThreeJsCarousel from "./carousel/carousel"; // Assuming ThreeJsCarousel is still in use.
import './banner.css'
export default function Banner() {
  return (
    <div className="relative bg-black h-screen w-full overflow-hidden">
      
   
      <div className="px-6 py-24 sm:px-6 sm:py-12 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
      

<motion.h2
  className="text-balance mt-22 mb-12 text-4xl font-bold tracking-tight sm:text-5xl uppercase  relative"
  style={{ fontFamily: 'Futura, sans-serif' }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  <span className="bg-gradient-to-r  from-blue-500 via-cyan-400 via-purple-500 to-orange-400 bg-clip-text text-transparent relative z-10">
    Digital   Designer
  </span>
 




</motion.h2>




<motion.p
  className="mx-auto mt-6 max-w-xl text-lg mb-12 text-white"
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
  className="flex items-center gap-2 rounded-md lg:rounded-full bg-white lg:px-3.5 lg:py-3.5 px-2 py-1.25 text-sm font-semibold text-black shadow-sm hover:bg-white hover:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
>

  Contactez-moi
</a>




            <a href="https://www.figma.com/proto/KiM2uouvXGr0YBN02MzBgt/portfolio-2024?page-id=0%3A1&node-id=11-2&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A2&t=nranzJc5pzANBwY4-1" className="text-sm underline font-semibold text-white">
             mon figma <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>

 
      <ThreeJsCarousel />
     
    </div>
  );
}
