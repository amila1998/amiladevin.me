import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { siteConfig, personSchema, websiteSchema, profilePageSchema } from "@/lib/seo-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | Amila Devin Senarathne"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: "Amila Devin Portfolio",
  authors: [{ name: "Amila Devin Senarathne" }],
  creator: "Amila Devin Senarathne",
  publisher: "Amila Devin Senarathne",
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
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: "https://amiladevin.me/profile_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Amila Devin Senarathne - Software Engineer & Full Stack Developer headshot",
        type: "image/jpeg"
      },
      {
        url: "https://amiladevin.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amila Devin Senarathne Portfolio",
        type: "image/jpeg"
      }
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Amila",
    lastName: "Senarathne",
    username: "amiladevin",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["https://amiladevin.me/profile_pic.jpg"],
    creator: "@amiladevin",
    site: "@amiladevin",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  alternates: {
    canonical: "https://amiladevin.me",
  },
  metadataBase: new URL("https://amiladevin.me"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Combined structured data for better SEO
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      websiteSchema,
      profilePageSchema
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(combinedSchema),
          }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://amiladevin.me" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Viewport and Basic Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Geo-location Meta Tags */}
        <meta name="geo.region" content="LK-11" />
        <meta name="geo.placename" content="Panadura" />
        <meta name="geo.position" content="6.7133;79.9047" />
        <meta name="ICBM" content="6.7133, 79.9047" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Amila Devin Senarathne" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
