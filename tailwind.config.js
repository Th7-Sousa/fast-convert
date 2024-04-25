/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {

        mainPurple: {
          100: '#001542',
        },
        mainGray: {
          100: '#085454'
        },
        secondaryGray: {
          100: '#7A7A7A'
        },
        mainWhite: {
          100: '#ffffff'
        },
        mainYellow: {
          100: '#FFB30D'
        },

        systemRed: {
          100: '#E35141'
        },
        systemBlue: {
          100: '#2962FF'
        },
        systemgreen: {
          100: '#4CAF50'
        },
        systemOrange: {
          100: '#FF9800'
        },

        Gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }

      },

    },
  },
  plugins: [],
};
