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
        // Ceylon Shine Travel Color Palette - Based on Logo
        ceylon: {
          teal: "#007B73", // Teal Green - text and outer ring
          golden: "#FFB637", // Golden Yellow/Orange - background sun and highlights
          navy: "#004463", // Dark Blue/Navy - ocean waves
          leaf: "#2E6B3F", // Leaf Green - palm trees and vegetation
          brown: "#8B5A2B", // Brown/Tan - mountains, leopard, traditional elements
          white: "#FFFFFF", // Pure White
          light: "#F8FAFC", // Light Gray - Backgrounds
          dark: "#1F2937", // Dark Gray - Text & Headers
        },

        // Legacy colors for compatibility
        travel: {
          primary: "#007B73", // Teal Green
          secondary: "#004463", // Dark Blue/Navy
          accent: "#FFB637", // Golden Yellow/Orange
          success: "#2E6B3F", // Leaf Green
          warning: "#FFB637", // Golden Yellow/Orange
          error: "#EF4444", // Red - Urgency
          dark: "#1F2937", // Dark Gray - Text & Headers
          light: "#F8FAFC", // Light Gray - Backgrounds
          white: "#FFFFFF", // Pure White
          beach: "#FFB637", // Golden Yellow/Orange
          ocean: "#004463", // Dark Blue/Navy
          forest: "#2E6B3F", // Leaf Green
          sunset: "#FFB637", // Golden Yellow/Orange
          desert: "#8B5A2B", // Brown/Tan
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
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-light": "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
        "travel-glow": "0 0 20px rgba(0, 123, 115, 0.3)",
        "ocean-glow": "0 0 20px rgba(0, 68, 99, 0.3)",
        "sunset-glow": "0 0 20px rgba(255, 182, 55, 0.3)",
        "beach-glow": "0 0 20px rgba(255, 182, 55, 0.3)",
      },
    },
  },
  plugins: [],
};
