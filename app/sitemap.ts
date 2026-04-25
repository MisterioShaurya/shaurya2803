import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shauryadeep.in',
      lastModified: new Date(),
    },
  ]
}
