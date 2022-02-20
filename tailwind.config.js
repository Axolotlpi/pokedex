module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '550px',
        md: '768px',
        lg: '1100px',
        xl: '1440px',
      },
      colors: {
        'primary-0': '#eeeeee',
        'primary-1': '#94BBEB',
        'primary-2': '#445D85',
        'primary-3': '#202938',
        'secondary-0': '#941E1E',
        'secondary-1': '#C72828',
        'secondary-2': '#FF3333',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
