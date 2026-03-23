import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Cortex — Operational Intelligence Platform',
  description: 'Turn complex data into clear decisions. Built for governments and enterprises that cannot afford failure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}