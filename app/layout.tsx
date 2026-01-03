import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google';
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SessionProvider from "@/components/SessionProvider";
import LayoutWrapper from "@/components/LayoutWrapper";

// Optimize font loading with next/font
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  fallback: ['serif'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const siteUrl = "https://hotelizvordoo.com";
const siteName = "Hotel Izvor d.o.o.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Premium Mountain Resort in Croatia | 4-Star Wellness Hotel`,
    template: `%s | ${siteName}`,
  },
  description: "Discover tranquility at Hotel Izvor d.o.o., a premium 4-star wellness resort nestled in the Croatian mountains. Experience natural beauty, therapeutic spa treatments, fresh mountain air, and exceptional hospitality. Your perfect escape from the everyday.",
  keywords: [
    "mountain hotel Croatia",
    "wellness resort Croatia",
    "spa hotel Croatia",
    "4-star hotel Croatia",
    "nature retreat Croatia",
    "Croatian mountain resort",
    "wellness spa hotel",
    "Hotel Izvor",
    "relaxation hotel Croatia",
    "therapeutic spa Croatia",
    "mountain accommodation",
    "eco-friendly hotel Croatia",
    "peaceful retreat Croatia",
    "family wellness hotel",
    "romantic mountain getaway",
    "hiking hotel Croatia",
    "nature hotel Croatia",
    "wellness vacation Croatia",
    "thermal spa hotel",
    "mountain view hotel Croatia"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hr_HR", "de_DE", "it_IT"],
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Premium Mountain Wellness Resort in Croatia`,
    description: "Discover tranquility at Hotel Izvor d.o.o., a premium wellness resort nestled in the Croatian mountains. Experience natural beauty and exceptional hospitality.",
    images: [
      {
        url: `${siteUrl}/og_image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Mountain Wellness Resort`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Premium Mountain Wellness Resort in Croatia`,
    description: "Discover tranquility at Hotel Izvor d.o.o., a premium wellness resort nestled in the Croatian mountains.",
    images: [`${siteUrl}/og_image.png`],
    creator: "@hotelizvor",
    site: "@hotelizvor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/en`,
      "hr-HR": `${siteUrl}/hr`,
    },
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": siteName,
    "description": "Premium wellness resort in Aranđelovac, Serbia offering 4-star accommodation with spa facilities, natural thermal waters, and mountain views",
    "image": `${siteUrl}/og_image.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mišarska BB",
      "addressLocality": "Aranđelovac",
      "postalCode": "34300",
      "addressCountry": "RS"
    },
    "telephone": "+381000000000",
    "email": "info@hotelizvordoo.com",
    "url": siteUrl,
    "priceRange": "€€€",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi" },
      { "@type": "LocationFeatureSpecification", "name": "Restaurant" },
      { "@type": "LocationFeatureSpecification", "name": "Spa & Wellness" },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Reception" },
      { "@type": "LocationFeatureSpecification", "name": "Room Service" },
      { "@type": "LocationFeatureSpecification", "name": "Thermal Pool" }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.3089",
      "longitude": "20.5564"
    },
    "sameAs": [
      "https://www.facebook.com/hotelizvor",
      "https://www.instagram.com/hotelizvor"
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SessionProvider>
          <LanguageProvider>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </LanguageProvider>
        </SessionProvider>
      </body>
    </html>
  );
}