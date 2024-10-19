import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, Caveat } from 'next/font/google';

import '~/styles/main.css'

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
  ]
}
