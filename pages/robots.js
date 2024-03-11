
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
      Disallow: '/404',
    Disallow: '/500',
    Disallow: '/success',
    },
    sitemap: 'https://yunghavy.com/sitemap.xml',
  }
}