'use client'

import Image from 'next/image'

export default function TaxiProfessionnelSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title avec image Skoda */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight mb-6">
            Taxi professionnel
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Véhicule récent et confortable pour tous vos déplacements
          </p>
        </div>

        {/* Informations professionnelles */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Chauffeur professionnel */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  👨‍💼
                </div>
                <h3 className="font-bold text-black">Chauffeur expérimenté</h3>
                <p className="text-sm text-gray-600">15+ ans d'expérience • Note 4.9/5</p>
              </div>
            </div>

            {/* Équipements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-black mb-4">Équipements inclus</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '❄️', text: 'Climatisation' },
                  { icon: '🗺️', text: 'GPS récent' },
                  { icon: '📱', text: 'Chargeurs' },
                  { icon: '🛡️', text: 'Assurance' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="lg:col-span-2">
              <a 
                href="tel:+33628532473"
                className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 max-w-md mx-auto"
              >
                <span>📞</span>
                <span>Réserver ce véhicule</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
