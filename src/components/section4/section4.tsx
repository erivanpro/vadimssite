import thetrace from '../../assets/thetrace.webp';

export default function Section4() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:flex-row-reverse">
          

        <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            
             

                 {/* Title */}
                 <p className="text-cyan-600 text-4xl font-semibold tracking-tight sm:text-5xl">
               THE TRACE
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Création d&apos;une couverture de magazine pour THE TRACE
              </p>
          
            </div>
          </div>
          {/* Responsive Image */}
          <img 
            src={thetrace} 
            alt="The Trace magazine cover" 
            className="w-96 h-auto rounded-xl shadow-md object-cover" 
          />
          
        
        </div>
      </div>
    </div>
  );
}
