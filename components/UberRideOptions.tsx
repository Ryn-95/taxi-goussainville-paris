'use client'

export default function UberRideOptions() {
  const rideOptions = [
    {
      icon: '🚗',
      name: 'Taxi Standard',
      description: 'Voitures récentes et confortables pour 1-4 passagers',
      features: ['1-4 passagers', 'Véhicules récents', 'Climatisation'],
      price: 'Dès 15€',
      popular: false
    },
    {
      icon: '✈️',
      name: 'Aéroport',
      description: 'Service spécialisé pour tous les aéroports franciliens',
      features: ['CDG, Orly, Beauvais', 'Suivi de vol', 'Tarif fixe'],
      price: 'Dès 45€',
      popular: true
    },
    {
      icon: '🏛️',
      name: 'Paris Premium',
      description: 'Transport confortable vers la capitale',
      features: ['Tous arrondissements', 'Itinéraire optimisé', 'Service haut de gamme'],
      price: 'Dès 35€',
      popular: false
    },
    {
      icon: '⏰',
      name: '24/7',
      description: 'Service disponible à toute heure',
      features: ['Disponible 24h/24', 'Week-ends inclus', 'Urgences'],
      price: 'Standard',
      popular: false
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Style Uber EXACT */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Vos options de transport
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez l'option qui vous convient le mieux
          </p>
        </div>

        {/* Ride Options Grid - Layout Uber */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rideOptions.map((option, index) => (
            <div 
              key={index} 
              className={`relative bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group ${
                option.popular ? 'border-black' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              
              {/* Popular Badge - Style Uber */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    Populaire
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4 text-center">
                {option.icon}
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold text-black">
                  {option.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {option.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-xs text-gray-500">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-lg font-bold text-black">
                    {option.price}
                  </p>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => window.open(`https://wa.me/33123456789?text=Bonjour,%20je%20souhaite%20réserver%20${option.name}`, '_blank')}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    option.popular 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info - Style Uber */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-black">
              Pourquoi choisir notre service ?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-2xl">🛡️</div>
                <h4 className="font-semibold text-black">Sécurité garantie</h4>
                <p className="text-gray-600 text-sm">Chauffeur professionnel licencié et véhicule assuré</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl">⚡</div>
                <h4 className="font-semibold text-black">Service rapide</h4>
                <p className="text-gray-600 text-sm">Réservation immédiate et prise en charge optimisée</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl">💳</div>
                <h4 className="font-semibold text-black">Tarifs transparents</h4>
                <p className="text-gray-600 text-sm">Prix fixe annoncé, aucune surprise à l'arrivée</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Besoin d'aide pour choisir ? Contactez-nous directement
          </p>
          <a
            href="tel:+33123456789"
            className="inline-flex items-center space-x-2 text-black hover:text-gray-700 transition-colors"
          >
            <span className="text-xl">📞</span>
            <span className="font-medium text-lg">01 23 45 67 89</span>
          </a>
        </div>
      </div>
    </section>
  )
}
