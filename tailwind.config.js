module.exports = {
  purge: [
    './site/templates/*.php',
    './site/snippets/*.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '560px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['Roboto', 'Arial-ui', 'sans-serif'],
     }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
