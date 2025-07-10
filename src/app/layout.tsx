import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
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
    default: "Amila Devin | Full-Stack Developer & UI/UX Designer",
    template: "%s | Amila Devin"
  },
  description: "Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies. Specializing in React, Next.js, TypeScript, and beautiful design.",
  keywords: [
    "Amila Devin", 
    "Full-Stack Developer", 
    "UI/UX Designer", 
    "React Developer", 
    "Next.js Developer",
    "TypeScript", 
    "JavaScript", 
    "Web Developer", 
    "Frontend Developer", 
    "Backend Developer",
    "Portfolio", 
    "Web Design", 
    "Modern Web Development",
    "Responsive Design",
    "User Experience",
    "User Interface"
  ],
  authors: [{ name: "Amila Devin" }],
  creator: "Amila Devin",
  publisher: "Amila Devin",
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
    title: "Amila Devin | Full-Stack Developer & UI/UX Designer",
    description: "Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies. Specializing in React, Next.js, TypeScript, and beautiful design.",
    url: "https://amiladevin.me",
    siteName: "Amila Devin Portfolio",
    images: [
      {
        url: "https://amiladevin.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amila Devin - Full-Stack Developer & UI/UX Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amila Devin | Full-Stack Developer & UI/UX Designer",
    description: "Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies.",
    images: ["https://amiladevin.me/og-image.png"],
    creator: "@amiladevin",
  },
  verification: {
    google: "your-google-verification-code-here",
    // Add other search engine verification codes as needed
    // bing: "your-bing-verification-code",
    // yandex: "your-yandex-verification-code",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amila Devin",
    "jobTitle": "Full-Stack Developer & UI/UX Designer",
    "description": "Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies.",
    "url": "https://amiladevin.me",
    "sameAs": [
      "https://github.com/amiladevin",
      "https://linkedin.com/in/amiladevin",
      "https://twitter.com/amiladevin"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Web Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University Name"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://amiladevin.me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
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
