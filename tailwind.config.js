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

    width: {
      '44': '11rem',
      '128': '36rem',
    },

     

    extend: {
      colors: {
        'paleYellow': '#FFD77D',
        'darkYellow': '#FEC23A',
      },
      backgroundImage: {
        'kitchen-counter': "url('https://elainefoodwebsite.ehuang3.repl.co/media/Generic%20Images/FeaturedRecipeBackground.png')",
      },
      maxWidth: {
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
    },
  },
  plugins: [],
}
