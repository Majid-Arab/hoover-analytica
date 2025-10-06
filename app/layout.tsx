import type React from "react"
import type { Metadata } from "next"
import {
  Inter,
  Poppins,
  Crimson_Pro,
  Crimson_Text,
  Playfair_Display,
  Source_Sans_3,
  Montserrat,
  Open_Sans,
  Space_Grotesk,
  DM_Sans,
  Raleway,
  Lato,
  Outfit,
  Work_Sans,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/contexts/theme-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-poppins" })
const crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: "--font-crimson-pro" })
const crimsonText = Crimson_Text({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-crimson-text" })
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-lato" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" })

export const metadata: Metadata = {
  title: "Hoover Analytica - Transform Your Pharma Sales with Smart Analytics",
  description:
    "Map-based analytics platform for pharmaceutical companies to track sales, monitor performance, and make data-driven decisions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} ${poppins.variable} ${crimsonPro.variable} ${crimsonText.variable} ${playfairDisplay.variable} ${sourceSans.variable} ${montserrat.variable} ${openSans.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${raleway.variable} ${lato.variable} ${outfit.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
