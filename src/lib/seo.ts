import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  keywords?: string[]
}

export function generateSEOMetadata({
  title = 'Amila Devin | Full-Stack Developer & UI/UX Designer',
  description = 'Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies.',
  url = 'https://amiladevin.me',
  image = 'https://amiladevin.me/og-image.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords = []
}: SEOProps): Metadata {
  const baseKeywords = [
    'Amila Devin',
    'Full-Stack Developer',
    'UI/UX Designer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    'Web Design',
    'Modern Web Development'
  ]

  const allKeywords = [...baseKeywords, ...keywords]

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: 'Amila Devin' }],
    creator: 'Amila Devin',
    publisher: 'Amila Devin',
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
      title,
      description,
      url,
      siteName: 'Amila Devin Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@amiladevin',
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateStructuredData(type: 'person' | 'webpage' | 'portfolio' = 'person') {
  const baseData = {
    '@context': 'https://schema.org',
  }

  switch (type) {
    case 'person':
      return {
        ...baseData,
        '@type': 'Person',
        name: 'Amila Devin',
        jobTitle: 'Full-Stack Developer & UI/UX Designer',
        description: 'Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies.',
        url: 'https://amiladevin.me',
        sameAs: [
          'https://github.com/amiladevin',
          'https://linkedin.com/in/amiladevin',
          'https://twitter.com/amiladevin'
        ],
        knowsAbout: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Node.js',
          'UI/UX Design',
          'Frontend Development',
          'Backend Development',
          'Web Development'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance'
        }
      }

    case 'webpage':
      return {
        ...baseData,
        '@type': 'WebPage',
        name: 'Amila Devin - Portfolio',
        description: 'Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies.',
        url: 'https://amiladevin.me',
        mainEntity: {
          '@type': 'Person',
          name: 'Amila Devin',
          jobTitle: 'Full-Stack Developer & UI/UX Designer',
          description: 'Crafting digital experiences with modern technologies and beautiful design.',
          url: 'https://amiladevin.me',
        }
      }

    case 'portfolio':
      return {
        ...baseData,
        '@type': 'CreativeWork',
        name: 'Amila Devin Portfolio',
        description: 'A showcase of web development projects and skills by Amila Devin',
        url: 'https://amiladevin.me',
        author: {
          '@type': 'Person',
          name: 'Amila Devin',
          jobTitle: 'Full-Stack Developer & UI/UX Designer',
          url: 'https://amiladevin.me'
        },
        dateCreated: new Date().toISOString(),
        dateModified: new Date().toISOString()
      }

    default:
      return baseData
  }
}
