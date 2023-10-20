import './globals.css'
import type { Metadata } from 'next'
import { Navbar,Footer } from '../../Components'



export const metadata: Metadata = {
  title: 'Vehi Mart',
  description: 'Seek the Best Cars in the modern world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
