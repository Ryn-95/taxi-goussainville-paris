import { Plane, MapPin, Car, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      icon: <Plane className="h-12 w-12" />,
      title: 'Transferts Aéroports',
      description: 'CDG, Orly, Beauvais - Service ponctuel et fiable pour tous vos vols',
      features: ['Suivi de vol', 'Attente gratuite 30min', 'Tarif fixe'],
      link: '/services#aeroports'
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: 'Courses Locales',
      description: 'Transport dans Goussainville, Sarcelles, Villiers-le-Bel et environs',
      features: ['Réservation immédiate', 'Tarifs compétitifs', 'Véhicules récents'],
      link: '/services#local'
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: 'Paris Intra-muros',
      description: 'Liaisons rapides vers tous les arrondissements parisiens',
      features: ['Connaissance parfaite', 'Itinéraires optimisés', 'Évitement embouteillages'],
      link: '/services#paris'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: 'Services Personnalisés',
      description: 'Courses avec attente, trajets longue distance, prestations sur-mesure',
      features: ['Disponibilité 24/7', 'Devis personnalisé', 'Service premium'],
      link: '/services#personnalises'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-taxi-black mb-4">
            Nos Services de Transport
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions de transport adaptées à tous vos besoins, 
            avec un service professionnel et des tarifs transparents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-taxi-gray rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-taxi-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-taxi-black mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-taxi-yellow rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center text-taxi-yellow font-semibold hover:text-yellow-600 transition-colors duration-200"
              >
                En savoir plus
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="bg-taxi-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 inline-block"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  )
}
