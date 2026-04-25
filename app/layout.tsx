import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Shaurya Deep | Tech Entrepreneur, Full Stack Developer & Startup Builder",

  description:
    "Shaurya Deep is a tech entrepreneur and full stack developer from India, building startups, software, and digital products. Founder of SnapPitch.",

  keywords: [
    "Shaurya",
    "Shaurya Deep",
    "iselshaurya",
    "Shaurya developer",
    "Shaurya entrepreneur",
    "Shaurya Deep India",
    "SnapPitch",
    "SnapPitch founder",
    "Full Stack Developer",
    "Tech Entrepreneur",
    "Startup Founder",
    "Software Developer",
    "Web Developer India",
    "Technology innovator"
  ],

  authors: [{ name: "Shaurya Deep" }],
  creator: "Shaurya Deep",
  publisher: "Shaurya Deep",

  metadataBase: new URL("https://shauryadeep.in"),

  openGraph: {
    title: "Shaurya Deep | Tech Entrepreneur & Developer",
    description:
      "Building startups, software, and digital experiences. Founder of SnapPitch.",
    url: "https://shauryadeep.in",
    siteName: "Shaurya Deep",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaurya Deep | Tech Entrepreneur & Developer",
    description:
      "Building startups, software, and digital experiences.",
    creator: "@iselshaurya",
  },

  alternates: {
    canonical: "https://shauryadeep.in",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}