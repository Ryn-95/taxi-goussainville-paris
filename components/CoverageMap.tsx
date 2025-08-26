'use client'

export default function CoverageMap() {
  const zones = [
    { name: 'Goussainville', type: 'primary', icon: '🏠' },
    { name: 'Sarcelles', type: 'local', icon: '🏘️' },
    { name: 'Villiers-le-Bel', type: 'local', icon: '🏘️' },
    { name: 'Garges-lès-Gonesse', type: 'local', icon: '🏘️' },
    { name: 'Paris Centre', type: 'primary', icon: '🏛️' },
    { name: 'CDG Terminal 1&2', type: 'airport', icon: '✈️' },
    { name: 'Orly Sud & Ouest', type: 'airport', icon: '✈️' },
    { name: 'Beauvais-Tillé', type: 'airport', icon: '✈️' }
  ]

  return (
    <section className="bg-uber-black text-uber-white py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-uber-3xl lg:text-uber-4xl font-bold mb-4">
            Zone de service étendue
          </h2>
          <p className="text-uber-lg text-gray-300 max-w-2xl mx-auto">
            Nous couvrons Goussainville, la région parisienne 
            et tous les aéroports franciliens avec un service professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Map Visualization - Style Uber */}
          <div className="relative">
            <div className="bg-uber-white rounded-uber-xl overflow-hidden shadow-uber-xl">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 relative">
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
                
                {/* Central Location - Goussainville */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-uber-black rounded-full flex items-center justify-center shadow-uber-lg">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="bg-uber-black text-uber-white px-3 py-1 rounded-uber text-uber-xs font-medium whitespace-nowrap">
                        Goussainville
                      </div>
                    </div>
                    
                    {/* Coverage Circle */}
                    <div className="absolute inset-0 -m-16 border-2 border-taxi-yellow/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 -m-24 border border-taxi-yellow/20 rounded-full"></div>
                  </div>
                </div>

                {/* Destination Points */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-uber">
                  <span className="text-uber-white text-sm">✈️</span>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-uber">
                  <span className="text-uber-white text-sm">✈️</span>
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-uber-green rounded-full flex items-center justify-center shadow-uber">
                  <span className="text-uber-white text-sm">🏛️</span>
                </div>
                <div className="absolute bottom-8 right-8 w-10 h-10 bg-taxi-yellow rounded-full flex items-center justify-center shadow-uber">
                  <span className="text-uber-black text-xs">🚗</span>
                </div>

                {/* Service Status */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-uber-green text-uber-white px-4 py-2 rounded-full text-uber-xs font-medium flex items-center space-x-2">
                  <div className="w-2 h-2 bg-uber-white rounded-full animate-pulse"></div>
                  <span>Service actif 24/7</span>
                </div>
              </div>
            </div>

            {/* Map Action */}
            <button 
              onClick={() => window.open('https://maps.google.com/maps?q=Goussainville,France&zoom=11', '_blank')}
              className="absolute inset-0 bg-uber-black/0 hover:bg-uber-black/20 transition-all duration-200 rounded-uber-xl flex items-center justify-center opacity-0 hover:opacity-100"
            >
              <div className="bg-uber-white rounded-uber px-6 py-3 shadow-uber-lg">
                <span className="text-uber-black font-medium">🗺️ Voir sur Google Maps</span>
              </div>
            </button>
          </div>

          {/* Coverage Details - Style Uber */}
          <div className="space-y-8">
            <div>
              <h3 className="text-uber-2xl font-bold text-uber-white mb-6">
                Destinations couvertes
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {zones.map((zone, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-uber-lg transition-all duration-200 hover:bg-gray-800 ${
                      zone.type === 'primary' 
                        ? 'bg-taxi-yellow text-uber-black' 
                        : zone.type === 'airport'
                        ? 'bg-blue-600 text-uber-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    <div className="text-xl">{zone.icon}</div>
                    <div>
                      <div className="font-medium">{zone.name}</div>
                      <div className={`text-sm ${
                        zone.type === 'primary' ? 'text-uber-black/80' : 'text-gray-400'
                      }`}>
                        {zone.type === 'primary' ? 'Zone principale' : 
                         zone.type === 'airport' ? 'Aéroport' : 'Zone locale'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features - Style Uber */}
            <div className="bg-gray-900 rounded-uber-xl p-6">
              <h4 className="font-bold text-uber-base text-uber-white mb-4">
                ✨ Avantages de notre couverture
              </h4>
              <div className="space-y-3">
                {[
                  'Connaissance parfaite des itinéraires',
                  'Évitement des zones de trafic dense',
                  'Temps de trajet optimisés',
                  'Service disponible 24h/24'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-uber-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <p className="text-gray-300 text-uber-base">
                Votre destination n'apparaît pas dans la liste ?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+33123456789"
                  className="bg-taxi-yellow hover:bg-yellow-500 text-uber-black font-medium px-6 py-3 rounded-uber text-uber-base transition-all duration-200 transform hover:scale-105 text-center"
                >
                  📞 Demander un devis
                </a>
                <a
                  href="https://wa.me/33123456789?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20une%20destination%20spécifique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-uber-white hover:bg-gray-100 text-uber-black font-medium px-6 py-3 rounded-uber text-uber-base transition-all duration-200 transform hover:scale-105 text-center"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
