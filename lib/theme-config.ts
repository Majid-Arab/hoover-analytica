export const colorThemes = {
  business: {
    name: "Business (Recommended)",
    primary: "rgba(167, 24, 98, 1)", // Heading color
    secondary: "rgba(131, 58, 180, 0.99)", // Purple from gradient
    secondaryRed: "rgba(253, 29, 29, 1)", // Red from gradient
    accent: "rgba(252, 176, 69, 1)", // Orange from gradient
    gradient: "from-[rgba(131,58,180,0.99)] via-[#FD1D1D] to-[#FCB045]",
    textColor: "rgba(51, 51, 51, 1)", // Text color
    bgGradient:
      " linear-gradient(90deg, rgba(131, 58, 180, 0.99) 0%, #FD1D1D 49.04%, #FCB045 100%)",
  },
  purple: {
    name: "Purple Magenta",
    primary: "oklch(0.55 0.22 290)",
    secondary: "oklch(0.65 0.25 340)",
    accent: "oklch(0.7 0.2 30)",
    gradient: "from-purple-600 via-pink-600 to-orange-600",
  },
  blue: {
    name: "Ocean Blue",
    primary: "oklch(0.45 0.2 240)",
    secondary: "oklch(0.6 0.2 200)",
    accent: "oklch(0.65 0.18 180)",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  orange: {
    name: "Sunset Orange",
    primary: "oklch(0.65 0.22 40)",
    secondary: "oklch(0.7 0.2 20)",
    accent: "oklch(0.75 0.18 60)",
    gradient: "from-orange-600 via-red-500 to-yellow-600",
  },
  yellow: {
    name: "Golden Yellow",
    primary: "oklch(0.75 0.18 80)",
    secondary: "oklch(0.7 0.2 60)",
    accent: "oklch(0.65 0.22 40)",
    gradient: "from-yellow-500 via-amber-600 to-orange-600",
  },
  red: {
    name: "Ruby Red",
    primary: "oklch(0.55 0.25 20)",
    secondary: "oklch(0.65 0.25 340)",
    accent: "oklch(0.65 0.22 40)",
    gradient: "from-red-600 via-pink-600 to-orange-600",
  },
} as const

export const fontPairs = {
  inter: {
    name: "Inter + Inter",
    heading: "Inter",
    body: "Inter",
    headingWeight: "700",
    bodyWeight: "400",
  },
  avantGarde: {
    name: "ITC Avant Garde + Salesforce Sans",
    heading: "ITC Avant Garde Gothic",
    body: "Salesforce Sans",
    headingWeight: "700",
    bodyWeight: "400",
  },
  poppins: {
    name: "Poppins + Inter",
    heading: "Poppins",
    body: "Inter",
    headingWeight: "700",
    bodyWeight: "400",
  },
  crimson: {
    name: "Crimson Pro + Crimson Text",
    heading: "Crimson Pro",
    body: "Crimson Text",
    headingWeight: "700",
    bodyWeight: "400",
  },
  playfair: {
    name: "Playfair Display + Source Sans 3",
    heading: "Playfair Display",
    body: "Source Sans 3",
    headingWeight: "700",
    bodyWeight: "400",
  },
  montserrat: {
    name: "Montserrat + Open Sans",
    heading: "Montserrat",
    body: "Open Sans",
    headingWeight: "700",
    bodyWeight: "400",
  },
  spaceGrotesk: {
    name: "Space Grotesk + Inter",
    heading: "Space Grotesk",
    body: "Inter",
    headingWeight: "700",
    bodyWeight: "400",
  },
  dmSans: {
    name: "DM Sans + DM Sans",
    heading: "DM Sans",
    body: "DM Sans",
    headingWeight: "700",
    bodyWeight: "400",
  },
  raleway: {
    name: "Raleway + Lato",
    heading: "Raleway",
    body: "Lato",
    headingWeight: "700",
    bodyWeight: "400",
  },
  outfit: {
    name: "Outfit + Work Sans",
    heading: "Outfit",
    body: "Work Sans",
    headingWeight: "600",
    bodyWeight: "400",
  },
} as const

export type ColorTheme = keyof typeof colorThemes
export type FontPair = keyof typeof fontPairs
