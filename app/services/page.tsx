import { Metadata } from 'next'
import { Plane, Train, Briefcase, Moon, MapPin, Clock, ShieldCheck, Car } from 'lucide-react'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'

export const metadata: Metadata = {
  title: 'Nos Services de Taxi | Goussainville & Île-de-France',
  description: 'Découvrez tous nos services : Transferts aéroports CDG/Orly, Gares parisiennes, Longue distance, Mise à disposition chauffeur. Disponible 24/7.',
  keywords: [
    'services taxi goussainville',
    'transfert aéroport taxi',
    'taxi gare paris',
    'taxi longue distance',
    'chauffeur privé goussainville',
    'taxi nuit goussainville'
  ],
  openGraph: {
    title: 'Nos Services de Taxi | Goussainville & Île-de-France',
    description: 'Transferts aéroports, gares, business et nuit. Service premium au départ de Goussainville et alentours.',
    url: 'https://taxi-goussainville-paris.vercel.app/services',
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Plane className="h-10 w-10 text-yellow-600" />,
      title: 'Transferts Aéroports',
      description: 'Liaisons directes vers Roissy CDG, Orly et Beauvais. Suivi de vol en temps réel et attente gratuite en cas de retard.',
      link: '/taxi-goussainville-cdg',
      features: ['Suivi de vol inclus', 'Pancarte d\'accueil', 'Berline confortable']
    },
    {
      icon: <Train className="h-10 w-10 text-yellow-600" />,
      title: 'Gares Parisiennes',
      description: 'Connexions vers Gare du Nord, Gare de Lyon, Montparnasse, Gare de l\'Est. Arrivez à l\'heure pour votre train.',
      link: '/taxi-goussainville-paris',
      features: ['Dépose minute', 'Aide aux bagages', 'Ponctualité garantie']
    },
    {
      icon: <Briefcase className="h-10 w-10 text-yellow-600" />,
      title: 'Service Business',
      description: 'Déplacements professionnels, séminaires et rendez-vous d\'affaires. Facturation mensuelle disponible pour les entreprises.',
      link: '/contact',
      features: ['Facture détaillée', 'Wifi à bord', 'Discrétion assurée']
    },
    {
      icon: <Moon className="h-10 w-10 text-yellow-600" />,
      title: 'Taxi de Nuit',
      description: 'Disponibilité 24h/24 et 7j/7 pour vos sorties ou urgences nocturnes. Service sécurisé.',
      link: '/guide/reserver-taxi-nuit-goussainville',
      features: ['Disponible 24/7', 'Sécurité maximale', 'Réponse rapide']
    },
    {
      icon: <Car className="h-10 w-10 text-yellow-600" />,
      title: 'Longue Distance',
      description: 'Trajets vers toute la France et l\'Europe. Voyagez confortablement sur de longues distances.',
      link: '/contact',
      features: ['Forfait kilométrique', 'Pauses à la demande', 'Véhicule confort']
    },
    {
      icon: <MapPin className="h-10 w-10 text-yellow-600" />,
      title: 'Mise à Disposition',
      description: 'Louez un chauffeur pour quelques heures ou la journée entière. Idéal pour le shopping ou les mariages.',
      link: '/contact',
      features: ['Tarif horaire', 'Flexibilité totale', 'Chauffeur dédié']
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Nos Services de <span className="text-yellow-500">Transport Premium</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une solution de mobilité adaptée à chaque besoin. Que vous soyez particulier ou professionnel, nous vous accompagnons partout.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group">
              <div className="mb-6 p-4 bg-yellow-50 rounded-xl inline-block group-hover:bg-yellow-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={service.link}
                className="inline-flex items-center font-bold text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                En savoir plus <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 max-w-5xl mx-auto px-6">
        <div className="bg-yellow-500 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              Un besoin spécifique ?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto font-medium">
              Nous nous adaptons à toutes vos demandes. Contactez-nous pour un devis personnalisé immédiat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+33628532473" className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg">
                📞 Appeler le Chauffeur
              </a>
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                ✉️ Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
