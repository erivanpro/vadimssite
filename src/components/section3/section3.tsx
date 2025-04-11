import Cube3D from '../cube3d/cube'; // Importer le composant Cube3D
import designskate from '../../assets/skate.webp'
export default function Section3() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">
       
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
          
<p className="mt-2 text-pretty text-cyan-600 text-4xl font-semibold tracking-tight  sm:text-5xl">
  Design des Skates JACKER
</p>
<p className="mt-6 text-lg/8 text-gray-600">
  Dans le cadre de ce projet, j'ai conçu un design de skates pour la marque JACKER. J'ai utilisé Adobe Illustrator et Adobe Photoshop pour réaliser la mise en forme et les détails du design.
</p>

           
            </div>
          </div>



          <img 
            src={designskate} 
            alt="Design des Skates JACKER" 
            className="w-full h-96 rounded-xl shadow-md object-cover"
          />
          
        </div>
      </div>
    </div>
  );
}
