import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi de Nuit Goussainville : Réservation 24h/24 Garantie',
  description: 'Besoin d\'un taxi à 3h ou 4h du matin à Goussainville ? Ne prenez pas de risque. Réservation garantie pour vos départs matinaux vers Roissy CDG.',
  keywords: ['taxi nuit goussainville', 'taxi 4h matin goussainville', 'reservation taxi nuit', 'taxi 24h goussainville'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/guide/reserver-taxi-nuit-goussainville',
  },
}

export default function ArticleTaxiNuit() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Guide', url: '/guide' },
          { name: 'Taxi de Nuit Goussainville', url: '/guide/reserver-taxi-nuit-goussainville' }
        ]}
      />

      {/* Header Article */}
      <section className="pt-32 pb-12 bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm mb-6">
            🌙 Service 24/7
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Comment trouver un taxi de nuit à Goussainville ?
          </h1>
          <p className="text-gray-400">
            Publié le 28 Janvier 2026 • Guide Pratique
          </p>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 max-w-3xl mx-auto px-6 prose prose-lg prose-yellow">
        <p className="lead text-xl text-gray-700 font-medium">
          Vous avez un avion à prendre à 6h du matin à Roissy ? Un train à Gare du Nord à l'aube ? 
          Trouver un chauffeur à 3h ou 4h du matin peut être une source de stress immense. Voici comment assurer votre départ.
        </p>

        <h2>Le problème des applications la nuit</h2>
        <p>
          Avez-vous déjà essayé de commander un Uber à 4h00 du matin à Goussainville ? Souvent, l'écran affiche "Aucune voiture disponible" ou alors le chauffeur accepte puis annule 5 minutes après car il ne veut pas sortir de Paris.
        </p>
        <p>
          <strong>Le risque :</strong> Rater votre avion. C'est un risque que vous ne pouvez pas prendre pour un départ en vacances ou un voyage d'affaires.
        </p>

        <h2>La solution : La réservation Taxi Officiel</h2>
        <p>
          Contrairement aux VTC qui fonctionnent à la demande instantanée, nous fonctionnons sur <strong>planning</strong>.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 not-prose my-8">
          <h3 className="font-bold text-blue-900 text-lg mb-2">✅ Garantie de départ</h3>
          <p className="text-sm text-blue-800">
            Quand vous réservez votre taxi de nuit avec nous, un chauffeur vous est <strong>attribué la veille</strong>. 
            Il sera devant chez vous 5 à 10 minutes avant l'heure prévue. C'est notre engagement.
          </p>
        </div>

        <h2>Combien coûte un taxi de nuit ?</h2>
        <p>
          Le tarif de nuit s'applique de 19h à 7h du matin, ainsi que les dimanches et jours fériés.
          Pour un trajet Goussainville vers CDG de nuit, comptez environ <strong>35€ à 45€</strong>.
        </p>
        <p>
          C'est un petit prix à payer pour la tranquillité d'esprit totale et l'assurance d'arriver à l'heure.
        </p>

        <h2>Comment réserver ?</h2>
        <p>
          Pour les courses de nuit ou très tôt le matin, nous recommandons de réserver au moins <strong>24h à l'avance</strong>.
        </p>
        <ul className="not-prose space-y-4 my-8">
          <li className="flex items-center space-x-3">
            <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">1</span>
            <span>Envoyez un SMS au 06 28 53 24 73</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">2</span>
            <span>Précisez : Date, Heure, Adresse de départ, Destination</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">3</span>
            <span>Recevez la confirmation immédiate</span>
          </li>
        </ul>

        <div className="mt-12 text-center">
          <a 
            href="sms:+33628532473"
            className="inline-block bg-black text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
          >
            💬 Réserver par SMS maintenant
          </a>
        </div>
      </article>

      <StickyCTA />
    </main>
  )
}
