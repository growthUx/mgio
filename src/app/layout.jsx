import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

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
      <head>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TNR79XR');</script>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="flex min-h-full flex-col bg-[#1D3c34]">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNR79XR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
