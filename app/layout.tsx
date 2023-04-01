import './globals.css'
import Providers from "./providers"

import { Mulish } from 'next/font/google'
import Navbar from "./components/navbar"
import { Sidebar } from './components/sidebar'

// export const metadata = {
//   title: 'List Templates for Theme Viding',
//   description: 'list templates for themes viding website before implement to system',
// }

const mulish = Mulish({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Navbar />
        <Sidebar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
