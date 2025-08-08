module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        glass: {
          light: 'rgba(255,255,255,0.6)',
          dark: 'rgba(17,25,40,0.6)'
        }
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.25)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
