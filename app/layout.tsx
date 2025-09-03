import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Seleor e-commerce',
  description: 'A modern e-commerce platform built with Next.js and Tailwind CSS.',
  icons: {
    icon: '/favicon.png',
  },
}

const Rootlayout = ({ children }: ChildProps) => {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
export default Rootlayout
