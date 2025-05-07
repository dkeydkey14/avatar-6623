import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '6623 - THIÊN ĐƯỜNG GIẢI TRÍ BẠC TỶ',
  description: 'Khám phá những ưu đãi hấp dẫn tại 6623',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
