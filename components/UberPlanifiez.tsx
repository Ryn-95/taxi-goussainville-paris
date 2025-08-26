'use client'

import Image from 'next/image'

export default function UberPlanifiez() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <h2 className="text-4xl lg:text-5xl font-black text-black mb-16">
          Planifiez
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Card turquoise EXACTEMENT comme Uber */}
          <div className="bg-gradient-to-br from-teal-300 to-teal-400 rounded-3xl p-12 relative overflow-hidden">
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                Commandez votre course avec Taxi Reserve
              </h3>

              <div className="space-y-6 mb-8">
                <p className="text-black font-medium">Choisir une date et une heure</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-black">Date</label>
                    <div className="bg-white rounded-lg px-4 py-3 flex items-center space-x-2">
                      <span className="text-lg">📅</span>
                      <span className="font-medium text-black">Aug 26</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-black">Heure</label>
                    <div className="bg-white rounded-lg px-4 py-3 flex items-center space-x-2">
                      <span className="text-lg">🕒</span>
                      <span className="font-medium text-black">12:08 PM</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Suivant
                </button>
              </div>
            </div>

            {/* Vraie image de planification comme Uber */}
            <div className="absolute right-0 top-0 bottom-0 w-64 opacity-90">
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Planification et organisation"
                  fill
                  sizes="256px"
                  className="object-cover rounded-r-3xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-l from-teal-400/20 to-transparent rounded-r-3xl"></div>
            </div>
          </div>

          {/* Right - Advantages */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-black">Avantages</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-lg">📅</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Choix de l'heure exacte de prise en charge jusqu'à 90 jours à l'avance ;
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-lg">⏰</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Temps d'attente supplémentaire inclus pour retrouver votre chauffeur ;
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-lg">❌</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Annulation sans frais jusqu'à 60 minutes à l'avance.
                </p>
              </div>
            </div>

            <button className="text-black underline hover:no-underline">
              Consultez les conditions générales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
