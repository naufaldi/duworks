import { ChakraProvider, Box, Heading } from '@chakra-ui/react'
import type { MetaFunction } from '@remix-run/node'
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
import theme from './styles/theme'
import Header from './components/layout/header'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
})

function Document({
  children,
  title = 'App title',
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
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
