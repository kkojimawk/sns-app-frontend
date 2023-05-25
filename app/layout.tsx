import './globals.css'
import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { RightBar } from '@/components/RightBar'

export const metadata = {
  title: 'Twitter',
  description: 'Twitter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="flex">
          <SideBar />
          <div className="w-1/2 bg-slate-300 px-4 py-2">{children}</div>
          <RightBar />
        </main>
      </body>
    </html>
  )
}
