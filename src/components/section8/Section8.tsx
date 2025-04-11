import Cube3D from '../cube3d/cube'; // Importer le composant Cube3D
import vortex from '../../assets/vortex.webp'
export default function Section8() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">
                    <img 
                        src={vortex} 
                        alt="Vortex Utopia" 
                        className="w-full h-96 rounded-xl shadow-md object-cover"
                    />  
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                           
                            <p className="mt-2 text-pretty text-cyan-600 text-4xl font-semibold tracking-tight  sm:text-5xl">
                                Vortex Utopia
                            </p>
                            
                            <p className="mt-6 text-lg/8 text-gray-600">
                            Création d'un programme dépliant pour un festival de musique techno (Vortex Utopia).
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
