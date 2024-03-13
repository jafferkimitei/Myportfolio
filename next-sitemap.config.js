module.exports = {
  siteUrl: 'https://www.yunghavy.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
        '/success',
        '/GlobalContext',
        '/5',
        '/404',
      ],
      },
    ],
  },
  sitemapSize: 5000,
  targetDirectory: 'public',
};