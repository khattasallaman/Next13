import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './component/NavBar'
import MyProfilePic from './component/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Khatta's Blog",
  description: 'Created by Khattab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar/>
        <MyProfilePic/>
        {children}
        </body>
    </html>
  )
}
