module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['inter'],
    },
    colors: {
      'ravel-primary': '#000000',
      'ravel-green': {
        '500': '#0CC03E',
        '400': '#4BFF72',
      },
      'ravel-gray': {
        '800': '#333333',
        '700': '#5B5B5B',
        '600': '#767676',
        '500': '#7C7C7C',
        '400': '#B5B5B5',
        '300': '#B1B1B1',
        '200': '#CCCCCC',
        '100': '#D9D9D9',
        '50': '#FAFAFA'
      },
      'ravel-red': {
        '500': '#E5111E'
      },
      'white': '#FFFFFF'
    }
  },
  plugins: [],
};