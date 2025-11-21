import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'
import CustomCursor from '@/components/shared/CustomCursor'
import SmoothScroll from '@/components/shared/SmoothScroll'

export const metadata: Metadata = {
  title: 'AJ Tech - Phone & Laptop Repair | Quality Devices in Jos, Nigeria',
  description: 'Professional phone, laptop, and printer repairs in Jos, Nigeria. Quality new and refurbished devices. Fast service, fair prices. Expert technicians you can trust.',
  keywords: [
    'phone repair Jos',
    'laptop repair Jos',
    'printer repair Nigeria',
    'phone sales Jos',
    'laptop sales Nigeria',
    'AJ Tech',
    'tech repair Jos',
    'device repair Nigeria',
  ],
  authors: [{ name: 'AJ Tech' }],
  creator: 'AJ Tech',
  publisher: 'AJ Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ajtech.com.ng'),
  openGraph: {
    title: 'AJ Tech - Phone & Laptop Repair | Quality Devices',
    description: 'Professional phone, laptop, and printer repairs. Quality new and refurbished devices. Fast service, fair prices.',
    url: 'https://ajtech.com.ng',
    siteName: 'AJ Tech',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AJ Tech - Your Trusted Tech Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJ Tech - Phone & Laptop Repair',
    description: 'Professional tech repairs and quality devices in Jos, Nigeria',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
