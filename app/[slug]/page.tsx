import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import { cities, CityData } from '@/lib/idf-data'

interface PageProps {
  params: {
    slug: string
  }
}

// Génération statique de toutes les villes (SSG) - Ultra Rapide
export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

// -------------------------------------------------------------------------
// SYSTÈME "SPINTAX" ANTI-DUPLICATE CONTENT
// -------------------------------------------------------------------------
// L'objectif est de générer des variantes de texte uniques pour chaque ville
// en utilisant le slug comme "graine" déterministe.
// -------------------------------------------------------------------------

function getVariant<T>(slug: string, variants: T[]): T {
  // Somme des codes ASCII du slug pour obtenir un index pseudo-aléatoire mais constant
  const seed = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return variants[seed % variants.length]
}

const contentVariants = {
  intro: [
    (city: CityData) => `Votre chauffeur privé disponible à ${city.name}. Liaison rapide vers l'Aéroport CDG (${city.timeToCDG}) et Paris. Réservez votre trajet en toute sérénité.`,
    (city: CityData) => `Besoin d'un taxi au départ de ${city.name} ? Profitez d'un service premium pour vos transferts vers Roissy Charles de Gaulle (environ ${city.timeToCDG}).`,
    (city: CityData) => `Service de taxi officiel desservant la commune de ${city.name} (${city.zip}). Nous assurons vos navettes aéroport vers CDG et Orly avec ponctualité.`,
    (city: CityData) => `Habitants de ${city.name}, réservez votre chauffeur VTC/Taxi pour un départ immédiat ou programmé vers les aéroports parisiens. Trajet estimé : ${city.timeToCDG}.`
  ],
  whyUsTitle: [
    (city: CityData) => `Pourquoi réserver un taxi à ${city.name} ?`,
    (city: CityData) => `Les avantages de notre service taxi à ${city.name}`,
    (city: CityData) => `Taxi ${city.name} : Votre meilleur choix pour l'aéroport`,
    (city: CityData) => `Service Chauffeur ${city.name} : Qualité & Ponctualité`
  ],
  benefit1: [
    (city: CityData) => `Connexion Aéroport Rapide : Depuis ${city.name}, nous rejoignons Roissy CDG en environ ${city.timeToCDG}. Idéal pour ne pas rater votre vol.`,
    (city: CityData) => `Transfert Roissy Express : Nous connaissons les raccourcis depuis ${city.name} pour éviter les bouchons vers CDG (${city.timeToCDG}).`,
    (city: CityData) => `Accès Direct CDG : Votre chauffeur vous récupère à votre domicile à ${city.name} et vous dépose au terminal. Temps : ${city.timeToCDG}.`
  ],
  benefit2: [
    (city: CityData) => `Confort Premium : Berline spacieuse et entretenue. Voyagez confortablement depuis ${city.name} vers toute l'Île-de-France.`,
    (city: CityData) => `Véhicules Haut de Gamme : Profitez d'un trajet relaxant au départ de ${city.name} dans nos berlines récentes et propres.`,
    (city: CityData) => `Voyagez Sereinement : Sièges confortables, chargeurs et climatisation pour votre trajet depuis ${city.name} (${city.zip}).`
  ],
  benefit3: [
    (city: CityData) => `Prix Fixes & Transparents : Pas de mauvaise surprise. Demandez votre estimation avant le départ de ${city.name}.`,
    (city: CityData) => `Tarifs Forfaitaires : Pour les aéroports, nous proposons souvent des forfaits depuis ${city.name}. Contactez-nous.`,
    (city: CityData) => `Devis Immédiat : Appelez-nous pour connaître le prix exact de votre course taxi ${city.name} vers Paris ou CDG.`
  ]
}

