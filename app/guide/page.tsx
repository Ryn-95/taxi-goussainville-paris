import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Guide Taxi Goussainville & Conseils Voyageurs | Blog Expert',
  description: 'Retrouvez nos conseils d\'experts pour vos déplacements en taxi à Goussainville, vers les aéroports et Paris. Tarifs, astuces, infos pratiques.',
  keywords: ['blog taxi goussainville', 'conseils taxi', 'prix taxi cdg', 'guide voyageur goussainville'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/guide',
  },
}

const articles = [
  {
    slug: 'prix-taxi-goussainville-cdg',
    title: 'Quel est le vrai prix d\'un taxi Goussainville - CDG ?',
    excerpt: 'Tout savoir sur les tarifs de jour et de nuit, les suppléments bagages et comment éviter les arnaques.',
    date: '29 Janvier 2026',
    emoji: '💰'
  },
  {
    slug: 'reserver-taxi-nuit-goussainville',
    title: 'Comment trouver un taxi de nuit à Goussainville ?',
    excerpt: 'Les astuces pour garantir votre départ à 4h du matin vers l\'aéroport ou la gare.',
    date: '28 Janvier 2026',
    emoji: '🌙'
  },
  {
    slug: 'taxi-vs-vtc-goussainville',
    title: 'Taxi ou VTC à Goussainville : Le grand comparatif',
    excerpt: 'Pourquoi le taxi est souvent moins cher et plus rapide que Uber ou Bolt pour les trajets aéroport.',
    date: '27 Janvier 2026',
    emoji: '🆚'
  }
]

export default function GuideIndex() {
  return (
    <main className="pb-24 bg-gray-50 min-h-screen">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Guide & Conseils', url: '/guide' }
        ]}
      />

      <section className="pt-32 pb-12 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Le Guide du Taxi à Goussainville
          </h1>
          <p className="text-xl text-gray-300">
            Conseils, astuces et informations pratiques pour voyager sereinement.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/guide/${article.slug}`}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {article.emoji}
              </div>
              <div className="text-sm text-gray-500 mb-2">{article.date}</div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-6 flex items-center text-yellow-500 font-bold">
                Lire l'article <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
