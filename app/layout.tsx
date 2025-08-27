import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { InvisibleSEO } from '@/components/InvisibleSEO'
import { DynamicSEO } from '@/components/DynamicSEO'
import { LiveReviews } from '@/components/LiveReviews'

export const metadata: Metadata = {
  metadataBase: new URL('https://taxi-goussainville-paris.vercel.app'),
  title: {
    default: '🚖 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ N°1 MEILLEUR SERVICE 24H/24 CDG ORLY PARIS',
    template: '%s | 🚖 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ N°1'
  },
  description: '⭐ N°1 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ MEILLEUR SERVICE 24H/24 📞 RÉSERVATION IMMÉDIATE 🚖 Transferts CDG Orly Beauvais 🚗 Courses Goussainville Paris Sarcelles Villiers-le-Bel 🏆 TAXI CONVENTIONNÉ PROFESSIONNEL',
  keywords: [
    // ULTRA FOCUS GOUSSAINVILLE - DOMINATION TOTALE
    'taxi Goussainville',
    'TAXI GOUSSAINVILLE',
    'Taxi Goussainville',
    'MEILLEUR taxi Goussainville',
    'N°1 taxi Goussainville',
    'PREMIER taxi Goussainville',
    'taxi goussainville 95190',
    'TAXI GOUSSAINVILLE 95190',
    'taxi Goussainville pas cher',
    'TAXI GOUSSAINVILLE PAS CHER',
    'taxi Goussainville 24h',
    'TAXI GOUSSAINVILLE 24H',
    'taxi Goussainville centre',
    'TAXI GOUSSAINVILLE CENTRE',
    'numéro taxi Goussainville',
    'NUMÉRO TAXI GOUSSAINVILLE',
    'téléphone taxi Goussainville',
    'TÉLÉPHONE TAXI GOUSSAINVILLE',
    'appeler taxi Goussainville',
    'APPELER TAXI GOUSSAINVILLE',
    'réserver taxi Goussainville',
    'RÉSERVER TAXI GOUSSAINVILLE',
    'taxi Goussainville fiable',
    'TAXI GOUSSAINVILLE FIABLE',
    'taxi Goussainville rapide',
    'TAXI GOUSSAINVILLE RAPIDE',
    'taxi Goussainville professionnel',
    'TAXI GOUSSAINVILLE PROFESSIONNEL',
    
    // Geo ultra-local
    'taxi Sarcelles Goussainville',
    'taxi Villiers-le-Bel Goussainville',
    'taxi Garges-lès-Gonesse Goussainville',
    'taxi Gonesse Goussainville',
    'taxi Arnouville Goussainville',
    'taxi Louvres Goussainville',
    'taxi Vaud-Herland Goussainville',
    'taxi gare Goussainville',
    'taxi RER Goussainville',
    'taxi Val-d\'Oise 95',
    
    // Aéroports depuis Goussainville
    'taxi Goussainville CDG',
    'taxi Goussainville Roissy',
    'taxi Goussainville Orly',
    'taxi Goussainville Beauvais',
    'taxi Goussainville aéroport',
    'transport aéroport Goussainville',
    'navette Goussainville CDG',
    'navette Goussainville Orly',
    
    // Paris depuis Goussainville
    'taxi Goussainville Paris',
    'taxi Goussainville centre Paris',
    'transport Goussainville Paris',
    'course Goussainville Paris',
    
    // Service & caractéristiques
    'taxi conventionné Goussainville',
    'VTC Goussainville',
    'chauffeur privé Goussainville',
    'taxi médical Goussainville',
    'taxi professionnel Goussainville',
    'réservation taxi Goussainville',
    'taxi urgence Goussainville',
    
    // Long tail ultra-local
    'appeler taxi Goussainville',
    'téléphone taxi Goussainville',
    'contacter taxi Goussainville',
    'commandre taxi Goussainville',
    'taxi près de moi Goussainville',
    'taxi disponible Goussainville',
    'taxi maintenant Goussainville',
    'société taxi Goussainville',
    'entreprise taxi Goussainville',
    'service taxi Goussainville',
    
    // Questions ultra-fréquentes
    'comment réserver taxi Goussainville',
    'où trouver taxi Goussainville',
    'quel numéro taxi Goussainville',
    'combien coûte taxi Goussainville',
    'taxi libre Goussainville',
    'taxi dispo Goussainville',
    'taxi urgent Goussainville',
    'taxi immédiat Goussainville',
    'taxi de suite Goussainville',
    'taxi tout de suite Goussainville',
    
    // Comparaisons avec concurrents
    'meilleur que uber Goussainville',
    'moins cher que vtc Goussainville',
    'plus rapide que bus Goussainville',
    'mieux que transport commun Goussainville',
    'alternative uber Goussainville',
    'remplace vtc Goussainville',
    
    // Situations spécifiques
    'taxi nuit Goussainville',
    'taxi weekend Goussainville',
    'taxi jour férié Goussainville',
    'taxi vacances Goussainville',
    'taxi urgence médicale Goussainville',
    'taxi gare Goussainville',
    'taxi RER Goussainville'
  ],
  authors: [{ name: 'Taxi Goussainville Paris', url: 'https://taxi-goussainville-paris.vercel.app' }],
  creator: 'Taxi Goussainville Paris',
  publisher: 'Taxi Goussainville Paris',
  alternates: {
    canonical: 'https://taxi-goussainville-paris.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://taxi-goussainville-paris.vercel.app',
    title: '🚖 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ N°1 MEILLEUR SERVICE 24H/24',
    description: '⭐ N°1 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ MEILLEUR SERVICE 24H/24 📞 RÉSERVATION IMMÉDIATE 🚖 Transferts CDG/Orly',
    siteName: 'Taxi Goussainville Paris',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Taxi Goussainville Paris - Service Professionnel 24/7'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚖 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ N°1 MEILLEUR SERVICE 24H/24',
    description: '⭐ N°1 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ MEILLEUR SERVICE 24H/24 📞 RÉSERVATION IMMÉDIATE',
    images: ['/opengraph-image'],
    creator: '@taxigoussainville'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
                verification: {
                google: 'Saje42_h-8ob6yO2Xa-D3BSZsqJhwU0rxIoVA7_G1l0',
              },
  category: 'Transport',
  classification: 'Taxi, Transport, Service local',
  other: {
    'geo.region': 'FR-95',
    'geo.placename': 'Goussainville',
    'geo.position': '49.0167;2.4667',
    'ICBM': '49.0167, 2.4667',
    'DC.title': 'Taxi Goussainville Paris - Service Professionnel',
    'DC.creator': 'Taxi Goussainville Paris',
    'DC.subject': 'Taxi, Transport, Goussainville, Paris, Aéroport',
    'DC.description': 'Service de taxi professionnel à Goussainville et Paris',
    'revisit-after': '7 days',
    'distribution': 'global',
    'rating': 'general',
    'expires': 'never'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* VERIFICATION MOTEURS DE RECHERCHE - PRIORITY */}
        <meta name="google-site-verification" content="Saje42_h-8ob6yO2Xa-D3BSZsqJhwU0rxIoVA7_G1l0" />
        <meta name="msvalidate.01" content="31DC9F63FAB886A95204507A27A2D103" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                            <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#FFD700" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
                            {/* SEO Local Ultra-optimisé */}
                    <meta name="geo.region" content="FR-95" />
        <meta name="geo.placename" content="Goussainville" />
        <meta name="geo.position" content="49.0167;2.4667" />
        <meta name="ICBM" content="49.0167, 2.4667" />
        <meta name="business.name" content="Taxi Goussainville 06 28 53 24 73" />
        <meta name="business.phone" content="+33628532473" />
        <meta name="business.hours" content="Mo-Su 00:00-23:59" />
        <meta name="business.category" content="Taxi Service" />
        
        {/* Mots-clés ultra-locaux additionnels MAXIMUM */}
        <meta name="local.business" content="TAXI GOUSSAINVILLE, MEILLEUR TAXI GOUSSAINVILLE, N°1 TAXI GOUSSAINVILLE, TAXI GOUSSAINVILLE 95190, TAXI CONVENTIONNÉ GOUSSAINVILLE, PREMIER TAXI GOUSSAINVILLE" />
        <meta name="service.area" content="GOUSSAINVILLE, SARCELLES, VILLIERS-LE-BEL, GARGES-LÈS-GONESSE, PARIS, CDG, ORLY, ROISSY, BEAUVAIS" />
        <meta name="business.type" content="TAXI SERVICE, TRANSPORT PROFESSIONNEL, VTC GOUSSAINVILLE, CHAUFFEUR PRIVÉ" />
        <meta name="target.keywords" content="taxi goussainville, meilleur taxi goussainville, n°1 taxi goussainville, taxi pas cher goussainville, taxi 24h goussainville" />
        <meta name="location.specific" content="GOUSSAINVILLE CENTRE, GOUSSAINVILLE GARE, GOUSSAINVILLE RER, GOUSSAINVILLE 95190" />
        <meta name="competition.keywords" content="TAXI GOUSSAINVILLE NUMERO 1, PREMIER TAXI GOUSSAINVILLE, TOP TAXI GOUSSAINVILLE, BEST TAXI GOUSSAINVILLE" />
        
                    {/* Optimisation moteurs de recherche */}
                    <meta name="yandex-verification" content="taxi-goussainville-yandex-verification" />
        
        {/* Recherche vocale et assistants */}
        <meta name="voice.search" content="taxi Goussainville, appeler taxi Goussainville, numéro taxi Goussainville" />
        <meta name="assistant.google" content="Ok Google, appeler taxi Goussainville" />
        <meta name="assistant.siri" content="Dis Siri, appeler taxi Goussainville" />
        <meta name="assistant.alexa" content="Alexa, trouve taxi Goussainville" />
        
        {/* Social proof et confiance */}
        <meta name="rating" content="4.9/5" />
        <meta name="reviews" content="127 avis clients" />
        <meta name="trust.signals" content="service professionnel, chauffeur expérimenté, véhicule récent" />
        <meta name="social.proof" content="meilleur taxi Goussainville, recommandé par clients" />
        
        {/* Mots-clés ultra-longue traîne pour capter TOUTES les recherches */}
        <meta name="longtail.keywords" content="comment réserver taxi Goussainville, où trouver taxi Goussainville, quel numéro taxi Goussainville, combien coûte taxi Goussainville CDG, taxi disponible maintenant Goussainville, taxi fiable Goussainville, taxi rapide Goussainville" />
        <meta name="urgent.keywords" content="taxi urgence Goussainville, taxi immédiat Goussainville, taxi maintenant Goussainville, taxi de suite Goussainville, taxi tout de suite Goussainville" />
        <meta name="comparative.keywords" content="meilleur que uber Goussainville, moins cher que vtc Goussainville, plus rapide que bus Goussainville, mieux que transport commun Goussainville" />
        <meta name="seasonal.keywords" content="taxi noel Goussainville, taxi nouvel an Goussainville, taxi weekend Goussainville, taxi vacances Goussainville, taxi fetes Goussainville" />
        
        {/* Questions fréquentes en meta pour Google */}
        <meta name="faq.schema" content="Quel est le numéro du taxi à Goussainville ? 06 28 53 24 73. Combien coûte un taxi de Goussainville à CDG ? Tarif fixe transparent. Y a-t-il un taxi 24h/24 à Goussainville ? Oui, service 24h/24. Comment réserver un taxi à Goussainville ? Appelez le 06 28 53 24 73" />
        
        {/* Optimisation mobile et recherche locale */}
        <meta name="mobile.local.search" content="taxi près de moi Goussainville, taxi proche Goussainville, taxi autour de moi 95190, taxi dans ma zone Goussainville" />
        <meta name="mobile.urgent" content="taxi maintenant Goussainville, taxi immédiat 95190, appeler taxi urgent Goussainville, besoin taxi de suite" />
        <meta name="mobile.quick.actions" content="composer 06 28 53 24 73, appeler taxi Goussainville, téléphoner taxi maintenant, contact direct taxi" />
        
        {/* Rich snippets pour recherche vocale */}
        <meta name="voice.commands" content="Hey Google appelle taxi Goussainville, Ok Google numéro taxi 95190, Dis Siri taxi Goussainville, Alexa trouve taxi proche" />
        <meta name="smart.speaker" content="taxi Goussainville 06 28 53 24 73, service transport local, réservation immédiate" />
        
        {/* Signaux de confiance pour algorithme Google */}
        <meta name="trust.indicators" content="entreprise locale depuis 2014, chauffeur professionnel licencié, véhicule récent assuré, tarifs officiels conventionnés" />
        <meta name="local.authority" content="référence taxi Goussainville, leader transport 95190, spécialiste navette aéroport, expert courses locales" />
        
        {/* Cache et performance */}
        <meta httpEquiv="cache-control" content="public, max-age=31536000" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Liens canoniques et alternates */}
        <link rel="canonical" href="https://taxi-goussainville-paris.vercel.app" />
        <link rel="alternate" hrefLang="fr-FR" href="https://taxi-goussainville-paris.vercel.app" />
        
        {/* Preload pour performance */}
        <link rel="preload" href="/images/Skoda.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className="font-sans antialiased bg-uber-white text-uber-black">
        <JsonLd />
        <InvisibleSEO />
        <DynamicSEO />
        <LiveReviews />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
