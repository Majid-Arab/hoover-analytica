"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { colorThemes, fontPairs, type ColorTheme, type FontPair } from "@/lib/theme-config"

interface ThemeContextType {
  colorTheme: ColorTheme
  fontPair: FontPair
  setColorTheme: (theme: ColorTheme) => void
  setFontPair: (pair: FontPair) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("purple")
  const [fontPair, setFontPair] = useState<FontPair>("inter")

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedColorTheme = localStorage.getItem("colorTheme") as ColorTheme
    const savedFontPair = localStorage.getItem("fontPair") as FontPair

    if (savedColorTheme && colorThemes[savedColorTheme]) {
      setColorTheme(savedColorTheme)
    }
    if (savedFontPair && fontPairs[savedFontPair]) {
      setFontPair(savedFontPair)
    }
  }, [])

  useEffect(() => {
    // Apply color theme
    const theme = colorThemes[colorTheme]
    document.documentElement.style.setProperty("--primary", theme.primary)
    document.documentElement.style.setProperty("--secondary", theme.secondary)
    document.documentElement.style.setProperty("--accent", theme.accent)

    // Save to localStorage
    localStorage.setItem("colorTheme", colorTheme)
  }, [colorTheme])

  useEffect(() => {
    // Apply font pair
    const fonts = fontPairs[fontPair]
    document.documentElement.style.setProperty("--font-heading", fonts.heading)
    document.documentElement.style.setProperty("--font-body", fonts.body)
    document.documentElement.style.setProperty("--font-heading-weight", fonts.headingWeight)
    document.documentElement.style.setProperty("--font-body-weight", fonts.bodyWeight)

    // Save to localStorage
    localStorage.setItem("fontPair", fontPair)
  }, [fontPair])

  return (
    <ThemeContext.Provider value={{ colorTheme, fontPair, setColorTheme, setFontPair }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
