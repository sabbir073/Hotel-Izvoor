import { Metadata } from 'next';

const siteUrl = 'https://hotelizvordoo.com';
const siteName = 'Hotel Izvor d.o.o.';
const siteDescription = 'Discover tranquility at Hotel Izvor d.o.o., a premium wellness resort nestled in the Serbian mountains. Experience natural beauty, therapeutic spa treatments, and exceptional hospitality in Aranđelovac.';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

/**
 * Generate comprehensive SEO metadata for any page
 * @param props - SEO configuration options
 * @returns Next.js Metadata object
 */
export function generateSEO(props: SEOProps = {}): Metadata {
  const {
    title,
    description = siteDescription,
    image = `${siteUrl}/og_image.png`,
    url = siteUrl,
    keywords = [],
    type = 'website',
    publishedTime,
    modifiedTime,
    noindex = false,
  } = props;

  const pageTitle = title ? `${title} | ${siteName}` : `${siteName} - Premium Wellness Resort in Serbia | 4-Star Accommodation`;
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description,
    keywords: [
      'wellness hotel Serbia',
      '4-star hotel Serbia',
      'mountain resort Serbia',
      'Aranđelovac accommodation',
      'spa hotel Serbia',
      'Hotel Izvor',
      ...keywords,
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    openGraph: {
      type,
      locale: 'en_US',
      alternateLocale: ['hr_HR', 'de_DE', 'it_IT'],
      url: fullUrl,
      siteName,
      title: title || `${siteName} - Premium Wellness Resort in Serbia`,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [image],
      creator: '@hotelizvor',
      site: '@hotelizvor',
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
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
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-US': `${siteUrl}/en`,
        'hr-HR': `${siteUrl}/hr`,
      },
    },
    category: 'travel',
  };
}

/**
 * Generate Hotel Schema.org JSON-LD structured data
 */
export function generateHotelSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: siteName,
    description: siteDescription,
    image: `${siteUrl}/og_image.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mišarska BB',
      addressLocality: 'Aranđelovac',
      postalCode: '34300',
      addressCountry: 'RS',
    },
    telephone: '+381000000000',
    email: 'info@hotelizvordoo.com',
    url: siteUrl,
    priceRange: '€€€',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi' },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant' },
      { '@type': 'LocationFeatureSpecification', name: 'Spa & Wellness' },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Reception' },
      { '@type': 'LocationFeatureSpecification', name: 'Room Service' },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning' },
      { '@type': 'LocationFeatureSpecification', name: 'Thermal Pool' },
      { '@type': 'LocationFeatureSpecification', name: 'Fitness Center' },
      { '@type': 'LocationFeatureSpecification', name: 'Parking' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.3089',
      longitude: '20.5564',
    },
    sameAs: [
      'https://www.facebook.com/hotelizvor',
      'https://www.instagram.com/hotelizvor',
    ],
  };
}

/**
 * Generate BreadcrumbList Schema.org JSON-LD
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate LocalBusiness Schema.org JSON-LD
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    telephone: '+381000000000',
    email: 'info@hotelizvordoo.com',
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mišarska BB',
      addressLocality: 'Aranđelovac',
      addressRegion: 'Šumadija',
      postalCode: '34300',
      addressCountry: 'RS',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.3089',
      longitude: '20.5564',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/hotelizvor',
      'https://www.instagram.com/hotelizvor',
    ],
  };
}

/**
 * Generate FAQ Schema.org JSON-LD
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export const seoConfig = {
  siteUrl,
  siteName,
  siteDescription,
};
