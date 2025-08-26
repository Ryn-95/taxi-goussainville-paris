import Link from 'next/link'

export default function UberServicesSection() {
  const services = [
    {
      icon: '✈️',
      title: 'Transferts aéroports',
      description: 'CDG, Orly, Beauvais',
      details: 'Suivi de vol, attente gratuite, tarifs fixes',
      price: 'Dès 45€',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      link: '/services#aeroports'
    },
    {
      icon: '🏙️',
      title: 'Transport Paris',
      description: 'Tous arrondissements',
      details: 'Itinéraires optimisés, évitement trafic',
      price: 'Dès 35€',
      bgColor: 'bg-green-50',
      iconBg: 'bg-uber-green',
      link: '/services#paris'
    },
    {
      icon: '🚗',
      title: 'Courses locales',
      description: 'Goussainville et environs',
      details: 'Réservation immédiate, véhicules récents',
      price: 'Dès 15€',
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-taxi-yellow text-uber-black',
      link: '/services#local'
    },
    {
      icon: '⏰',
      title: 'Service 24/7',
      description: 'Disponible jour et nuit',
      details: 'Urgences, courses nocturnes, sur-mesure',
      price: 'Sur devis',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500',
      link: '/services#personnalises'
    }
  ]

  return (
    <section className="bg-uber-white py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Style Uber */}
        <div className="text-center mb-16">
          <h2 className="text-uber-3xl lg:text-uber-4xl font-bold text-uber-black mb-4">
            Nos services de transport
          </h2>
          <p className="text-uber-lg text-uber-gray-text max-w-2xl mx-auto">
            Des solutions adaptées à tous vos besoins de déplacement 
            avec un service professionnel et des tarifs transparents.
          </p>
        </div>

        {/* Services Grid - Style Uber */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group"
            >
              <div className={`${service.bgColor} rounded-uber-xl p-6 h-full transition-all duration-300 hover:shadow-uber-lg hover:-translate-y-1 border border-transparent hover:border-uber-gray-dark`}>
                
                {/* Icon */}
                <div className={`${service.iconBg} w-12 h-12 rounded-uber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-xl">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-uber-lg text-uber-black mb-1">
                      {service.title}
                    </h3>
                    <p className="text-uber-sm text-uber-gray-text font-medium">
                      {service.description}
                    </p>
                  </div>

                  <p className="text-uber-sm text-uber-gray-text leading-relaxed">
                    {service.details}
                  </p>

                  {/* Price */}
                  <div className="pt-2 border-t border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="text-uber-base font-bold text-uber-black">
                        {service.price}
                      </span>
                      <span className="text-uber-sm text-uber-gray-text group-hover:text-uber-black transition-colors">
                        En savoir plus →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section - Style Uber */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-uber-3xl font-bold text-uber-black mb-2">500+</div>
            <div className="text-uber-sm text-uber-gray-text">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-uber-3xl font-bold text-uber-black mb-2">4.8⭐</div>
            <div className="text-uber-sm text-uber-gray-text">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-uber-3xl font-bold text-uber-black mb-2">24/7</div>
            <div className="text-uber-sm text-uber-gray-text">Disponibilité</div>
          </div>
          <div className="text-center">
            <div className="text-uber-3xl font-bold text-uber-black mb-2">3</div>
            <div className="text-uber-sm text-uber-gray-text">Aéroports desservis</div>
          </div>
        </div>

        {/* CTA Section - Style Uber */}
        <div className="mt-16 text-center">
          <div className="bg-uber-gray rounded-uber-xl p-8 lg:p-12">
            <h3 className="text-uber-2xl font-bold text-uber-black mb-4">
              Prêt à réserver ?
            </h3>
            <p className="text-uber-base text-uber-gray-text mb-8 max-w-lg mx-auto">
              Contactez-nous maintenant pour une réservation immédiate 
              ou planifiez votre course à l'avance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33123456789"
                className="bg-uber-black hover:bg-gray-800 text-uber-white font-medium px-8 py-4 rounded-uber text-uber-base transition-all duration-200 transform hover:scale-105"
              >
                📞 Appeler maintenant
              </a>
              <Link
                href="/reservation"
                className="bg-uber-white hover:bg-gray-50 text-uber-black font-medium px-8 py-4 rounded-uber text-uber-base border border-uber-gray-dark transition-all duration-200 transform hover:scale-105"
              >
                📱 Réserver en ligne
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
