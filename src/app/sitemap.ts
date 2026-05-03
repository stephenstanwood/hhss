import type { MetadataRoute } from 'next';

const BASE_URL = 'https://helpsouthsudan.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/our-story', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/about-south-sudan', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/events', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/donate', priority: 0.9, changeFrequency: 'yearly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
