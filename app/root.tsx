import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import type { MetaFunction } from '@remix-run/node' // or cloudflare/deno
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'

import Footer from './components/layout/footer'
import Header from './components/layout/header'
import theme from './styles/theme'

export const meta: MetaFunction = () => ({
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

function Document({ children }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  // throw new Error("💣💥 Booooom");

  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Header />
        <Outlet />
        <Footer />
      </ChakraProvider>
    </Document>
  )
}

// How ChakraProvider should be used on CatchBoundary
export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider theme={theme}>
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}

// How ChakraProvider should be used on ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider theme={theme}>
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error:
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  )
}
