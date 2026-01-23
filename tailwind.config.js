/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ceylon Shine Travel Color Palette - Aesthetic Calm Sri Lankan Feel
        ceylon: {
          teal: "#1da2a0",    // Vibrant Logo Teal
          gold: "#f8b133",    // Vibrant Logo Gold
          golden: "#f8b133",  // Alias for gold
          clay: "#b14a27",    // Logo Terracotta/Red
          ocean: "#0a6379",   // Logo Wave Blue
          forest: "#225838",  // Logo Tree Green
          leaf: "#225838",    // Alias for forest
          dark: "#0f172a",    // Deep Navy/Black for contrast
          navy: "#0f172a",    // Alias for dark
          light: "#f7f3ef",   // Clean Sand/Eggshell
          white: "#FFFFFF",
        },

        // Legacy/Semantic mapping for the new theme
        travel: {
          primary: "#2D5A27",   // Forest Green
          secondary: "#D4A373", // Ochre
          accent: "#BC6C25",    // Clay
          success: "#8AA682",   // Sage
          warning: "#D4A373",   // Ochre
          error: "#9E2A2B",     // Deep Rust/Red
          dark: "#283618",      // Deep Jungle
          light: "#FEFAE0",     // Light Cream
          white: "#FFFFFF",
        },

        // Legacy colors for compatibility
        "sunshine-yellow": "#FFB637",
        "teal-green": "#007B73",
        "ocean-blue": "#004463",
        "palm-green": "#2E6B3F",
        "warm-brown": "#8B5A2B",
        "sandy-beige": "#FFB637",
        "sky-white": "#FFFFFF",
        "sunset-orange": "#FFB637",

        // Legacy neon colors (keeping for compatibility)
        neon: {
          pink: "#ff0080",
          blue: "#00ffff",
          green: "#00ff00",
          yellow: "#ffff00",
          purple: "#8000ff",
          orange: "#ff8000",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        gradient: "gradient 3s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #007B73, 0 0 10px #007B73, 0 0 15px #007B73",
          },
          "100%": {
            boxShadow: "0 0 10px #007B73, 0 0 20px #007B73, 0 0 30px #007B73",
          },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "travel-gradient":
          "linear-gradient(135deg, #007B73 0%, #FFB637 50%, #004463 100%)",
        "ocean-gradient":
          "linear-gradient(135deg, #004463 0%, #2E6B3F 50%, #007B73 100%)",
        "sunset-gradient":
          "linear-gradient(135deg, #FFB637 0%, #8B5A2B 50%, #007B73 100%)",
        "beach-gradient":
          "linear-gradient(135deg, #FFB637 0%, #8B5A2B 50%, #2E6B3F 100%)",
        "forest-gradient":
          "linear-gradient(135deg, #2E6B3F 0%, #007B73 50%, #004463 100%)",
        "desert-gradient":
          "linear-gradient(135deg, #8B5A2B 0%, #FFB637 50%, #2E6B3F 100%)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(40, 54, 24, 0.1)",
        "glass-light": "0 4px 16px 0 rgba(40, 54, 24, 0.05)",
        "travel-glow": "0 0 20px rgba(45, 90, 39, 0.15)",
      },
    },
  },
  plugins: [],
};
