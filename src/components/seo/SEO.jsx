import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://qmedpharmacy.com'
const OG_IMAGE = `${BASE_URL}/site-og.png`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'QMED Pharmacy',
  url: BASE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  foundingDate: '2019',
  description:
    'QMED Pharmacy is a trusted pharmaceutical distributor in the Maldives, supplying quality medicines to hospitals, clinics, and pharmacies nationwide.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Malé',
    addressCountry: 'MV',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Maldives',
  },
  sameAs: [`${BASE_URL}`],
}

export default function SEO({ title, description, canonical, pageType = 'WebPage' }) {
  const fullTitle = title
  const canonicalUrl = `${BASE_URL}${canonical}`

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: fullTitle,
    description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'QMED Pharmacy',
      url: BASE_URL,
    },
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  )
}
