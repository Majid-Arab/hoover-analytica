"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Palette, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { colorThemes, fontPairs } from "@/lib/theme-config"

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { colorTheme, fontPair, setColorTheme, setFontPair } = useTheme()

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="relative overflow-hidden group"
          aria-label="Change theme"
        >
          <Palette className="w-4 h-4" />
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl z-[101] p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Customize Theme
                </h2>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Color Themes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Color Themes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(colorThemes).map(([key, theme]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setColorTheme(key as keyof typeof colorThemes)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        colorTheme === key
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${theme.gradient}`} />
                        <span className="font-medium text-left">{theme.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded" style={{ background: theme.primary }} />
                        <div className="w-8 h-8 rounded" style={{ background: theme.secondary }} />
                        <div className="w-8 h-8 rounded" style={{ background: theme.accent }} />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Font Pairs */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Font Pairs</h3>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(fontPairs).map(([key, fonts]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setFontPair(key as keyof typeof fontPairs)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        fontPair === key
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium mb-2">{fonts.name}</div>
                      <div className="text-sm text-muted-foreground">
                        <span style={{ fontFamily: fonts.heading, fontWeight: fonts.headingWeight }}>
                          Heading: {fonts.heading}
                        </span>
                        {" • "}
                        <span style={{ fontFamily: fonts.body, fontWeight: fonts.bodyWeight }}>Body: {fonts.body}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Your preferences are automatically saved and will persist across sessions.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
