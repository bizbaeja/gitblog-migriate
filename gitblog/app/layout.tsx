import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bizbaeja의 Portfolio',
  description: 'WEB DEVELOPER 배자현의 포트폴리오입니다. #portfolio #bizbaeja #webdeveloper #frontend #Frontend #nextjs #NextJS #nodejs #구인구직 #풀스택 #fullstack #프론트엔드개발자 #개발자 #개발자구직중 ', 
  icons: "./github.svg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}><ThemeProvider 
        attribute='class'
        forcedTheme='dark'
        storageKey='gamehub-theme'>
        {children}
        </ThemeProvider></body>
    </html>
  
  )
}
