import { Metadata } from 'next'
import ZonesService from '@/components/ZonesService'
import Testimonials from '@/components/Testimonials'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi Goussainville Orly - Transfert Aéroport Orly 24/7 | Forfait',
  description: 'Taxi Goussainville vers Aéroport Orly (ORY). Navette fiable et ponctuelle. Évitez les bouchons avec nos chauffeurs experts. Sièges bébé disponibles. Réservation 06 28 53 24 73.',
  keywords: ['taxi goussainville orly', 'navette orly goussainville', 'prix taxi goussainville orly', 'taxi 95190 orly', 'transport goussainville aéroport orly'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-goussainville-orly',
  },
}

export default function TaxiOrly() {
  return (
    <main className="pb-24">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Taxi Goussainville Orly', url: '/taxi-goussainville-orly' }
        ]}
      />
      <section className="relative bg-black pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="/images/aeroport.jpg" 
            alt="Taxi Goussainville vers Aéroport Orly" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi Goussainville <span className="text-yellow-400">⇄</span> Aéroport Orly
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Traversez l'Île-de-France en toute sérénité. Chauffeurs expérimentés connaissant les itinéraires malins pour éviter le trafic.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+33628532473" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl text-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
              📞 Commander pour Orly
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Liaison Taxi Goussainville - Orly (Sud & Ouest)</h2>
          <p className="mb-6">
            Le trajet entre <strong>Goussainville</strong> et l'aéroport d'<strong>Orly (ORY)</strong> nécessite une expertise de la route. 
            Traverser la région parisienne du Nord au Sud peut être complexe aux heures de pointe.
          </p>
          <p className="mb-6">
            Nos chauffeurs utilisent les couloirs de bus autorisés aux taxis et les applications de trafic en temps réel (Waze Pro) 
            pour vous garantir une arrivée à l'heure, quel que soit l'état du trafic sur l'A1, le Périphérique ou l'A86.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-2">💡 Conseil de pro</h3>
            <p className="text-blue-800">
              Pour un vol international au départ d'Orly, nous recommandons un départ de Goussainville au moins 3h30 avant le décollage 
              en semaine, et 2h30 le week-end.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Nos Services pour Orly</h3>
          <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 mb-8">
            <li className="flex items-center space-x-2">
              <span>✅</span> <span>Berline confort ou Van</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span> <span>Siège bébé sur demande</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span> <span>Attente pancarte à l'arrivée</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span> <span>Facture pour note de frais</span>
            </li>
          </ul>
        </div>
      </section>

      <ZonesService />
      <Testimonials />
      <StickyCTA />
    </main>
  )
}
