import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '新闻聚合系统',
  description: '整合36kr、BBC、腾讯新闻、网易新闻的财经科技新闻聚合平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
