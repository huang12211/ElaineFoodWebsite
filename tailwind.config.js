/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    container: {
      center: true,
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },




    extend: {

      colors: {
        'paleYellow': '#FFD77D',
        'darkYellow': '#FEC23A',
        'freshGreen': '#CCF4D7',
        'purpleBlue': '#A8CBFF'
      },

      backgroundColors: {
        'freshGreen': '#CCF4D7',
      },

      backgroundImage: {
        'kitchen-counter': "url('https://elainefoodwebsite.ehuang3.repl.co/media/Generic%20Images/FeaturedRecipeBackground.png')",
      },

      width: {
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '44': '11rem',
        '128': '36rem',
        '20': '5rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
      },

      maxWidth: {
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        'ms': '26rem',
      },

      height: {
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '68': '17rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '112': '25rem',
      },

      maxHeight: {
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
      },

      blur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
