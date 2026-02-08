
import "../styles/index.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Oxanium, Sarabun } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-oxanium",
});

const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sarabun",
});

const SITE_URL = "https://gxpertcarcare.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "G. Xpert Car Care | Auto Repair & Car Services in Calgary, AB",
    template: "%s | G. Xpert Car Care Calgary",
  },
  description:
    "G. Xpert Car Care offers expert auto repair, oil changes, tire services, wheel alignment, engine shampoo, and vehicle inspections in Calgary, AB. 20+ years of experience. Call (587) 329-2528.",
  keywords: [
    "car repair Calgary",
    "auto repair Calgary",
    "oil change Calgary",
    "tire services Calgary",
    "wheel alignment Calgary",
    "vehicle inspection Calgary",
    "AMVIC inspection Calgary",
    "engine shampoo Calgary",
    "G Xpert Car Care",
    "mechanic Calgary NE",
    "car service Calgary",
    "brake repair Calgary",
    "auto maintenance Calgary",
  ],
  authors: [{ name: "G. Xpert Car Care" }],
  creator: "G. Xpert Car Care",
  publisher: "G. Xpert Car Care",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "G. Xpert Car Care",
    title: "G. Xpert Car Care | Auto Repair & Car Services in Calgary, AB",
    description:
      "Expert auto repair, oil changes, tire services, wheel alignment, and vehicle inspections in Calgary, AB. 20+ years of experience. Certified technicians. Call (587) 329-2528.",
    images: [
      {
        url: "/assets/img/logo_1.svg",
        width: 300,
        height: 100,
        alt: "G. Xpert Car Care Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G. Xpert Car Care | Auto Repair & Car Services in Calgary, AB",
    description:
      "Expert auto repair, oil changes, tire services, wheel alignment, and vehicle inspections in Calgary, AB. Call (587) 329-2528.",
    images: ["/assets/img/logo_1.svg"],
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
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "G. Xpert Car Care",
    image: `${SITE_URL}/assets/img/logo_1.svg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+1-587-329-2528",
    email: "g.xpertcare@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2423 27 Ave NE",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T2E 8L2",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0776,
      longitude: -114.0193,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/p/G-Xpert-Car-Care-61565121207296/",
      "https://www.instagram.com/g.xpertcarcare/",
      "https://www.yelp.ca/biz/g-xpert-car-care-calgary",
    ],
    priceRange: "$$",
    description:
      "G. Xpert Car Care offers expert auto repair, oil changes, tire services, wheel alignment, engine shampoo, and vehicle inspections in Calgary, AB. Over 20 years of experience with certified technicians.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Oil Change",
            description: "Full synthetic and synthetic blend oil changes with filter included",
          },
          price: "59.99",
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tire Services",
            description: "Tire rotation, swap, balancing, mounting, and seasonal changes",
          },
          price: "14.99",
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wheel Alignment",
            description: "Front or rear wheel alignment for cars and trucks",
          },
          price: "119.99",
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Inspection",
            description: "AMVIC, OPI, pre-purchase, insurance, and seasonal inspections",
          },
          price: "49.99",
          priceCurrency: "CAD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Engine Shampoo",
            description: "Professional engine cleaning and leak detection",
          },
          price: "74.99",
          priceCurrency: "CAD",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
      bestRating: "5",
    },
  };

  return (
    <html lang="en" className={`${oxanium.variable} ${sarabun.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" href="/assets/img/hero_slider_bg_1.jpg" as="image" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
