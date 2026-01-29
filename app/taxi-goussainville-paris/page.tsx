import { Metadata } from 'next'
import ZonesService from '@/components/ZonesService'
import Testimonials from '@/components/Testimonials'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi Goussainville Paris - Trajet Centre & Gares | Conventionné',
  description: 'Taxi Goussainville vers Paris Centre, Gare du Nord, Gare de Lyon. Chauffeur VTC alternative. Transport médical conventionné CPAM disponible. Réservation 06 28 53 24 73.',
  keywords: ['taxi goussainville paris', 'taxi goussainville gare du nord', 'taxi conventionné goussainville', 'vtc goussainville paris', 'prix taxi goussainville paris'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-goussainville-paris',
  },
}

export default function TaxiParis() {
  return (
    <main className="pb-24">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Taxi Goussainville Paris', url: '/taxi-goussainville-paris' }
        ]}
      />
      <section className="relative bg-black pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="/images/Course_locale.svg" 
            alt="Taxi Goussainville vers Paris" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi Goussainville <span className="text-yellow-400">⇄</span> Paris
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Rejoignez la capitale rapidement. Accès privilégié aux couloirs de bus. Gares, Hôpitaux et Tourisme.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+33628532473" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl text-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
              📞 Commander un Taxi
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Service de Taxi Goussainville vers Paris Intramuros</h2>
          <p className="mb-6">
            Vous habitez <strong>Goussainville</strong>, <strong>Louvres</strong> ou <strong>Fosses</strong> et vous devez vous rendre à Paris ?
            Évitez le stress du RER D (retards, grèves, inconfort). Optez pour le confort d'un taxi privé porte-à-porte.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Gares Parisiennes & Hôpitaux</h3>
          <p className="mb-4">Nous desservons quotidiennement les points stratégiques de la capitale :</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">🚂 Gares SNCF</h4>
              <ul className="list-disc pl-5">
                <li>Gare du Nord (25-35 min)</li>
                <li>Gare de l'Est</li>
                <li>Gare de Lyon</li>
                <li>Gare Montparnasse</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">🏥 Hôpitaux (Conventionné)</h4>
              <ul className="list-disc pl-5">
                <li>Hôpital Bichat</li>
                <li>Hôpital Lariboisière</li>
                <li>Hôpital Saint-Louis</li>
                <li>Institut Curie</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Taxi vs VTC à Goussainville</h3>
          <p className="mb-6">
            Contrairement aux VTC (Uber, Bolt) qui n'ont pas accès aux couloirs de bus, nos taxis empruntent les voies réservées 
            sur l'autoroute A1 et dans Paris. <strong>Résultat : un gain de temps de 20 à 30 minutes aux heures de pointe.</strong>
          </p>
        </div>
      </section>

      <ZonesService />
      <Testimonials />
      <StickyCTA />
    </main>
  )
}
