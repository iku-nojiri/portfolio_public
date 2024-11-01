/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      notoSansJP: ['Noto Sans JP', 'sans-serif'],
      robot: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        mainColor: '#4f46e5',
        mainBlack: '#111827',
        mainGray: '#4b5563',
        mainWhite: '#f1f5f9',
        mainOffWhite: '#d8e2ee',
        darkThemaGray: '#232730',
        darkThemaBlack: '#1b1c21',
      },
      transitionDuration: {
        mainTime: '200ms',
        quickTime: '100ms',
      },
      borderColor: {
        offWhite: 'rgba(246, 247, 249, 0.2)',
        lightGray: 'rgba(35, 39, 47, .05)',
      },
      boxShadow: {
        headerLight: '0 16px 32px -16px rgba(0, 0, 0, .1), 0 0 0 1px rgba(0, 0, 0, .1)',
        headerDark: '0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px hsla(0, 0%, 100%, 0.05)',
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },

    },
  },
  plugins: [],
  darkMode: 'class',
};
