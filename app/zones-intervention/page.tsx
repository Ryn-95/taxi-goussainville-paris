import { Metadata } from 'next'
import Link from 'next/link'
import StickyCTA from '@/components/StickyCTA'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import { cities, departments } from '@/lib/idf-data'

export const metadata: Metadata = {
  title: 'Zones d\'Intervention Taxi Île-de-France - Couverture Totale',
  description: 'Découvrez toutes les villes desservies par Taxi Goussainville dans le 95, 93, 77, 60 et toute l\'Île-de-France. Service rapide et disponible partout.',
  keywords: ['zones intervention taxi', 'taxi ile de france', 'taxi 95', 'taxi 93', 'taxi 77'],
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app/zones-intervention',
  },
}

export default function ZonesIntervention() {
  return (
    <main className="pb-24 bg-white">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Zones d\'Intervention', url: '/zones-intervention' }
        ]}
      />

      <section className="pt-32 pb-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Zones d'Intervention <br />
            <span className="text-yellow-500">Île-de-France</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nous assurons vos déplacements au départ et à l'arrivée de centaines de communes en Île-de-France.
            Retrouvez votre ville ci-dessous.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {departments.map((dept) => {
            const deptCities = cities.filter((c) => c.department === dept.code)
            if (deptCities.length === 0) return null

            return (
              <div key={dept.code} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-black text-gray-200">{dept.code}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{dept.name}</h2>
                </div>
                <ul className="space-y-3">
                  {deptCities.map((city) => (
                    <li key={city.slug}>
                      <Link 
                        href={`/${city.slug}`}
                        className="flex items-center justify-between group p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                      >
                        <span className="text-gray-700 font-medium group-hover:text-yellow-600 transition-colors">
                          Taxi {city.name}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-yellow-500">➜</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <StickyCTA />
    </main>
  )
}
