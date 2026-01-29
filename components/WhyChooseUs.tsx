import { Shield, Clock, CreditCard, Users, MapPin, Star } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Ponctualité Garantie',
      description: 'Nous respectons scrupuleusement vos horaires. Suivi GPS en temps réel.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Service Professionnel',
      description: 'Chauffeur expérimenté, véhicules assurés et régulièrement entretenus.'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Tarifs Transparents',
      description: 'Prix fixe annoncé à l\'avance, aucune surprise. Paiement CB accepté.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Disponibilité 24/7',
      description: 'Service continu jour et nuit, week-ends et jours fériés inclus.'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Connaissance Locale',
      description: 'Expertise parfaite de la région et des itinéraires optimaux.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Satisfaction Client',
      description: 'Note moyenne de 4.8/5 basée sur plus de 500 avis clients.'
    }
  ]

  return (
    <section className="py-20 bg-taxi-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-taxi-black mb-4">
            Pourquoi Choisir Notre Service ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis des années, nous nous engageons à fournir un service de transport 
            fiable et professionnel pour tous vos déplacements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-taxi-yellow mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-taxi-black mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-taxi-yellow mb-2">500+</div>
              <p className="text-gray-600">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-taxi-yellow mb-2">4.8★</div>
              <p className="text-gray-600">Note Moyenne</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-taxi-yellow mb-2">24/7</div>
              <p className="text-gray-600">Disponibilité</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-taxi-yellow mb-2">3</div>
              <p className="text-gray-600">Aéroports Desservis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

