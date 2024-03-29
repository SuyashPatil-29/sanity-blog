import "../../styles/globals.css"
import { Inter } from 'next/font/google'
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/footer"



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogs',
  description: 'Generated by create next app',
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
          {children}
      </body>
    </html>
  )
}