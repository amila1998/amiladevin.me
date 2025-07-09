import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Amila Devin | Software Engineer & Developer",
  description: "Portfolio and blog of Amila Devin, a software engineer specializing in full stack web development.",
  keywords: ["Amila Devin", "Software Engineer", "Web Developer", "TypeScript", "React", "Portfolio", "Blog", "Full Stack Developer", "Frontend Developer", "Backend Developer"],
  openGraph: {
    title: "Amila Devin | Software Engineer & Developer",
    description: "Portfolio and blog of Amila Devin, a software engineer specializing in web development, TypeScript, and React.",
    url: "https://amiladevin.me",
    siteName: "Amila Devin",
    images: [
      {
        url: "https://amiladevin.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amila Devin Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amila Devin | Software Engineer & Developer",
    description: "Portfolio and blog of Amila Devin, a software engineer specializing in web development, TypeScript, and React.",
    images: ["https://amiladevin.me/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("http://amiladevin.me"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
