import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['700']
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}