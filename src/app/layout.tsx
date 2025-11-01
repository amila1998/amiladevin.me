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
    default: "Amila Devin Senarathne | Software Engineer & Full Stack Developer",
    template: "%s | Amila Devin Senarathne"
  },
  description: "Passionate Software Engineer with 3+ years of experience designing, developing, and deploying scalable web applications. Expert in React, Next.js, Node.js, Spring Boot, and modern web technologies.",
  keywords: [
    "Amila Devin Senarathne",
    "Amila Devin", 
    "Software Engineer Sri Lanka",
    "Full Stack Developer", 
    "React Developer", 
    "Next.js Expert",
    "Node.js Developer",
    "Spring Boot Developer",
    "TypeScript Developer",
    "Vue.js Developer",
    "JavaScript Engineer",
    "Web Development Sri Lanka",
    "Panadura Software Engineer",
    "AWS Developer",
    "Docker Specialist",
    "Kafka Developer",
    "MySQL Expert",
    "MongoDB Developer",
    "Cloud Services",
    "SEO Optimization",
    "Scalable Web Applications",
    "Backend Development",
    "Frontend Development",
    "API Development",
    "Microservices Architecture",
    "System Migration",
    "Team Leadership",
    "Ceylon Business Appliances",
    "SLIIT Graduate"
  ],
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
    title: "Amila Devin Senarathne | Software Engineer & Full Stack Developer",
    description: "3+ years of experience building scalable web applications with React, Next.js, Node.js, Spring Boot. Expert in cloud services, microservices, and modern web technologies.",
    url: "https://amiladevin.me",
    siteName: "Amila Devin Senarathne - Software Engineer Portfolio",
    images: [
      {
        url: "https://amiladevin.me/profile_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Amila Devin Senarathne - Software Engineer & Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amila Devin Senarathne | Software Engineer & Full Stack Developer",
    description: "3+ years building scalable applications with React, Next.js, Node.js, Spring Boot. Based in Sri Lanka.",
    images: ["https://amiladevin.me/profile_pic.jpg"],
    creator: "@amiladevin",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amila Devin Senarathne",
    "alternateName": "Amila Devin",
    "jobTitle": "Software Engineer & Full Stack Developer",
    "description": "Passionate Software Engineer with 3+ years of experience designing, developing, and deploying scalable web applications and robust backend systems.",
    "url": "https://amiladevin.me",
    "email": "amiladevin@gmail.com",
    "telephone": "+94776659628",
    "image": "https://amiladevin.me/profile_pic.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panadura",
      "addressRegion": "Western Province",
      "addressCountry": "LK"
    },
    "sameAs": [
      "https://github.com/amiladevin",
      "https://linkedin.com/in/amiladevin",
      "https://twitter.com/amiladevin"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Fastify",
      "Spring Boot",
      "ASP.NET Core",
      "Kafka",
      "Redis",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Firebase",
      "Docker",
      "Jenkins",
      "AWS",
      "Git",
      "Bitbucket",
      "Jira",
      "WebSockets",
      "Chart.js",
      "Google APIs",
      "SEO Optimization",
      "Cloud Services",
      "Microservices",
      "Full Stack Development",
      "System Architecture",
      "Team Leadership"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "B.Sc. (Hons.) in Information Technology",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "Sri Lanka Institute of Information Technology"
        },
        "educationalLevel": "Bachelor's Degree",
        "about": "Specializing in Software Engineering"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certificate",
        "name": "Information Technology Technician (NVQ 4)",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "National Apprentice and Industrial Training Authority"
        }
      }
    ],
    "workExperience": [
      {
        "@type": "OrganizationRole",
        "roleName": "Full Stack Developer",
        "startDate": "2024",
        "description": "Lead end-to-end product revamps, system migrations, and automation projects"
      },
      {
        "@type": "OrganizationRole",
        "roleName": "Software Engineer",
        "startDate": "2023",
        "endDate": "2024",
        "worksFor": {
          "@type": "Organization",
          "name": "Ceylon Business Appliances (Pvt) Ltd"
        }
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Sri Lanka Institute of Information Technology"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Arthur C Clark Institute for Modern Technology"
      }
    ]
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
        <meta name="geo.region" content="LK" />
        <meta name="geo.placename" content="Panadura" />
        <meta name="geo.position" content="6.7133;79.9047" />
        <meta name="ICBM" content="6.7133, 79.9047" />
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
