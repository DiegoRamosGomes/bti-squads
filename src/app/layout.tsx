import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from "react";

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Squads Bichinhos da TI',
  description: 'Projeto feito para mostrar quais os squads e seus respectivos membros',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
