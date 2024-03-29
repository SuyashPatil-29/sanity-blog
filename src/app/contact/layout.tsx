import "../../styles/globals.css"
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import HomePageFooter from "../components/HomePageFooter"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
      <header className='lg:mx-[150px] md:mx-[100px]'>
      <Header />
      </header>

      <main className="md:mx-[162px] mx-10">
        {children}
      </main>

      <footer>
        <HomePageFooter />
      </footer>

      </body>
    </html>
  )
}