export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Disallow crawling API routes if any exist
    },
    sitemap: 'https://oxford-academic-complex.vercel.app/sitemap.xml',
  }
}
