import { Metadata } from 'next'
import { Shield, Award, Users, Clock, Car, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À Propos | Taxi Goussainville Paris | Chauffeur Professionnel',
  description: 'Découvrez notre service de taxi professionnel à Goussainville. Chauffeur expérimenté, véhicules récents, service personnalisé. Plus de 10 ans d\'expérience.',
  keywords: [
    'chauffeur taxi Goussainville',
    'taxi professionnel Goussainville',
    'expérience taxi',
    'service personnalisé taxi',
    'chauffeur expérimenté',
    'transport fiable Goussainville'
  ],
  openGraph: {
    title: 'À Propos | Taxi Goussainville Paris',
    description: 'Service de taxi professionnel avec plus de 10 ans d\'expérience. Chauffeur local, véhicules récents, service personnalisé.',
    url: 'https://taxi-goussainville-paris.vercel.app/a-propos',
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Fiabilité',
      description: 'Ponctualité et sérieux dans chaque course'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Service Client',
      description: 'Écoute et adaptation à vos besoins'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Professionnalisme',
      description: 'Formation continue et respect des règles'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Proximité',
      description: 'Service local et connaissance du terrain'
    }
  ]

  const stats = [
    { number: '10+', label: 'Années d\'expérience' },
    { number: '500+', label: 'Clients satisfaits' },
    { number: '4.8★', label: 'Note moyenne' },
    { number: '24/7', label: 'Disponibilité' }
  ]

  const certifications = [
    '✅ Licence de transport de personnes',
    '✅ Assurance professionnelle complète',
    '✅ Véhicule contrôlé régulièrement',
    '✅ Formation premiers secours',
    '✅ Connaissance approfondie de la région',
    '✅ Carte professionnelle valide'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-taxi-yellow to-yellow-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-taxi-black mb-6">
            À Propos de Notre Service
          </h1>
          <p className="text-xl text-taxi-black/80 max-w-3xl mx-auto">
            Découvrez l'histoire et les valeurs qui font de nous 
            votre partenaire de confiance pour tous vos déplacements.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-taxi-black">
                🚕 Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Depuis plus de 10 ans</strong>, nous servons fidèlement la communauté de 
                  Goussainville et de la région parisienne. Ce qui a commencé comme une passion 
                  pour le service client s'est transformé en une entreprise de transport de confiance.
                </p>
                <p>
                  Basé à <strong>Goussainville</strong>, notre service s'est développé grâce au 
                  bouche-à-oreille de nos clients satisfaits. Nous connaissons chaque rue, 
                  chaque raccourci, et surtout, nous comprenons les besoins de nos concitoyens.
                </p>
                <p>
                  Que ce soit pour un transfert vers l'aéroport CDG, une course vers Paris, 
                  ou simplement un déplacement local, nous mettons notre expérience et notre 
                  connaissance de la région à votre service.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-taxi-gray rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">👨‍💼</div>
                <h3 className="text-2xl font-bold text-taxi-black mb-4">
                  Votre Chauffeur
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Plus de 10 ans d'expérience</strong></p>
                  <p>Parfaite connaissance de la région</p>
                  <p>Service courtois et professionnel</p>
                  <p>Disponible 24h/24, 7j/7</p>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-taxi-yellow">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-taxi-black mb-4">
              🎯 Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui guide notre service au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-taxi-gray rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-taxi-yellow mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-taxi-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="bg-taxi-black text-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  🏆 Certifications & Garanties
                </h2>
                <p className="text-gray-300 mb-6">
                  Un service professionnel en règle avec toutes les exigences légales 
                  et de sécurité pour votre tranquillité d'esprit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-sm">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-taxi-yellow text-taxi-black rounded-xl p-8">
                  <Car className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Véhicule Professionnel
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>🚗 Véhicule récent et confortable</p>
                    <p>🛡️ Assurance tous risques</p>
                    <p>🔧 Entretien régulier certifié</p>
                    <p>🧼 Nettoyage après chaque course</p>
                    <p>📱 Équipé GPS et moyens de paiement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Philosophy */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-taxi-black mb-4">
              💫 Notre Philosophie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-taxi-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-taxi-black mb-3">
                Ponctualité
              </h3>
              <p className="text-gray-600">
                Nous respectons vos horaires comme s'il s'agissait des nôtres. 
                Votre temps est précieux, nous en avons conscience.
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-taxi-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-taxi-black mb-3">
                Proximité
              </h3>
              <p className="text-gray-600">
                En tant que service local, nous connaissons nos clients 
                et adaptons notre service à leurs besoins spécifiques.
              </p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 text-taxi-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-taxi-black mb-3">
                Bienveillance
              </h3>
              <p className="text-gray-600">
                Chaque client est unique. Nous adaptons notre service 
                avec attention et respect pour chaque personne transportée.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-taxi-black mb-4">
            🤝 Faites-Nous Confiance
          </h2>
          <p className="text-xl text-taxi-black/80 mb-8 max-w-3xl mx-auto">
            Rejoignez nos nombreux clients satisfaits et découvrez un service 
            de taxi qui place la qualité et la satisfaction client au cœur de ses priorités.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33123456789"
              className="bg-taxi-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              📞 01 23 45 67 89
            </a>
            <Link
              href="/reservation"
              className="bg-white hover:bg-gray-50 text-taxi-black font-bold px-8 py-4 rounded-xl border-2 border-taxi-black transition-colors duration-200"
            >
              📝 Réserver maintenant
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-taxi-black/10 text-taxi-black font-bold px-8 py-4 rounded-xl border-2 border-taxi-black transition-colors duration-200"
            >
              💬 Nous contacter
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
