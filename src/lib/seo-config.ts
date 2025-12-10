// Centralized SEO Configuration
export const siteConfig = {
  name: "Amila Devin Senarathne",
  title: "Amila Devin Senarathne | Software Engineer & Full Stack Developer",
  description: "Passionate Software Engineer with 3+ years of experience in full-stack development. Expert in React, Next.js, Vue.js, Node.js, Spring Boot, TypeScript, and modern web technologies. Based in Panadura, Sri Lanka.",
  url: "https://amiladevin.me",
  ogImage: "https://amiladevin.me/og-image.jpg",
  links: {
    github: "https://github.com/amiladevin",
    linkedin: "https://linkedin.com/in/amiladevin",
    twitter: "https://twitter.com/amiladevin",
    email: "mailto:amiladevin@gmail.com"
  },
  author: {
    name: "Amila Devin Senarathne",
    email: "amiladevin@gmail.com",
    phone: "+94776659628",
    location: "Panadura, Sri Lanka",
    jobTitle: "Software Engineer & Full Stack Developer"
  },
  keywords: [
    // Primary Keywords
    "Amila Devin Senarathne",
    "Amila Devin",
    "Software Engineer",
    "Full Stack Developer",
    
    // Technical Skills - Frontend
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    
    // Technical Skills - Backend
    "Node.js Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "ASP.NET Core Developer",
    "Fastify Developer",
    
    // Technical Skills - Databases
    "MySQL Expert",
    "MongoDB Developer",
    "SQL Server Developer",
    "Firebase Developer",
    "Redis Expert",
    
    // Technical Skills - DevOps & Tools
    "Docker Specialist",
    "Jenkins Expert",
    "AWS Developer",
    "Kafka Developer",
    "Git Expert",
    
    // Location-based
    "Software Engineer Sri Lanka",
    "Full Stack Developer Sri Lanka",
    "Web Developer Panadura",
    "Software Developer Western Province",
    
    // Specializations
    "Scalable Web Applications",
    "Microservices Architecture",
    "Cloud Services Developer",
    "API Development",
    "System Migration Expert",
    "SEO Optimization",
    
    // Soft Skills & Roles
    "Tech Team Lead",
    "Software Mentor",
    "Agile Developer",
    "Problem Solver",
    
    // Companies
    "Ceylon Business Appliances",
    "SLIIT Graduate",
    
    // Project Types
    "E-commerce Developer",
    "Real-time Applications",
    "Data Visualization",
    "WebSocket Developer",
    "REST API Developer"
  ]
};

// Generate JSON-LD structured data for Person
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://amiladevin.me/#person",
  name: "Amila Devin Senarathne",
  alternateName: "Amila Devin",
  url: "https://amiladevin.me",
  image: {
    "@type": "ImageObject",
    url: "https://amiladevin.me/profile_pic.jpg",
    width: 800,
    height: 800,
    caption: "Amila Devin Senarathne - Software Engineer headshot"
  },
  jobTitle: "Software Engineer & Full Stack Developer",
  description: "Passionate Software Engineer with 3+ years of experience designing, developing, and deploying scalable web applications and robust backend systems.",
  email: "amiladevin@gmail.com",
  telephone: "+94776659628",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Panadura",
    addressRegion: "Western Province",
    addressCountry: "LK",
    postalCode: "12500"
  },
  nationality: {
    "@type": "Country",
    name: "Sri Lanka"
  },
  sameAs: [
    "https://github.com/amiladevin",
    "https://linkedin.com/in/amiladevin",
    "https://twitter.com/amiladevin"
  ],
  knowsAbout: [
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
    "Microservices Architecture",
    "Full Stack Development",
    "System Architecture",
    "Team Leadership",
    "Agile Methodologies",
    "CI/CD",
    "REST APIs",
    "GraphQL"
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "B.Sc. (Hons.) in Information Technology",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "Sri Lanka Institute of Information Technology",
        url: "https://www.sliit.lk"
      },
      educationalLevel: "Bachelor's Degree",
      about: "Specializing in Software Engineering"
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Information Technology Technician (NVQ 4)",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "National Apprentice and Industrial Training Authority"
      }
    }
  ],
  workExperience: [
    {
      "@type": "OrganizationRole",
      roleName: "Full Stack Developer",
      startDate: "2024-01",
      description: "Leading end-to-end product revamps, system migrations, and automation projects using modern technologies"
    },
    {
      "@type": "OrganizationRole",
      roleName: "Software Engineer",
      startDate: "2023-01",
      endDate: "2024-12",
      worksFor: {
        "@type": "Organization",
        name: "Ceylon Business Appliances (Pvt) Ltd"
      },
      description: "Developed full-stack solutions, built dynamic reports and data visualizations"
    },
    {
      "@type": "OrganizationRole",
      roleName: "Associate Software Engineer",
      startDate: "2022-01",
      endDate: "2023-12",
      worksFor: {
        "@type": "Organization",
        name: "Ceylon Business Appliances (Pvt) Ltd"
      },
      description: "Delivered features for PlatformOne products, partnered with NLP team"
    }
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Sri Lanka Institute of Information Technology",
      url: "https://www.sliit.lk"
    },
    {
      "@type": "EducationalOrganization",
      name: "Arthur C Clark Institute for Modern Technology"
    }
  ]
};

// WebSite schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://amiladevin.me/#website",
  url: "https://amiladevin.me",
  name: "Amila Devin Senarathne - Software Engineer Portfolio",
  description: "Professional portfolio showcasing software engineering expertise, projects, and experience",
  publisher: {
    "@id": "https://amiladevin.me/#person"
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://amiladevin.me/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Breadcrumb schema
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://amiladevin.me"
    }
  ]
};

// ProfilePage schema
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-01-01T00:00:00+05:30",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@id": "https://amiladevin.me/#person"
  }
};
