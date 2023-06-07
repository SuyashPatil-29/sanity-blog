import "../../../styles/globals.css"
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogs',
  description: 'Generated by create next app',
}

export default function BlogsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <section>{children}</section>;
  }