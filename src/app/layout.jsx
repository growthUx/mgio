import { Inter, Source_Serif_4 } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Providers } from '@/app/providers'
import GoogleTagManager from '@/components/GoogleTagManager'
import Nav from '@/components/Nav'

import '@/styles/tailwind.css'
import TrustPilot from '@/components/TrustPilot'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify desired weights, e.g., regular and bold
  display: 'swap',
  variable: '--font-source-serif-4',
});

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

const funnelDisplay = localFont({
  src: '../fonts/Funnel-Display.var.woff2',
  display: 'swap',
  variable: '--font-funnel-display',
  weight: '300 800',
})

export const metadata = {
  metadataBase: new URL('https://marketgrowth.io'),
  title: {
    default: 'Digital Experience and AI Automation Agency | MarketGrowth',
    template: '%s | MarketGrowth'
  },
  description: 'MarketGrowth serves as the technical partner for founders and GTM teams. We provide digital experience and AI automation solutions.',
  keywords: [
    'digital experience',
    'AI automation',
    'GTM',
    'technical partner',
    'workflow automation',
    'community platform'
  ],
  authors: [{ name: 'MarketGrowth' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marketgrowth.io',
    siteName: 'MarketGrowth',
    title: 'Digital Experience and AI Automation Agency',
    description: 'MarketGrowth serves as the technical partner for founders and GTM teams. We provide digital experience and AI automation solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MarketGrowth - Digital Experience & AI Automation Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Experience and AI Automation Agency',
    description: 'MarketGrowth serves as the technical partner for founders and GTM teams. We provide digital experience and AI automation solutions.',
    images: ['/images/og-image.jpg'],
    creator: '@marketgrowth'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
    },
  ],
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
    canonical: 'https://marketgrowth.io'
  },
  verification: {
    google: 'PZgVbv49YJNDpO2D3BtA_7YZYT9ATgb97l9a_hGxtKE', // Add your Google Search Console verification code
  }
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', sourceSerif4.variable, funnelDisplay.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-[#082523]">
        <GoogleTagManager />
        <Nav />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
