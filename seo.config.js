
const defaultSEO = {
    title: 'Yung Havy - Web Development & Visual Storytelling',
    description: 'Stop settling for average. Get a website and visual storytelling that sets you apart. Work with Yung Havy.',
    canonical: 'https://www.yunghavy.com',
    keywords: [
      'Photography',
      'Cinematography',
      'Website development',
      'UI UX Design',
    ],
   creator: 'Yunghavy',
    publisher: 'Yunghavy',
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url: 'https://www.yunghavy.com',
      siteName: 'yunghavy',
      title: 'Bring Your Vision to Life - Web Design, Video & Photography by Yung Havy',
      description: 'Get your website designed, developed, and elevate your brand with Yung Havy. Stunning visuals, exceptional storytelling through music video directing, photography, and design services.',
    
      images: [
        {
          url: 'https://www.yunghavy.com/images/logo.JPG',
          width: 1200,
          height: 630,
          alt: 'site-preview',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bring Your Vision to Life - Web Design, Video & Photography by Yung Havy",
      description:
        "Get your website designed, developed, and elevate your brand with Yung Havy. Stunning visuals, exceptional storytelling through music video directing, photography, and design services.",
      images: [
        {
          url: "https://www.yunghavy.com/images/logo.JPG",
          type: "image/jpg",
          width: 1200,
          height: 630,
          alt: "site-preview",
        },
      ],
    }
  };

  const pagesSEO = {
    index: {
      ...defaultSEO,
      keywords: ['web development', 'visual storytelling', 'Yung Havy'],
    metaRobots: 'index, follow',
    structuredData: {
      type: 'WebPage',
      name: 'Home',
      description: 'Explore the world of web development and visual storytelling with Yung Havy.',
    },

    },
    love: {
      ...defaultSEO,
      title: 'The loves of Yunghavy',
      description: 'Explore the passions that fuel my creative fire for visual storytelling.',
      canonical: 'https://www.yunghavy.com/love',
      keywords: ['passions', 'likes', 'hobbies'],
    metaRobots: 'index, follow',
    structuredData: {
      type: 'WebPage',
      name: 'The Loves of Yunghavy',
      description: 'Discover the diverse passions that inspire Yung Havy in his creative journey.',
    },
    },

    works: {
      ...defaultSEO,
      title: 'Selected Works of Yunghavy',
      description: 'Witness the magic of Yung Havy through stunning visuals and creative projects.',
      canonical: 'https://www.yunghavy.com/works',
      keywords: ['portfolio', 'projects', 'visuals', 'Yunghavy'],
      metaRobots: 'index, follow',
      structuredData: {
        type: 'WebPage',
        name: 'Selected Works',
        description: 'Explore a curated selection of Yung Havy\'s creative projects and visual works.',
      },
    },

     rates: {
    ...defaultSEO,
    title: 'Rates of Yunghavy',
    description: 'Invest in visual content that captures your essence and amplifies your brand with affordable rates.',
    canonical: 'https://www.yunghavy.com/rates',
    keywords: ['pricing', 'rates', 'services', 'Yunghavy'],
    metaRobots: 'index, follow',
    structuredData: {
      type: 'WebPage',
      name: 'Rates',
      description: 'Discover the pricing and rates for Yung Havy\'s web development, visual storytelling, and design services.',
    },
  },
  contact: {
    ...defaultSEO,
    title: 'Contact Yunghavy',
    description: 'Connect with Yung Havy and discuss how his solutions can elevate your digital presence.',
    canonical: 'https://www.yunghavy.com/contact',
    keywords: ['contact', 'reach out', 'communication', 'Yunghavy'],
    metaRobots: 'index, follow',
    structuredData: {
      type: 'ContactPage',
      name: 'Contact',
      description: 'Get in touch with Yung Havy to explore collaboration opportunities and discuss your digital projects.',
    },
  },
};

  
  export { defaultSEO, pagesSEO };
  