import type { MetaFunction } from '@remix-run/node' // or cloudflare/deno

export const metaTag: MetaFunction = () => ({
  title: 'Duwork Agency',
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  description:
    'Duwork - Design Agency and Consultant in Malang, Indonesia. We create impactful designs and provide expert consulting services to help businesses thrive.',
  'og:title': 'Duwork Agency',
  'og:description':
    'Duwork - Design Agency and Consultant in Malang, Indonesia. We create impactful designs and provide expert consulting services to help businesses thrive.',
  'og:image': 'https://duworks.vercel.app/image-duwork.png',
  'og:url': 'https://duworks.vercel.app/',
  'og:type': 'website',
  'twitter:title': 'Duwork Agency',
  'twitter:descriptio':
    'Duwork - Design Agency and Consultant in Malang, Indonesia. We create impactful designs and provide expert consulting services to help businesses thrive.',
  'twitter:image': 'https://duworks.vercel.app/image-duwork.png',
  'twitter:card': 'summary_large_image',
})
