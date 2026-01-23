import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CeylonShine Travel Agency',
    short_name: 'CeylonShine',
    description: 'Experience the serene beauty of Sri Lanka with curated, aesthetic travel experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F8F3',
    theme_color: '#1DA2A0',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
