// seo.config.js
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
          url: '/images/logo.JPG',
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
    about: {
      ...defaultSEO,
      title: 'About || Yung Havy',
      description: 'Learn more about my journey and passion for creative visual content..',
      
    },
    gallery: {
      ...defaultSEO,
      title: 'Gallery || Yung Havy',
      description: 'Browse through my stunning gallery showcasing portraits, events and fashion photography.',
      
    },
    visuals: {
      ...defaultSEO,
      title: 'Visuals || Yung Havy',
      description: 'Immerse yourself in a visual experience with my captivating visual content.',
      
    },
    designs: {
      ...defaultSEO,
      title: 'Designs || Yung Havy',
      description: 'Discover my innovative and user-centric UI/UX design solutions.',
      
    },
    contact: {
      ...defaultSEO,
      title: 'Contact || Yung Havy',
      description: 'Get in touch with me for your creative visual needs. We would love to hear from you!',
      
    },
  };
  
  export { defaultSEO, pagesSEO };
  