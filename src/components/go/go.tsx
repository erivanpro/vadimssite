import image from '../../assets/magazineFichier_2Design_3d_illustrator_cover_the_trace.webp'; // Make sure the path is correct

export default function Go() {
  return (
    <div 
      className="bg-white bg-[repeating-linear-gradient(0deg,rgba(128,128,128,0.1) 0,rgba(128,128,128,0.1) 1px,rgba(255,255,255,0) 1px,rgba(255,255,255,0) 2px)]"
    >
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* Gradient container with relative positioning */}
        <div 
          className="relative isolate overflow-hidden bg-cyan-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain', // Ensures the background image fits inside the container
            backgroundPosition: 'center', // Center the background image
            backgroundRepeat: 'no-repeat', // Prevent the background from repeating
            backgroundAttachment: 'fixed', // Makes the background stay fixed while scrolling
            zIndex: 1, // Ensures the background image is behind the text
          }}
        >
          {/* Content inside the gradient container */}
          <div className="relative z-10">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Avez-vous un projet de design UI, UX ou 3D ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
              Je suis la bonne personne pour réaliser votre projet !
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:vadimsmartinezpro@gmail.com"
                className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Parlez-moi de votre projet
              </a>
              <a href="mailto:vadimsmartinezpro@gmail.com" className="text-sm/6 font-semibold text-white">
                En savoir plus <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Optional SVG for decoration */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
