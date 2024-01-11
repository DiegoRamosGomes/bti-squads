import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ReactNode } from "react";
import Script from "next/script";

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Squads Bichinhos da TI',
    default: 'Squads Bichinhos da TI'
  },
  description: 'Projeto feito para mostrar quais os squads e seus respectivos membros',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID
  
  return (
    <html lang="en">
    <body className={inter.className}>
    {children}
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
    </Script>
    </body>
    </html>
  )
}
