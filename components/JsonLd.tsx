import React from 'react'

export const JsonLd = () => {
  // Schema LocalBusiness Principal
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': 'https://taxi-goussainville-paris.vercel.app/#localbusiness',
    name: 'Taxi Goussainville',
    image: 'https://taxi-goussainville-paris.vercel.app/opengraph-image',
    description: 'Service de taxi professionnel N°1 à Goussainville et Île-de-France. Transferts aéroports CDG, Orly, Beauvais. Disponible 24h/24 et 7j/7. Chauffeur privé VTC alternative.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Centre Ville',
      addressLocality: 'Goussainville',
      postalCode: '95190',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.0333,
      longitude: 2.4667
    },
    url: 'https://taxi-goussainville-paris.vercel.app',
    telephone: '+33628532473',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, American Express',
    currenciesAccepted: 'EUR',
    areaServed: [
      { '@type': 'City', name: 'Goussainville' },
      { '@type': 'City', name: 'Roissy-en-France' },
      { '@type': 'City', name: 'Le Thillay' },
      { '@type': 'City', name: 'Vaudherland' },
      { '@type': 'City', name: 'Louvres' },
      { '@type': 'City', name: 'Fontenay-en-Parisis' },
      { '@type': 'City', name: 'Bouqueval' },
      { '@type': 'City', name: 'Gonesse' },
      { '@type': 'City', name: 'Villiers-le-Bel' },
      { '@type': 'City', name: 'Sarcelles' },
      { '@type': 'City', name: 'Garges-lès-Gonesse' },
      { '@type': 'City', name: 'Arnouville' },
      { '@type': 'City', name: 'Paris' },
      { '@type': 'Place', name: 'Aéroport Charles de Gaulle' },
      { '@type': 'Place', name: 'Aéroport Orly' },
      { '@type': 'Place', name: 'Aéroport Beauvais' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Taxi',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transfert Aéroport CDG',
            description: 'Navette privée Goussainville vers Roissy Charles de Gaulle'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transfert Aéroport Orly',
            description: 'Taxi longue distance Goussainville vers Orly'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taxi Gare Parisienne',
            description: 'Liaison Goussainville vers Gare du Nord, Gare de Lyon, Gare de l\'Est'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taxi Conventionné CPAM',
            description: 'Transport médical assis pour rendez-vous hôpitaux'
          }
        }
      ]
    }
  }

  // Schema Speakable (Recherche Vocale Google Assistant / Siri)
  const speakableData = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    cssSelector: ['.hero-subtitle', '.faq-answer']
  }

  // Schema FAQ (Rich Snippets)
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Comment réserver un taxi à Goussainville ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vous pouvez réserver votre taxi à Goussainville immédiatement en appelant le 06 28 53 24 73. Nous sommes disponibles 24h/24 et 7j/7 pour toutes vos courses locales ou vers les aéroports.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quel est le prix d\'un taxi Goussainville vers l\'aéroport CDG ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le tarif est réglementé et dépend de l\'heure (jour/nuit). Goussainville étant très proche de CDG (15 min), le tarif est très compétitif. Contactez-nous pour une estimation précise.'
        }
      },
      {
        '@type': 'Question',
        name: 'Acceptez-vous la carte bancaire ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, tous nos véhicules sont équipés de terminaux de paiement acceptant les cartes bancaires (Visa, Mastercard) et American Express.'
        }
      },
      {
        '@type': 'Question',
        name: 'Faites-vous du transport médical conventionné ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous assurons le transport de malades assis (conventionné CPAM) vers les hôpitaux de Paris et d\'Île-de-France.'
        }
      }
    ]
  }

  // Schema Service Spécifique (Transfert Aéroport)
  const airportTransferData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Airport Transfer',
    provider: {
      '@id': 'https://taxi-goussainville-paris.vercel.app/#localbusiness'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Aéroport Charles de Gaulle'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Aéroport',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Navette Goussainville - CDG'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Navette Goussainville - Orly'
          }
        }
      ]
    }
  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airportTransferData) }}
      />
    </section>
  )
}
