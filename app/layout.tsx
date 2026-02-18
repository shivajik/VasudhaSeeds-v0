import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Vasudha Agri Seeds - Premium Quality Seeds for Indian Agriculture',
  description: 'Vasudha Agri Biotech Pvt. Ltd. - Leading seed manufacturing company in India providing high-quality agricultural seeds for farmers. Trusted by thousands of farmers across India.',
  keywords: 'seeds, agriculture, farming, India, crop seeds, vegetable seeds, hybrid seeds, maize seeds, paddy seeds',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
