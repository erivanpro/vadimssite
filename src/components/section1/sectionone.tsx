import Cube3D from '../cube3d/cube'; // Importer le composant Cube3D
export default function Section1() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-cyan-600">
              à votre disposition </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Je propose mes services en tant que designer UI et 3D.
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              N'hésitez pas à m'envoyer un email ou à me demander un devis.
              </p>
            
            </div>
          </div>
          <Cube3D /> 
        </div>
      </div>
    </div>
  );
}
