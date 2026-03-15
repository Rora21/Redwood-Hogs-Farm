import type { Metadata } from 'next'
import './globals.css'
import ConditionalShell from '@/components/ConditionalShell'

export const metadata: Metadata = {
  title: 'Redwood Hogs Farm',
  description: 'Premium pig farming and quality livestock',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f1e8]">
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  )
}
