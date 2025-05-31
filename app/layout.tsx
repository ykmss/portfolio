import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CursorDot from "@/components/ui/cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yell Khaing - Full Stack Web Developer",
  description: "Portfolio of Web Developer - Full Stack Web Developer specializing in PHP, Laravel, React, and Vue.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/profile.jfif" sizes="any" />
        {/* Or use /icon.png for PNG */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <CursorDot /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
