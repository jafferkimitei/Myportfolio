
const defaultSEO = {
    title: 'Yung Havy',
    description: 'Your one-stop creative for web development, photography, videography, and UI/UX design',
    canonical: 'https://www.yunghavy.com',
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url: 'https://www.yunghavy.com',
      title: 'Yung Havy - The Maesso of Visual Storytelling',
      description: 'Nairobi Photographer, Web developer, UI/UX Designer and Film maker.',
      images: [
        {
          url: '/images/logo.webp',
          width: 1200,
          height: 630,
          alt: 'Yung Havy',
        },
      ],
    },
  };

  const pagesSEO = {
    index: {
      ...defaultSEO,
      
    },
    love: {
      ...defaultSEO,
      title: 'The loves of Yunghavy',
      description: 'Explore the passions that fuel my creative fire for visual storytelling.',
      
    },
    works: {
      ...defaultSEO,
      title: 'Selected works of Yunghavy',
      description: 'Witness the magic I unfold through stunning visuals.',
      
    },
    rates: {
      ...defaultSEO,
      title: 'Rates of Yunghavy',
      description: 'Invest in visual content that captures your essence and amplifies your brand.',
      
    },
    contact: {
      ...defaultSEO,
      title: 'Contact',
      description: 'Connect with me and lets discuss how my solutions can elevate your digital presence.',
      
    },
  };
  
  export { defaultSEO, pagesSEO };
  