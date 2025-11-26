// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1F2937',
        'neutral-dark': '#374151',
        'neutral-light': '#9CA3AF',
        light: '#F9FAFB',
        'accent-gold': '#D97706',
        'danger-red': '#B91C1C',
        'primary-blue': '#3B82F6',
      },
      fontSize: {
        xs: '0.75rem', 
        sm: '0.875rem', 
        base: '1rem',   
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
