'use client'

export default function UberTestimonials() {
  const testimonials = [
    {
      text: "Service impeccable ! Toujours à l'heure pour mes trajets vers CDG. Je recommande vivement ce chauffeur professionnel.",
      author: "Marie L.",
      location: "Goussainville",
      service: "Transfert CDG",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      text: "Très satisfait du service. Véhicule propre, conduite souple et tarifs raisonnables. Mon taxi de confiance !",
      author: "Pierre D.",
      location: "Sarcelles", 
      service: "Course locale",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      text: "Ponctuel et disponible même en urgence. M'a sauvé plusieurs fois pour des rendez-vous importants. Merci !",
      author: "Sophie M.",
      location: "Paris 10ème",
      service: "Transport Paris",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      text: "Excellent service pour mes trajets professionnels vers Orly. Chauffeur sympathique et professionnel.",
      author: "Ahmed K.",
      location: "Villiers-le-Bel",
      service: "Transfert Orly",
      rating: 5,
      avatar: "👨‍💻"
    }
  ]

  return (
    <section className="bg-uber-gray py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-uber-3xl lg:text-uber-4xl font-bold text-uber-black mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-uber-lg text-uber-gray-text max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. 
            Découvrez leurs témoignages authentiques.
          </p>
        </div>

        {/* Global Rating - Style Uber */}
        <div className="text-center mb-16">
          <div className="bg-uber-white rounded-uber-xl p-8 inline-block shadow-uber">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <span className="text-uber-3xl font-bold text-uber-black">4.8</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-taxi-yellow text-xl">⭐</span>
                ))}
              </div>
            </div>
            <p className="text-uber-base text-uber-gray-text font-medium">
              Basé sur 47 avis Google
            </p>
          </div>
        </div>

        {/* Testimonials Grid - Style Uber */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-uber-white rounded-uber-xl p-6 shadow-uber hover:shadow-uber-lg transition-all duration-200 border border-uber-gray-dark"
            >
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-taxi-yellow">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-uber-base text-uber-black leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-uber-gray rounded-full flex items-center justify-center">
                    <span className="text-lg">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-uber-base text-uber-black">
                      {testimonial.author}
                    </div>
                    <div className="text-uber-sm text-uber-gray-text">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                
                {/* Service Tag */}
                <div className="bg-uber-gray px-3 py-1 rounded-full">
                  <span className="text-uber-xs text-uber-gray-text font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators - Style Uber */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-uber-white rounded-uber-xl p-6 text-center shadow-uber">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-uber-base text-uber-black mb-2">
              Service sécurisé
            </h3>
            <p className="text-uber-sm text-uber-gray-text">
              Licence professionnelle et assurance complète
            </p>
          </div>
          
          <div className="bg-uber-white rounded-uber-xl p-6 text-center shadow-uber">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-uber-base text-uber-black mb-2">
              Réservation rapide
            </h3>
            <p className="text-uber-sm text-uber-gray-text">
              Réponse en moins de 2 minutes garantie
            </p>
          </div>
          
          <div className="bg-uber-white rounded-uber-xl p-6 text-center shadow-uber">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="font-bold text-uber-base text-uber-black mb-2">
              Paiement flexible
            </h3>
            <p className="text-uber-sm text-uber-gray-text">
              Espèces, carte bancaire, tarifs transparents
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-uber-base text-uber-gray-text mb-6">
            Rejoignez nos clients satisfaits
          </p>
          <a
            href="tel:+33123456789"
            className="bg-uber-black hover:bg-gray-800 text-uber-white font-medium px-8 py-4 rounded-uber text-uber-base transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Réserver maintenant
          </a>
        </div>
      </div>
    </section>
  )
}
