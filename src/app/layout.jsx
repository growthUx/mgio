import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import GoogleTagManager from '@/components/GoogleTagManager'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

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
  title: 'Digital Experience and AI Automation Agency',
  description:
    'MarketGrowth helps businesses establish trust and authority to attract more businesses through delightful digital experiences and AI automation.',
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
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, funnelDisplay.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-[#1D3c34]">
        <GoogleTagManager />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
