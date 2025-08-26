'use client'

import Image from 'next/image'

export default function VehiculeSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Layout horizontal ultra épuré comme Uber */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image côté gauche */}
            <div className="relative">
              <Image 
                src="/images/Skoda.png"
                alt="Taxi professionnel Skoda Superb"
                width={600}
                height={400}
                className="w-full h-80 object-contain"
              />
            </div>

            {/* Contenu côté droit - Style Uber minimal */}
            <div className="space-y-6">
              
              {/* Titre principal épuré */}
              <div>
                <h2 className="text-3xl font-black text-black mb-2" style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
                }}>
                  Véhicule récent et confortable
                </h2>
                <p className="text-lg text-gray-600">
                  Skoda Superb
                </p>
              </div>
              
              {/* Équipements en liste verticale épurée */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-base">Climatisation automatique</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-base">GPS dernière génération</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-base">Chargeurs USB et sans fil</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-base">Assurance tous risques</span>
                </div>
              </div>
              
              {/* CTA minimal Uber style */}
              <div className="pt-4">
                <a 
                  href="tel:+33628532473"
                  className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 text-base"
                >
                  <span>Réserver maintenant</span>
                </a>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}
