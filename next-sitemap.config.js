// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://ayan.is-a.dev',
    generateRobotsTxt: true,
    exclude: ['/opengraph-image', '/llms.txt'],
    // The homepage is the page that should rank; the tools are secondary.
    transform: async (config, path) => ({
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : path === '/tools' ? 0.5 : 0.4,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }),
    // Search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
    // Google-Extended, Bingbot) are all allowed by the wildcard rule.
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    },
  };
