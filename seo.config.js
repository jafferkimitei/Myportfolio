
const defaultSEO = {
    title: 'Yung Havy - Web Development & Visual Storytelling',
    description: 'Stop settling for average. Get a website and visual storytelling that sets you apart. Work with Yung Havy.',
    canonical: 'https://www.yunghavy.com',
    openGraph: {
      type: 'website',
      locale: 'en_KE',
      url: 'https://www.yunghavy.com',
      title: 'Bring Your Vision to Life - Web Design, Video & Photography by Yung Havy',
      description: 'Get your website designed, developed, and elevate your brand with Yung Havy. Stunning visuals, exceptional storytelling through music video directing, photography, and design services.',
      images: [
        {
          url: '/images/about.webp',
          width: 1200,
          height: 630,
          alt: 'I am Yung Havy',
        },
        {
          url: '/images/about.jpg',
          width: 1200,
          height: 630,
          alt: 'I am Yung Havy',
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
  