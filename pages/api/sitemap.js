const { SitemapStream, streamToPromise } = require( 'sitemap' )
const { Readable } = require( 'stream' )


export default async (req, res) => {
  const stream = new SitemapStream({ hostname: 'https://yunghavy.com' });

  // Generate your sitemap links
  const links = [
    { url: '/',  changefreq: 'daily', priority: 0.3  },
    { url: '/loves',  changefreq: 'daily', priority: 0.3  },
    { url: '/works',  changefreq: 'daily', priority: 0.3  },
    { url: '/rates',  changefreq: 'daily', priority: 0.3  },
    { url: '/contact',  changefreq: 'daily', priority: 0.3  },
  ];


 // Return a promise that resolves with your XML string
 const data = await streamToPromise(Readable.from(links).pipe(stream));
 res.setHeader('Content-Type', 'text/xml');
 res.write(data.toString());
 res.end();
};