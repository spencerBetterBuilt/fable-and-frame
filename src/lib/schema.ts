// Site-wide LocalBusiness + Photographer JSON-LD. See DESIGN.md/PRODUCT.md for source-of-truth brand facts.
// aggregateRating is intentionally omitted — brief instructs not to fabricate a rating until real review
// data exists. Add it back in once Madyson has real aggregate review numbers to report.
export function localBusinessSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Photographer'],
    name: 'Fable & Frame Studios',
    // PLACEHOLDER — replace with the real business phone/email/address once confirmed.
    telephone: '[PLACEHOLDER PHONE NUMBER]',
    email: '[PLACEHOLDER EMAIL ADDRESS]',
    url: siteUrl,
    image: `${siteUrl}/images/fable-and-frame-og.jpg`,
    description:
      "Fable & Frame Studios is Madyson Call's wedding, elopement, portrait, and family photography studio, based in Montgomery, TX and serving The Woodlands, Conroe, and greater Houston.",
    priceRange: '$$-$$$',
    areaServed: [
      { '@type': 'City', name: 'Montgomery, TX' },
      { '@type': 'City', name: 'The Woodlands, TX' },
      { '@type': 'City', name: 'Conroe, TX' },
      { '@type': 'City', name: 'Houston, TX' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montgomery',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  };
}
