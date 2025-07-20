import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Crimson Fiery theme (replacing Klar theme)
        "crimson-neon-red": "#ff0040", // Bright neon red
        "crimson-dark-pink": "#ff1744", // Dark pink
        "crimson-fire": "#ff4569", // Fiery red-pink
        "crimson-dark": "#1a0000", // Very dark red
        "crimson-black": "#0d0000", // Dark crimson (replacing pure black)
        "crimson-gray": "#ff6b6b", // Light red-gray for secondary text
        "crimson-neon-border": "rgba(255, 0, 64, 0.5)", // Border color for neon elements
        "crimson-glow-color": "rgba(255, 0, 64, 0.9)", // Bright red for glows
        "crimson-neon-black-bg": "rgba(13, 0, 0, 0.9)", // Dark crimson background

        // Legacy aliases for backward compatibility
        "klar-neon-white": "#ff0040", // Map to crimson red
        "klar-white": "#ff0040", // Map to crimson red
        "klar-gray": "#ff6b6b", // Map to crimson gray
        "klar-dark": "#1a0000", // Map to crimson dark
        "klar-neon-border": "rgba(255, 0, 64, 0.5)", // Map to crimson border
        "klar-neon-black-bg": "rgba(13, 0, 0, 0.9)", // Map to dark crimson background
      },
      borderRadius: {
        none: "0px", // Explicitly define for edginess
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "crimson-glow": "0 0 40px 16px var(--crimson-glow-color)", // Increased intensity
        "crimson-glow-hover": "0 0 60px 24px var(--crimson-glow-color)", // Even stronger on hover
        "crimson-inner-glow": "inset 0 0 10px rgba(255, 0, 64, 0.5)", // Crimson inner glow

        // Legacy aliases
        "klar-glow": "0 0 40px 16px rgba(255, 0, 64, 0.9)",
        "klar-glow-hover": "0 0 60px 24px rgba(255, 0, 64, 0.9)",
        "klar-inner-glow": "inset 0 0 10px rgba(255, 0, 64, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
