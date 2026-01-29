import { Metadata } from 'next'
import ZonesService from '@/components/ZonesService'
import Testimonials from '@/components/Testimonials'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi Goussainville CDG - Navette Aéroport Roissy 24/7 | Tarif Fixe',
  description: 'Réservez votre Taxi Goussainville pour Aéroport Charles de Gaulle (CDG). Trajet rapide 15 min. Tarif fixe sans surprise. Chauffeur ponctuel, véhicule spacieux. Disponible 24h/24.',
  keywords: ['taxi goussainville cdg', 'taxi goussainville roissy', 'navette goussainville aéroport', 'prix taxi goussainville cdg', 'distance goussainville cdg'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/taxi-goussainville-cdg',
  },
}

export default function TaxiCDG() {
  return (
    <main className="pb-24">
      {/* Hero Spécifique CDG */}
      <section className="relative bg-black pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="/images/aeroport.jpg" 
            alt="Taxi Goussainville vers Aéroport CDG" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi Goussainville <span className="text-yellow-400">⇄</span> Aéroport CDG
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            La liaison la plus rapide et fiable. À partir de 15 minutes de trajet. 
            Disponible 24h/24 et 7j/7 pour tous les terminaux (1, 2A-G, 3).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+33628532473" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl text-lg hover:bg-yellow-300 transition-all transform hover:scale-105">
              📞 Réserver (06 28 53 24 73)
            </a>
          </div>
        </div>
      </section>

      {/* Avantages CDG */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 text-center">Pourquoi nous choisir pour Roissy CDG ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">Suivi de Vol en Direct</h3>
              <p className="text-gray-600">Nous suivons votre vol en temps réel. En cas de retard, votre chauffeur vous attend sans frais supplémentaires.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3">Proximité Immédiate</h3>
              <p className="text-gray-600">Situés à Goussainville, nous sommes à seulement 15 minutes des terminaux. Idéal pour les urgences.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🧳</div>
              <h3 className="text-xl font-bold mb-3">Véhicules Spacieux</h3>
              <p className="text-gray-600">Berlines et Vans disponibles pour accueillir tous vos bagages et votre famille confortablement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu SEO Riche */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Votre transfert Taxi de Goussainville vers Roissy Charles de Gaulle</h2>
          <p className="mb-6">
            Besoin d'un taxi fiable entre <strong>Goussainville (95190)</strong> et l'aéroport <strong>Roissy Charles de Gaulle (CDG)</strong> ? 
            Ne cherchez plus. Notre service de taxi local est spécialisé dans cette liaison courte distance.
          </p>
          <p className="mb-6">
            Contrairement aux VTC basés à Paris qui peuvent mettre du temps à arriver, nos chauffeurs sont basés à Goussainville, 
            garantissant une prise en charge en moins de 10 minutes pour vos départs immédiats.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Combien coûte un taxi Goussainville - CDG ?</h3>
          <p className="mb-6">
            Le tarif est réglementé et transparent. Pour une course de jour (7h-19h) ou de nuit (19h-7h), 
            nous vous proposons une estimation précise avant le départ. Pas de majoration surprise comme sur les applications.
            Accepte CB, Espèces et American Express.
          </p>

          <h3 className="text-2xl font-bold mb-4">Points de rendez-vous aux terminaux</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Terminal 1 :</strong> Porte 24 (Niveau Arrivées)</li>
            <li><strong>Terminal 2A/2C :</strong> Porte 6</li>
            <li><strong>Terminal 2E/2F :</strong> Porte 8 (Niveau Arrivées)</li>
            <li><strong>Terminal 2G :</strong> Porte principale (Zone Taxis Bleus)</li>
            <li><strong>Terminal 3 :</strong> Sortie principale</li>
          </ul>
        </div>
      </section>

      <ZonesService />
      <Testimonials />
      <StickyCTA />
    </main>
  )
}
