'use client'

import Image from 'next/image'

export default function ZonesService() {
  const zones = [
    {
      title: 'Goussainville Centre',
      subtitle: '< 5 min',
      description: 'Goussainville Centre',
      details: 'Zone de couverture principale avec temps de réponse garanti sous 5 minutes.',
      time: '< 5 min',
      image: '/images/Course_locale.svg',
      features: [
        'Temps de réponse garanti',
        'Couverture prioritaire',
        'Service immédiat'
      ]
    },
    {
      title: 'Communes limitrophes',
      subtitle: '10-15 min',
      description: 'Communes limitrophes',
      details: 'Sarcelles, Villiers-le-Bel, Garges-lès-Gonesse et environs.',
      time: '10-15 min',
      image: '/images/Réservationàl\'avance.jpg',
      features: [
        'Sarcelles et Villiers-le-Bel',
        'Garges-lès-Gonesse',
        'Communes environnantes'
      ]
    },
    {
      title: 'Paris et petite couronne',
      subtitle: '30-45 min',
      description: 'Paris et petite couronne',
      details: 'Tous arrondissements parisiens et départements 92, 93, 94.',
      time: '30-45 min',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: [
        'Tous arrondissements',
        'Départements 92, 93, 94',
        'Service étendu'
      ]
    },
    {
      title: 'Aéroports franciliens',
      subtitle: 'Direct',
      description: 'Aéroports franciliens',
      details: 'Charles de Gaulle, Orly, Le Bourget et Beauvais-Tillé.',
      time: 'Direct',
      image: '/images/aeroport.jpg',
      features: [
        'Charles de Gaulle (CDG)',
        'Orly et Le Bourget',
        'Beauvais-Tillé'
      ]
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title épuré comme les autres sections */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-black mb-2" style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
          }}>
            Zones de service
          </h2>
          <p className="text-lg text-gray-600">
            Une couverture étendue pour tous vos déplacements
          </p>
        </div>

        {/* Zones en disposition alternée droite-gauche */}
        <div className="space-y-20">
          {zones.map((zone, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Image côté gauche ou droite selon l'index */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image 
                    src={zone.image} 
                    alt={zone.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  {/* Badge temps épuré */}
                  <div className="absolute top-6 right-6 bg-black text-white text-sm font-medium px-4 py-2 rounded-full">
                    {zone.time}
                  </div>
                </div>

                {/* Contenu côté opposé - Style Uber minimal */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  
                  {/* Badge épuré */}
                  <div className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                    {zone.subtitle}
                  </div>
                  
                  {/* Titre principal épuré */}
                  <div>
                    <h3 className="text-3xl font-black text-black mb-2" style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
                    }}>
                      {zone.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {zone.details}
                    </p>
                  </div>
                  
                  {/* Features en liste verticale épurée avec checkmarks noirs */}
                  <div className="space-y-3">
                    {zone.features.map((feature, featureIndex) => (
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
                      <span>📞</span>
                      <span>Réserver</span>
                    </a>
                  </div>
                  
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA général épuré */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-black mb-4" style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
            }}>
              Service professionnel garanti
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Quelle que soit votre destination, nous vous y emmenons dans les meilleures conditions
            </p>
            <a 
              href="tel:+33628532473"
              className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
            >
              <span>📞</span>
              <span>Contactez-nous pour plus d'informations</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
