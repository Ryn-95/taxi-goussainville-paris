import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Prix Taxi Goussainville CDG : Tarifs 2026 et Comparatif VTC',
  description: 'Combien coûte un taxi de Goussainville à l\'aéroport Charles de Gaulle ? Tarif jour/nuit, suppléments, et pourquoi c\'est moins cher qu\'Uber.',
  keywords: ['prix taxi goussainville cdg', 'tarif taxi goussainville roissy', 'cout taxi goussainville aeroport', 'uber ou taxi goussainville'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/guide/prix-taxi-goussainville-cdg',
  },
}

export default function ArticlePrixCDG() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Guide', url: '/guide' },
          { name: 'Prix Taxi Goussainville CDG', url: '/guide/prix-taxi-goussainville-cdg' }
        ]}
      />

      {/* Header Article */}
      <section className="pt-32 pb-12 bg-gray-50 border-b">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm mb-6">
            💰 Tarifs & Budget
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Quel est le VRAI prix d'un Taxi Goussainville - CDG en 2026 ?
          </h1>
          <p className="text-gray-500">
            Publié le 29 Janvier 2026 • Par Taxi Goussainville Expert
          </p>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 max-w-3xl mx-auto px-6 prose prose-lg prose-yellow">
        <p className="lead text-xl text-gray-700 font-medium">
          Vous habitez Goussainville et vous devez prendre un vol à Roissy Charles de Gaulle ? 
          La question du transport est cruciale. Voici tout ce que vous devez savoir pour payer le juste prix et éviter les mauvaises surprises.
        </p>

        <h2>Le tarif réglementé : Transparence totale</h2>
        <p>
          Contrairement aux idées reçues, le taxi est souvent <strong>plus économique</strong> que les VTC pour ce trajet spécifique. 
          Pourquoi ? Parce que Goussainville est limitrophe de l'aéroport (à peine 15 minutes).
        </p>
        <p>
          Le prix est calculé au taximètre (compteur), mais pour vous donner une idée précise :
        </p>
        <ul>
          <li><strong>Tarif Jour (7h-19h) :</strong> Environ 25€ - 35€</li>
          <li><strong>Tarif Nuit (19h-7h) & Dimanche :</strong> Environ 35€ - 45€</li>
        </ul>
        <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 not-prose my-8">
          <h3 className="font-bold text-lg mb-2">⚠️ Attention aux forfaits illégaux</h3>
          <p className="text-sm">
            Certains chauffeurs non officiels proposent des "forfaits" à la tête du client. 
            Exigez toujours un taxi avec un compteur officiel et un terminal de paiement CB.
          </p>
        </div>

        <h2>Taxi vs Uber/Bolt : Le match</h2>
        <p>
          Sur des trajets courts comme Goussainville-CDG, les applications VTC appliquent souvent des frais d'approche minimaux 
          ou des majorations "heures de pointe" qui font exploser la note.
        </p>
        <table className="min-w-full text-left text-sm whitespace-nowrap not-prose border rounded-lg overflow-hidden my-8">
          <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4">Critère</th>
              <th scope="col" className="px-6 py-4 text-yellow-600 font-bold">Taxi Goussainville</th>
              <th scope="col" className="px-6 py-4 text-gray-500">Appli VTC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-6 py-4 font-medium">Couloirs de Bus</td>
              <td className="px-6 py-4 text-green-600">✅ OUI (Rapide)</td>
              <td className="px-6 py-4 text-red-600">❌ NON (Bouchons)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">Prix majoré pluie/grève</td>
              <td className="px-6 py-4 text-green-600">✅ NON (Réglementé)</td>
              <td className="px-6 py-4 text-red-600">❌ OUI (x2 ou x3)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">Réservation à l'avance</td>
              <td className="px-6 py-4 text-green-600">✅ Fiable à 100%</td>
              <td className="px-6 py-4 text-red-600">⚠️ Aléatoire</td>
            </tr>
          </tbody>
        </table>

        <h2>Comment réserver au meilleur prix ?</h2>
        <p>
          La meilleure façon d'économiser est de réserver votre taxi à l'avance directement auprès d'une centrale locale comme la nôtre.
          Nous connaissons parfaitement les terminaux (2E, 2F, 1, 3...) et nous vous déposons au plus près des portes d'embarquement.
        </p>

        <div className="not-prose mt-12 text-center">
          <Link 
            href="/taxi-goussainville-cdg"
            className="inline-block bg-black text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Réserver mon Taxi pour CDG ➔
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Ou appelez directement le <a href="tel:+33628532473" className="font-bold text-black underline">06 28 53 24 73</a>
          </p>
        </div>
      </article>

      <StickyCTA />
    </main>
  )
}
