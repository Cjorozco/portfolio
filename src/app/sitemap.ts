import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-jcom.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
