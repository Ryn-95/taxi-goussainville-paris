import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie L.',
      location: 'Goussainville',
      rating: 5,
      text: 'Service impeccable ! Toujours à l\'heure pour mes trajets vers CDG. Je recommande vivement ce chauffeur professionnel.',
      service: 'Transfert aéroport CDG'
    },
    {
      name: 'Pierre D.',
      location: 'Sarcelles',
      rating: 5,
      text: 'Très satisfait du service. Véhicule propre, conduite souple et tarifs raisonnables. Mon taxi de confiance !',
      service: 'Course locale'
    },
    {
      name: 'Sophie M.',
      location: 'Paris 10ème',
      rating: 5,
      text: 'Ponctuel et disponible même en urgence. M\'a sauvé plusieurs fois pour des rendez-vous importants. Merci !',
      service: 'Course Paris'
    },
    {
      name: 'Ahmed K.',
      location: 'Villiers-le-Bel',
      rating: 5,
      text: 'Excellent service pour mes trajets professionnels vers Orly. Chauffeur sympathique et professionnel.',
      service: 'Transfert aéroport Orly'
    },
    {
      name: 'Catherine R.',
      location: 'Goussainville',
      rating: 5,
      text: 'Service de qualité, je n\'hésite plus à faire appel à lui pour tous mes déplacements. Très fiable !',
      service: 'Services multiples'
    },
    {
      name: 'Thomas B.',
      location: 'Garges-lès-Gonesse',
      rating: 5,
      text: 'Tarifs compétitifs et service irréprochable. Particulièrement apprécié la flexibilité pour les horaires.',
      service: 'Course longue distance'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-taxi-black mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. 
            Découvrez leurs témoignages authentiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-taxi-gray rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-taxi-yellow mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-taxi-yellow fill-current" />
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-taxi-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-taxi-yellow font-medium">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Rating */}
        <div className="mt-16 text-center">
          <div className="bg-taxi-yellow rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-4xl font-bold text-taxi-black">4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-taxi-black fill-current" />
                ))}
              </div>
            </div>
            <p className="text-taxi-black font-semibold">
              Note moyenne basée sur 47 avis Google
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Rejoignez nos clients satisfaits et réservez votre course dès maintenant
          </p>
          <a
            href="tel:+33123456789"
            className="bg-taxi-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 inline-block"
          >
            Réserver maintenant - 01 23 45 67 89
          </a>
        </div>
      </div>
    </section>
  )
}

