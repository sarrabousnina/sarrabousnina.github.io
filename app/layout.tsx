import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sarra Bousnina - AI Software Engineer",
  description:
    "AI Software Engineer and final-year Software Engineering student at ESPRIT. Building intelligent, user-centric software with AI and creativity.",
  keywords: ["AI Software Engineer", "Software Engineering", "ESPRIT", "Machine Learning", "Full Stack Developer"],
  authors: [{ name: "Sarra Bousnina" }],
  creator: "Sarra Bousnina",
  openGraph: {
    title: "Sarra Bousnina - AI Software Engineer",
    description: "AI Software Engineer and final-year Software Engineering student at ESPRIT",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans ${plusJakartaSans.variable} ${inter.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <>
              {children}
            </>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
