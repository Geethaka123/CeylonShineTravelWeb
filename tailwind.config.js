/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Travel Agency Color Palette - More Vibrant & Travel-Themed
        'travel': {
          'primary': '#FF6B35',      // Vibrant Orange - Adventure & Energy
          'secondary': '#1E3A8A',     // Deep Blue - Trust & Professionalism
          'accent': '#F59E0B',        // Golden Yellow - Warmth & Sunshine
          'success': '#10B981',       // Emerald Green - Nature & Growth
          'warning': '#F97316',       // Bright Orange - Excitement
          'error': '#EF4444',         // Red - Urgency
          'dark': '#1F2937',          // Dark Gray - Text & Headers
          'light': '#F8FAFC',         // Light Gray - Backgrounds
          'white': '#FFFFFF',         // Pure White
          'beach': '#FEF3C7',         // Sand Color
          'ocean': '#0EA5E9',         // Ocean Blue
          'forest': '#059669',        // Forest Green
          'sunset': '#FB7185',        // Sunset Pink
          'desert': '#FCD34D',        // Desert Yellow
        },
        
        // Legacy colors for compatibility
        'sunshine-yellow': '#F9B32C',
        'teal-green': '#157A7D',
        'ocean-blue': '#005C73',
        'palm-green': '#2B4D3F',
        'warm-brown': '#A46A3F',
        'sandy-beige': '#EFD9A6',
        'sky-white': '#FFFFFF',
        'sunset-orange': '#E65C3A',
        
        // Legacy neon colors (keeping for compatibility)
        'neon': {
          'pink': '#ff0080',
          'blue': '#00ffff',
          'green': '#00ff00',
          'yellow': '#ffff00',
          'purple': '#8000ff',
          'orange': '#ff8000',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 3s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF6B35, 0 0 10px #FF6B35, 0 0 15px #FF6B35' },
          '100%': { boxShadow: '0 0 10px #FF6B35, 0 0 20px #FF6B35, 0 0 30px #FF6B35' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'travel-gradient': 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 50%, #1E3A8A 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #0EA5E9 0%, #1E3A8A 50%, #059669 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #FB7185 0%, #F59E0B 50%, #FF6B35 100%)',
        'beach-gradient': 'linear-gradient(135deg, #FEF3C7 0%, #FCD34D 50%, #F59E0B 100%)',
        'forest-gradient': 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)',
        'desert-gradient': 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-light': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        'travel-glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'ocean-glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'sunset-glow': '0 0 20px rgba(251, 113, 133, 0.3)',
        'beach-glow': '0 0 20px rgba(254, 243, 199, 0.3)',
      },
    },
  },
  plugins: [],
} 