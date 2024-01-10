import type { Metadata } from 'next'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Home from '../pages/Home/Home';
import './globals.css'

export const metadata: Metadata = {
  title: 'Gym',
  description: 'Gym academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}
) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <Home />
        <Footer />
      </body>
    </html>
  )
}
