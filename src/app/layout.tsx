import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Burp burp burp',
  description: 'portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
