import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '🚖 SERVICES TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ CDG ORLY PARIS 24H/24',
  description: '⭐ TOUS SERVICES TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ Transferts CDG Orly Beauvais 🚖 Courses locales Goussainville Paris Sarcelles 📞 Transport médical 24h/24 🏆 RÉSERVATION IMMÉDIATE',
  keywords: [
    'services taxi Goussainville', 'SERVICES TAXI GOUSSAINVILLE',
    'taxi Goussainville CDG', 'TAXI GOUSSAINVILLE CDG',
    'taxi Goussainville Orly', 'TAXI GOUSSAINVILLE ORLY',
    'taxi Goussainville Paris', 'TAXI GOUSSAINVILLE PARIS',
    'transport médical Goussainville', 'TRANSPORT MÉDICAL GOUSSAINVILLE',
    'navette aéroport Goussainville', 'NAVETTE AÉROPORT GOUSSAINVILLE',
    'course locale Goussainville', 'COURSE LOCALE GOUSSAINVILLE',
    'taxi 24h Goussainville', 'TAXI 24H GOUSSAINVILLE',
    'services taxi Sarcelles', 'services taxi Villiers-le-Bel',
    'taxi conventionné Goussainville', 'TAXI CONVENTIONNÉ GOUSSAINVILLE',
    'réservation taxi Goussainville', 'RÉSERVATION TAXI GOUSSAINVILLE'
  ],
  openGraph: {
    title: '🚖 SERVICES TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ CDG ORLY PARIS 24H/24',
    description: '⭐ TOUS SERVICES TAXI GOUSSAINVILLE ⭐ Transferts CDG Orly 🚖 Courses locales 📞 Transport médical 24h/24',
    url: 'https://taxi-goussainville-paris.vercel.app/services',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚖 SERVICES TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ CDG ORLY PARIS 24H/24',
    description: '⭐ TOUS SERVICES TAXI GOUSSAINVILLE ⭐ Transferts CDG Orly 🚖 Courses locales 📞 Transport médical 24h/24'
  },
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/services',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Course locale',
      description: 'Déplacements dans Goussainville et communes limitrophes. Service rapide et fiable pour tous vos trajets quotidiens.',
      image: '/images/Course_locale.svg',
      features: [
        'Temps de réponse sous 5 minutes',
        'Tarifs conventionnés transparents',
        'Chauffeurs locaux expérimentés',
        'Paiement espèces ou carte'
      ]
    },
    {
      title: 'Réservation à l\'avance',
      description: 'Planifiez vos trajets importants : rendez-vous médicaux, vols, événements. Tranquillité d\'esprit garantie.',
      image: '/images/Réservationàl\'avance.jpg',
      features: [
        'Réservation jusqu\'à 30 jours à l\'avance',
        'Confirmation par SMS',
        'Suivi en temps réel',
        'Annulation gratuite 2h avant'
      ]
    },
    {
      title: 'Transport médical',
      description: 'Service spécialisé pour vos rendez-vous médicaux. Véhicules adaptés et chauffeurs formés à l\'assistance.',
      image: '/images/service_medical.jpg',
      features: [
        'Aide à la montée/descente',
        'Véhicules spacieux',
        'Chauffeurs sensibilisés',
        'Conventionné CPAM'
      ]
    },
    {
      title: 'Navette aéroports',
      description: 'Transferts vers CDG, Orly et Beauvais. Surveillance des vols et ponctualité garantie.',
      image: '/images/aeroport.jpg',
      features: [
        'Suivi des vols en temps réel',
        'Accueil personnalisé',
        'Aide avec les bagages',
        'Trajets directs sans détour'
      ]
    },
    {
      title: 'Paris et banlieue',
      description: 'Courses vers tous les arrondissements parisiens et communes de banlieue. Connaissance parfaite des itinéraires.',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: [
        'Tous arrondissements couverts',
        'Itinéraires optimisés',
        'Évitement des embouteillages',
        'Tarifs compétitifs'
      ]
    },
    {
      title: 'Service 24h/24',
      description: 'Disponibilité totale jour et nuit, week-ends et jours fériés. Un numéro unique pour tous vos besoins.',
      image: '/images/24:7.jpg',
      features: [
        'Disponibilité 365 jours/an',
        'Réponse immédiate',
        'Service de nuit sécurisé',
        'Tarification transparente'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-black mb-6">
            Nos services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transport de personnes professionnel et conventionné à Goussainville, Paris et région parisienne
          </p>
          
          {/* CTA Contact */}
          <div className="inline-flex items-center space-x-3 bg-white border-2 border-black text-black rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-xl animate-pulse">📞</div>
            <div>
              <div className="font-bold text-sm">Service disponible 24h/7</div>
              <a href="tel:+33628532473" className="text-lg font-black hover:underline transition-all duration-200">
                06 28 53 24 73
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a 
                    href="tel:+33628532473"
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>📞</span>
                    <span>Réserver maintenant</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins spécifiques de transport
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+33628532473"
              className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              📞 Appeler maintenant
            </a>
            <a 
              href="https://wa.me/33628532473?text=Bonjour, j'aimerais en savoir plus sur vos services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}