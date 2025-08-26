import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '📞 CONTACT TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ RÉSERVATION 24H/24',
  description: '📞 CONTACT TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ RÉSERVATION IMMÉDIATE 24H/24 📱 Téléphone SMS WhatsApp 🚖 Service professionnel Goussainville Paris CDG Orly 🏆 RÉPONSE GARANTIE',
  keywords: [
    'contact taxi Goussainville', 'CONTACT TAXI GOUSSAINVILLE',
    'numéro taxi Goussainville', 'NUMÉRO TAXI GOUSSAINVILLE',
    'téléphone taxi Goussainville', 'TÉLÉPHONE TAXI GOUSSAINVILLE',
    'appeler taxi Goussainville', 'APPELER TAXI GOUSSAINVILLE',
    'réserver taxi Goussainville', 'RÉSERVER TAXI GOUSSAINVILLE',
    'WhatsApp taxi Goussainville', 'WHATSAPP TAXI GOUSSAINVILLE',
    'SMS taxi Goussainville', 'SMS TAXI GOUSSAINVILLE',
    'contact 24h taxi Goussainville', 'CONTACT 24H TAXI GOUSSAINVILLE',
    'réservation taxi Goussainville', 'RÉSERVATION TAXI GOUSSAINVILLE',
    'taxi Goussainville 06 28 53 24 73', 'TAXI GOUSSAINVILLE 06 28 53 24 73'
  ],
  openGraph: {
    title: '📞 CONTACT TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ RÉSERVATION 24H/24',
    description: '📞 CONTACT TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ RÉSERVATION IMMÉDIATE 24H/24 📱 Téléphone SMS WhatsApp',
    url: 'https://taxi-goussainville-paris.vercel.app/contact',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '📞 CONTACT TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ RÉSERVATION 24H/24',
    description: '📞 CONTACT TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ RÉSERVATION IMMÉDIATE 24H/24 📱 Téléphone SMS WhatsApp'
  },
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/contact',
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Appel téléphonique',
      description: 'Appelez-nous directement pour une réservation immédiate',
      action: 'Appeler maintenant',
      link: 'tel:+33628532473',
      available: '24h/7'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Envoyez un message WhatsApp avec les détails de votre course',
      action: 'Envoyer un message',
      link: 'https://wa.me/33628532473?text=Bonjour, je souhaite réserver un taxi',
      available: '24h/7'
    },
    {
      icon: '📱',
      title: 'SMS',
      description: 'Envoyez un SMS avec votre demande de réservation',
      action: 'Envoyer un SMS',
      link: 'sms:+33628532473',
      available: '24h/7'
    }
  ]

  const serviceZones = [
    {
      name: 'Goussainville Centre',
      response: '< 5 minutes',
      description: 'Zone de couverture principale'
    },
    {
      name: 'Communes limitrophes',
      response: '10-15 minutes', 
      description: 'Sarcelles, Villiers-le-Bel, Garges-lès-Gonesse'
    },
    {
      name: 'Paris et petite couronne',
      response: '30-45 minutes',
      description: 'Tous arrondissements parisiens'
    },
    {
      name: 'Aéroports franciliens',
      response: 'Direct',
      description: 'CDG, Orly, Le Bourget, Beauvais'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-black mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Service disponible 24 heures sur 24, 7 jours sur 7. 
                Réponse immédiate garantie.
              </p>
              
              {/* Contact principal */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📞</div>
                  <h2 className="text-2xl font-bold text-black mb-2">Contact direct</h2>
                  <a 
                    href="tel:+33628532473"
                    className="text-3xl font-black text-black hover:text-gray-600 transition-colors block mb-4"
                  >
                    06 28 53 24 73
                  </a>
                  <p className="text-sm text-gray-600">Disponible 24h/24 - 7j/7</p>
                </div>
              </div>

              {/* Temps de réponse */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-bold text-green-800">Temps de réponse</h3>
                    <p className="text-green-700 text-sm">Réponse immédiate • Arrivée sous 5 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image 
                src="/images/Réservationàl'avance.jpg"
                alt="Contact et réservation taxi Goussainville"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Méthodes de contact */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Plusieurs façons de nous contacter
            </h2>
            <p className="text-lg text-gray-600">
              Choisissez la méthode qui vous convient le mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{method.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    {method.available}
                  </span>
                </div>

                <a 
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{method.action}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones de service */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Zones de service
            </h2>
            <p className="text-lg text-gray-600">
              Temps de réponse selon votre localisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">{zone.response}</div>
                <h3 className="font-bold text-black mb-2">{zone.name}</h3>
                <p className="text-sm text-gray-600">{zone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Informations pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>🕒</span>
                  <span>Horaires</span>
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• 24 heures sur 24</li>
                  <li>• 7 jours sur 7</li>
                  <li>• Week-ends et jours fériés inclus</li>
                  <li>• Service de nuit disponible</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>💳</span>
                  <span>Paiement</span>
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Espèces</li>
                  <li>• Carte bancaire</li>
                  <li>• Chèques</li>
                  <li>• Factures entreprises</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>📋</span>
                  <span>Réservation</span>
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Immédiate ou à l'avance</li>
                  <li>• Confirmation par SMS</li>
                  <li>• Modification possible</li>
                  <li>• Annulation gratuite 2h avant</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center space-x-2">
                  <span>🚗</span>
                  <span>Véhicule</span>
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Skoda Superb récente</li>
                  <li>• Climatisation</li>
                  <li>• GPS dernière génération</li>
                  <li>• Chargeurs USB disponibles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à réserver ?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Un seul appel suffit, nous nous occupons du reste
          </p>
          
          <a 
            href="tel:+33628532473"
            className="inline-flex items-center space-x-3 bg-white text-black px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>📞</span>
            <span>06 28 53 24 73</span>
          </a>
        </div>
      </section>
    </main>
  )
}