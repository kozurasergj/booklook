import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { SelectedProductsProvider } from './components/SelectedProductsContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nanushka',
  description: 'Test task',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SelectedProductsProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </SelectedProductsProvider>
  )
}
