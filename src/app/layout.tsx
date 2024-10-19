import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, Caveat } from 'next/font/google';

import '~/styles/main.css'
import { config } from 'process';

export const metadata: Metadata = {
  ...config.metadata,
  metadataBaseName: new URL(config.webserver.host),
  title: {
    default: config.metadata.title,
    template: `%s | ${config.metadata.title}`,
  },
  applicationName: config.metadata.title,
  authors: [
    {
      name: 'Gabriel Danilo',
      url: 'https://github.com/gabrieldnsilva',
    },
  ],
  category: 'Personal Website',
  keywords: [
    'personal',
    'website',
    'blog',
    'homepage',
    'portfolio',
    'about',
    'me',
    'tech',
    'fullstack',
    'knowledge',
    'programming',
    'developer'
  ],
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    ...config.metadata,
    siteName: config.metadata.title,
    type: 'website',
    url: '/',
    emails: ['gabrieldnsilva@gmail.com'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media : '(prefers-color-scheme: dark)', color: '#060606' },
    {media : '(prefers-color-scheme: light)', color: '#fafafa' }
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const dancingScript = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang = "en" className="scroll-smooth">
      <head>Para Implementar</head>
      <body className= {`scroll-smooth' ${inter.variable} ${dancingScript.variable}`}>
        <Providers>
          <div className= "relative">
            <Header/>
            <div>{children}</div>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
