export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": "https://taxi-goussainville-paris.vercel.app/#business",
        "name": "🚖 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ N°1 MEILLEUR SERVICE 24H/24",
        "alternateName": [
          "TAXI GOUSSAINVILLE",
          "MEILLEUR TAXI GOUSSAINVILLE", 
          "N°1 TAXI GOUSSAINVILLE",
          "PREMIER TAXI GOUSSAINVILLE",
          "TAXI GOUSSAINVILLE 95190",
          "TAXI GOUSSAINVILLE PAS CHER",
          "TAXI GOUSSAINVILLE 24H",
          "TAXI GOUSSAINVILLE CENTRE",
          "VTC GOUSSAINVILLE",
          "CHAUFFEUR GOUSSAINVILLE",
          "TAXI SARCELLES GOUSSAINVILLE",
          "TAXI VILLIERS-LE-BEL GOUSSAINVILLE",
          "TAXI GARGES-LES-GONESSE GOUSSAINVILLE",
          "TAXI GOUSSAINVILLE CDG",
          "TAXI GOUSSAINVILLE ORLY",
          "TAXI GOUSSAINVILLE PARIS",
          "NUMÉRO TAXI GOUSSAINVILLE",
          "TÉLÉPHONE TAXI GOUSSAINVILLE",
          "RÉSERVER TAXI GOUSSAINVILLE",
          "APPELER TAXI GOUSSAINVILLE"
        ],
        "description": "N°1 Taxi Goussainville 06 28 53 24 73 - Service professionnel 24h/24. Transferts aéroports CDG, Orly, Beauvais. Courses locales Goussainville, Paris, Sarcelles, Villiers-le-Bel. Taxi conventionné. Réservation immédiate.",
        "url": "https://taxi-goussainville-paris.vercel.app",
        "telephone": "+33-6-28-53-24-73",
        "email": "contact@taxigoussainville.fr",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Goussainville",
          "addressLocality": "Goussainville",
          "addressRegion": "Val-d'Oise",
          "postalCode": "95190",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "49.0167",
          "longitude": "2.4667"
        },
        "openingHours": ["Mo 00:00-23:59", "Tu 00:00-23:59", "We 00:00-23:59", "Th 00:00-23:59", "Fr 00:00-23:59", "Sa 00:00-23:59", "Su 00:00-23:59"],
        "serviceArea": [
          {
            "@type": "City",
            "name": "Goussainville",
            "addressRegion": "Val-d'Oise",
            "addressCountry": "FR"
          },
          {
            "@type": "City", 
            "name": "Paris",
            "addressRegion": "Île-de-France",
            "addressCountry": "FR"
          },
          {
            "@type": "City",
            "name": "Sarcelles",
            "addressRegion": "Val-d'Oise",
            "addressCountry": "FR"
          },
          {
            "@type": "City",
            "name": "Villiers-le-Bel",
            "addressRegion": "Val-d'Oise",
            "addressCountry": "FR"
          },
          {
            "@type": "City",
            "name": "Garges-lès-Gonesse",
            "addressRegion": "Val-d'Oise",
            "addressCountry": "FR"
          },
          {
            "@type": "City",
            "name": "Gonesse",
            "addressRegion": "Val-d'Oise",
            "addressCountry": "FR"
          },
          {
            "@type": "City",
            "name": "Arnouville",
            "addressRegion": "Val-d'Oise",
            "addressCountry": "FR"
          },
          {
            "@type": "Airport",
            "name": "Aéroport Charles de Gaulle",
            "iataCode": "CDG",
            "addressRegion": "Val-d'Oise",
            "addressCountry": "FR"
          },
          {
            "@type": "Airport",
            "name": "Aéroport d'Orly",
            "iataCode": "ORY",
            "addressRegion": "Val-de-Marne",
            "addressCountry": "FR"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de taxi et transport",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Transfert aéroport CDG",
              "description": "Transport vers/depuis l'aéroport Charles de Gaulle Terminal 1 et 2",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "45",
                "priceCurrency": "EUR"
              },
              "areaServed": "Charles de Gaulle Airport",
              "availabilityStarts": "00:00",
              "availabilityEnds": "23:59"
            },
            {
              "@type": "Offer", 
              "name": "Transfert aéroport Orly",
              "description": "Transport vers/depuis l'aéroport d'Orly Sud et Ouest",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "55",
                "priceCurrency": "EUR"
              },
              "areaServed": "Orly Airport"
            },
            {
              "@type": "Offer",
              "name": "Course locale Goussainville",
              "description": "Transport local dans Goussainville et communes limitrophes",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "15",
                "priceCurrency": "EUR"
              },
              "areaServed": "Goussainville"
            },
            {
              "@type": "Offer",
              "name": "Transport Paris",
              "description": "Transport vers/depuis Paris intra-muros tous arrondissements",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "45",
                "priceCurrency": "EUR"
              },
              "areaServed": "Paris"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Marie Dubois"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Excellent service ! Chauffeur ponctuel et très professionnel. Je recommande vivement ce taxi Goussainville.",
            "datePublished": "2024-01-15"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Pierre Martin"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Transfert CDG impeccable ! Véhicule propre, chauffeur sympathique. Le meilleur taxi de Goussainville !",
            "datePublished": "2024-01-10"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sophie Leclerc"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Service 24h/24 au top ! Réactivité exceptionnelle. Mon taxi de référence à Goussainville.",
            "datePublished": "2024-01-05"
          }
        ],
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
        "hasMap": "https://maps.google.com/maps?q=Goussainville,France",
        "image": "https://taxi-goussainville-paris.vercel.app/opengraph-image",
        "logo": "https://taxi-goussainville-paris.vercel.app/icon",
        "founder": {
          "@type": "Person",
          "name": "Chauffeur de taxi professionnel",
          "jobTitle": "Chauffeur de taxi"
        },
        "numberOfEmployees": "1",
        "foundingDate": "2014",
        "slogan": "🚖 N°1 TAXI GOUSSAINVILLE 06 28 53 24 73 ⭐ MEILLEUR SERVICE 24H/24 📞 RÉSERVATION IMMÉDIATE",
        "keywords": "taxi goussainville, TAXI GOUSSAINVILLE, meilleur taxi goussainville, MEILLEUR TAXI GOUSSAINVILLE, n°1 taxi goussainville, N°1 TAXI GOUSSAINVILLE, premier taxi goussainville, PREMIER TAXI GOUSSAINVILLE, taxi goussainville 95190, TAXI GOUSSAINVILLE 95190, taxi goussainville pas cher, TAXI GOUSSAINVILLE PAS CHER, taxi goussainville 24h, TAXI GOUSSAINVILLE 24H, taxi goussainville centre, TAXI GOUSSAINVILLE CENTRE, taxi sarcelles goussainville, TAXI SARCELLES GOUSSAINVILLE, taxi villiers-le-bel goussainville, TAXI VILLIERS-LE-BEL GOUSSAINVILLE, taxi goussainville cdg, TAXI GOUSSAINVILLE CDG, taxi goussainville orly, TAXI GOUSSAINVILLE ORLY, taxi goussainville paris, TAXI GOUSSAINVILLE PARIS, vtc goussainville, VTC GOUSSAINVILLE, chauffeur prive goussainville, CHAUFFEUR PRIVÉ GOUSSAINVILLE, taxi conventionné goussainville, TAXI CONVENTIONNÉ GOUSSAINVILLE, numéro taxi goussainville, NUMÉRO TAXI GOUSSAINVILLE, téléphone taxi goussainville, TÉLÉPHONE TAXI GOUSSAINVILLE, appeler taxi goussainville, APPELER TAXI GOUSSAINVILLE, réserver taxi goussainville, RÉSERVER TAXI GOUSSAINVILLE",
        "mainEntityOfPage": "https://taxi-goussainville-paris.vercel.app"
      },
      {
        "@type": "WebSite",
        "@id": "https://taxi-goussainville-paris.vercel.app/#website",
        "url": "https://taxi-goussainville-paris.vercel.app",
        "name": "Taxi Goussainville Paris",
        "description": "Site officiel du service de taxi professionnel Goussainville-Paris",
        "publisher": {
          "@id": "https://taxi-goussainville-paris.vercel.app/#business"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://taxi-goussainville-paris.vercel.app/services?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://taxi-goussainville-paris.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://taxi-goussainville-paris.vercel.app"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Services",
            "item": "https://taxi-goussainville-paris.vercel.app/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Réservation",
            "item": "https://taxi-goussainville-paris.vercel.app/reservation"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact",
            "item": "https://taxi-goussainville-paris.vercel.app/contact"
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