// Méta-données dynamiques pour chaque ville
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.slug)
  
  if (!city) {
    return {}
  }

  // Variation des titres SEO aussi
  const titles = [
    `Taxi ${city.name} (${city.zip}) - Disponible 24h/24 | Taxi Goussainville`,
    `Taxi ${city.name} vers Aéroport CDG & Orly - Réservation 24/7`,
    `Chauffeur Taxi ${city.name} (${city.zip}) - Transfert Aéroport & Gare`,
    `Réserver Taxi ${city.name} - Tarif Fixe & Chauffeur Privé`
  ]
  
  const descriptions = [
    `Besoin d'un taxi à ${city.name} ? Chauffeur privé disponible pour gare, hôpital et aéroport CDG (${city.timeToCDG}). Réservation immédiate au 06 28 53 24 73.`,
    `Service de taxi à ${city.name} (${city.zip}). Navette aéroport Roissy CDG et Orly. Berline confortable, paiement CB. Appelez le 06 28 53 24 73.`,
    `Votre taxi au départ de ${city.name}. Trajet rapide vers Roissy (${city.timeToCDG}). Disponible nuit et jour. Devis gratuit et réservation SMS.`,
  ]

  return {
    title: getVariant(city.slug, titles),
    description: getVariant(city.slug, descriptions),
    keywords: [`taxi ${city.name.toLowerCase()}`, `taxi ${city.zip}`, `taxi ${city.name.toLowerCase()} cdg`, `chauffeur ${city.name.toLowerCase()}`, `vtc ${city.name.toLowerCase()}`],
    alternates: {
      canonical: `https://taxi-goussainville-paris.vercel.app/${city.slug}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = cities.find((c) => c.slug === params.slug)

  if (!city) {
    notFound()
  }

  // Sélection des variantes de texte
  const introText = getVariant(city.slug, contentVariants.intro)(city)
  const whyUsTitle = getVariant(city.slug, contentVariants.whyUsTitle)(city)
  const benefit1Text = getVariant(city.slug, contentVariants.benefit1)(city)
  const benefit2Text = getVariant(city.slug, contentVariants.benefit2)(city)
  const benefit3Text = getVariant(city.slug, contentVariants.benefit3)(city)

  // Villes voisines (même département) pour le maillage interne
  const nearbyCities = cities
    .filter((c) => c.department === city.department && c.slug !== city.slug)
    .slice(0, 8) // Augmenté à 8 pour plus de maillage

  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Zones', url: '/zones-intervention' },
          { name: `Taxi ${city.name}`, url: `/${city.slug}` }
        ]}
      />

      {/* Hero Dynamique */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-500 text-black font-bold text-sm mb-6">
            📍 Service Taxi {city.departmentName}
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Taxi {city.name} <span className="text-yellow-500">({city.zip})</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            {introText}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+33628532473" className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              📞 Commander à {city.name}
            </a>
            <Link href="/reservation" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl text-lg transition-all border border-white/20">
              📅 Devis Gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu SEO Programmatique avec Spintax */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{whyUsTitle}</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl flex-shrink-0">🚀</div>
                <div>
                  <h3 className="font-bold text-lg">Rapidité & Ponctualité</h3>
                  <p className="text-gray-600">{benefit1Text}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl flex-shrink-0">💎</div>
                <div>
                  <h3 className="font-bold text-lg">Confort Garanti</h3>
                  <p className="text-gray-600">{benefit2Text}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl flex-shrink-0">💳</div>
                <div>
                  <h3 className="font-bold text-lg">Tarifs Justes</h3>
                  <p className="text-gray-600">{benefit3Text}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Distances depuis {city.name}</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Vers Aéroport CDG</span>
                <span className="font-bold text-green-600">{city.timeToCDG}</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Vers Aéroport Orly</span>
                <span className="font-bold text-green-600">~{parseInt(city.timeToCDG) + 35} min</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Vers Paris Centre</span>
                <span className="font-bold text-green-600">~{parseInt(city.timeToCDG) + 25} min</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium">Vers Disneyland Paris</span>
                <span className="font-bold text-green-600">~45 min</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold mb-2">Points de rendez-vous {city.name} :</p>
                <p className="text-sm text-gray-600">
                    Nous vous récupérons à votre domicile, à la Mairie de {city.name}, ou à la Gare (si disponible).
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage Interne Dynamique (Villes Voisines) */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">Autres villes desservies dans le {city.department}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {nearbyCities.map((nearby) => (
                <Link 
                  key={nearby.slug} 
                  href={`/${nearby.slug}`} 
                  className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 font-medium transition-all hover:text-yellow-600 hover:bg-yellow-50"
                >
                  Taxi {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <StickyCTA />
    </main>
  )
}
