export default function sitemap() {
  const baseUrl = 'https://oxford-academic-complex.vercel.app';
  
  // Define all static routes
  const routes = [
    '',
    '/about',
    '/programs',
    '/campuses',
    '/admissions',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
