/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '100': '445px',
        '120': '37.5rem', 
        '122': '45rem'

      },
      colors: {
      'primary': '#242424'
      },
      screens: {
        'mobile': '375px',
        // => @media (min-width:375px) {...}
        'tablet': '768px',
        // => @media (min-widt:768px) {...}
        'desketop': '1440px',
        // => @media (min-width: 1440px) {...                  }
      },
      fontFamily: {
        custom: ['Space Grotesk'],
      },
    },
  },
  plugins: [],
};
