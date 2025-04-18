import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SJM Internet - Site Oficial',
  description: 'Sjm Internet a melhor fibra ótica da região',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}



