module.exports = {
  siteUrl: 'https://www.yunghavy.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  sitemapSize: 5000,
  targetDirectory: 'public',
};