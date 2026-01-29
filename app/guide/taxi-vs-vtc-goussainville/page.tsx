import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Taxi ou VTC à Goussainville ? Le Comparatif Choc 2026',
  description: 'Uber, Bolt ou Taxi à Goussainville ? Prix, rapidité, sécurité : nous avons comparé pour vous. Découvrez pourquoi le taxi est souvent le meilleur choix pour l\'aéroport.',
  keywords: ['taxi vs uber goussainville', 'vtc goussainville', 'chauffeur privé goussainville', 'comparatif taxi uber'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/guide/taxi-vs-vtc-goussainville',
  },
}

export default function ArticleTaxiVsVTC() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Guide', url: '/guide' },
          { name: 'Taxi vs VTC Goussainville', url: '/guide/taxi-vs-vtc-goussainville' }
        ]}
      />

      {/* Header Article */}
      <section className="pt-32 pb-12 bg-gray-50 border-b">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block bg-black text-white font-bold px-4 py-1 rounded-full text-sm mb-6">
            🆚 Comparatif Expert
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Taxi ou VTC à Goussainville : Le Verdict 2026
          </h1>
          <p className="text-gray-500">
            Publié le 27 Janvier 2026 • Temps de lecture : 5 min
          </p>
        </div>
      </section>

      {/* Contenu Article */}
      <article className="py-12 max-w-3xl mx-auto px-6 prose prose-lg prose-yellow">
        <p className="lead text-xl text-gray-700 font-medium">
          Entre Uber, Bolt, Heetch et les Taxis officiels, le choix est vaste à Goussainville. 
          Mais saviez-vous que pour un trajet vers CDG ou Orly, le taxi est souvent <strong>plus rapide et moins cher</strong> ? 
          Explications.
        </p>

        <h2>1. Le Prix : La grande surprise</h2>
        <p>
          On pense souvent que Uber est moins cher. C'est vrai pour les petits trajets dans Paris intra-muros hors heures de pointe.
          Mais à Goussainville, la donne change :
        </p>
        <ul>
          <li><strong>VTC (Uber/Bolt) :</strong> Le prix varie selon la demande ("Tarification dynamique"). Un trajet vers CDG peut passer de 20€ à 50€ s'il pleut ou s'il est 8h du matin !</li>
          <li><strong>Taxi Goussainville :</strong> Le tarif est réglementé par la préfecture. Pas de surprise, pas de majoration abusive x3.</li>
        </ul>

        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 not-prose my-8">
          <h3 className="font-bold text-red-700 text-lg mb-2">🚨 Le piège des annulaltions VTC</h3>
          <p className="text-sm text-red-600">
            Les chauffeurs VTC peuvent annuler votre course au dernier moment s'ils trouvent une course plus rentable ailleurs. 
            Avec un Taxi réservé, l'obligation de prise en charge est réelle.
          </p>
        </div>

        <h2>2. La Rapidité : L'arme secrète du Taxi</h2>
        <p>
          C'est l'avantage décisif en Île-de-France. Les Taxis ont le droit d'emprunter les <strong>couloirs de bus</strong> et les voies réservées sur l'autoroute A1.
        </p>
        <p>
          <strong>Résultat :</strong> Aux heures de pointe (matin et soir), un Taxi mettra 25 à 35 minutes pour rejoindre Paris ou l'aéroport, contre 45 à 60 minutes pour un VTC coincé dans les bouchons.
        </p>

        <h2>3. Le Confort et la Sécurité</h2>
        <p>
          Nos chauffeurs sont des professionnels formés, avec une licence officielle affichée sur le véhicule (la fameuse plaque "Taxi").
          Les véhicules sont contrôlés annuellement.
        </p>
        <ul>
          <li>Sièges auto bébé disponibles sur demande</li>
          <li>Véhicules spacieux (Berlines ou Vans)</li>
          <li>Conduite souple et connaissance parfaite des raccourcis locaux</li>
        </ul>

        <h2>Conclusion : Quand choisir qui ?</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Choisir Uber/VTC quand...</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              <li>Vous n'êtes pas pressé</li>
              <li>C'est une heure creuse (milieu de journée)</li>
              <li>Vous faites un très court trajet interne</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="font-bold text-lg mb-2">Choisir Taxi Goussainville quand...</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
              <li>Vous allez à l'aéroport (CDG/Orly)</li>
              <li>Vous avez un train à prendre (Gare)</li>
              <li>C'est l'heure de pointe</li>
              <li>Vous voulez la fiabilité absolue</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="tel:+33628532473"
            className="inline-block bg-black text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
          >
            📞 Réserver mon Taxi (Prioritaire)
          </a>
        </div>
      </article>

      <StickyCTA />
    </main>
  )
}
