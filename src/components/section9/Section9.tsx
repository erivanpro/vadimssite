import maisonchalon from '../../assets/affiche-chalon-marrin-portfolio-vadims.webp';
import maisonchalonlogo from '../../assets/Fichier_11logo_hiboux_chalon_noir.webp';

export default function Section9() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">
          <img 
            src={maisonchalon} 
            alt="Maison Chalon" 
            className="w-64 h-auto rounded-xl shadow-md object-cover" 
          />
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* Logo */}
              <div className="w-48 h-auto mb-4">
                <img 
                  src={maisonchalonlogo} 
                  alt="Maison Chalon Logo" 
                  className="w-22 h-auto object-contain"
                />
              </div>

              {/* Title */}
              <p className="text-cyan-600 text-4xl font-semibold tracking-tight sm:text-5xl">
                Maison Chalon
              </p>

              {/* Description */}
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Création d&apos;un branding pour une boutique de luxe spécialisée dans la petite maroquinerie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
