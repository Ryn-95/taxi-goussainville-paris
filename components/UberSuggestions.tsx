'use client'

import Image from 'next/image'

export default function UberSuggestions() {
  const suggestions = [
    {
      title: 'Course locale',
      subtitle: 'Local',
      description: 'Course locale',
      details: 'Déplacements dans Goussainville et communes limitrophes. Tarifs conventionnés et transparents.',
      button: 'Réserver',
      image: '/images/Course_locale.svg',
      features: [
        'Tarifs conventionnés',
        'Service rapide',
        'Zones couvertes'
      ]
    },
    {
      title: 'Réservation à l\'avance',
      subtitle: 'Sur RDV',
      description: 'Réservation à l\'avance',
      details: 'Réservez votre taxi pour un rendez-vous médical, un vol, ou tout autre événement important.',
      button: 'Planifier',
      image: '/images/Réservationàl\'avance.jpg',
      features: [
        'Réservation garantie',
        'Rappel automatique',
        'Ponctualité assurée'
      ]
    },
    {
      title: 'Transport médical',
      subtitle: 'Médical',
      description: 'Transport médical',
      details: 'Service spécialisé pour les rendez-vous médicaux. Véhicules adaptés et chauffeurs formés.',
      button: 'En savoir plus',
      image: '/images/service_medical.jpg',
      features: [
        'Véhicules adaptés',
        'Chauffeurs formés',
        'Prise en charge totale'
      ]
    },
    {
      title: 'Navette aéroports',
      subtitle: 'Aéroports',
      description: 'Navette aéroports',
      details: 'Transferts vers CDG, Orly et Beauvais. Service fiable avec surveillance des vols.',
      button: 'Réserver navette',
      image: '/images/aeroport.jpg',
      features: [
        'Surveillance des vols',
        'CDG, Orly, Beauvais',
        'Service fiable'
      ]
    },
    {
      title: 'Paris et banlieue',
      subtitle: 'Paris',
      description: 'Paris et banlieue',
      details: 'Courses vers tous les arrondissements parisiens et communes de banlieue.',
      button: 'Voir zones',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: [
        'Tous arrondissements',
        'Banlieue proche',
        'Tarifs transparents'
      ]
    },
    {
      title: 'Service 24h/24',
      subtitle: '24h/24',
      description: 'Service 24h/24',
      details: 'Disponible jour et nuit, week-ends et jours fériés. Un numéro unique à retenir.',
      button: 'Appeler',
      image: '/images/24:7.jpg',
      features: [
        'Disponible 24h/24',
        'Week-ends inclus',
        'Jours fériés'
      ]
    }
  ]

  return (
    <section className="bg-white py-responsive">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title épuré comme VehiculeSection */}
        <div className="text-center mb-16 my-responsive">
          <h2 className="text-responsive-xl text-3xl font-black text-black mb-2" style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
          }}>
            Nos services
          </h2>
          <p className="text-responsive-base text-lg text-gray-600">
            Transport de personnes professionnel et conventionné
          </p>
        </div>

        {/* Services en disposition alternée droite-gauche */}
        <div className="space-y-20">
          {suggestions.map((item, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div className={`service-grid auto-responsive-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Image côté gauche ou droite selon l'index */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={600}
                    height={400}
                    className="service-image image-responsive w-full h-80 object-cover rounded-xl"
                  />
                </div>

                {/* Contenu côté opposé - Style Uber minimal comme VehiculeSection */}
                <div className={`service-content space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  
                  {/* Badge épuré */}
                  <div className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                    {item.subtitle}
                  </div>
                  
                  {/* Titre principal épuré */}
                  <div>
                    <h3 className="service-title text-responsive-lg text-3xl font-black text-black mb-2" style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
                    }}>
                      {item.title}
                    </h3>
                    <p className="text-responsive-base text-lg text-gray-600">
                      {item.details}
                    </p>
                  </div>
                  
                  {/* Features en liste verticale épurée avec checkmarks noirs */}
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 text-gray-700">
                        <span className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">✓</span>
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA minimal Uber style */}
                  <div className="pt-4">
                    <a 
                      href="tel:+33628532473"
                      className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 text-base"
                    >
                      <span>{item.button}</span>
                    </a>
                  </div>
                  
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
