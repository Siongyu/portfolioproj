import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone': {'min': '300px', 'max': '599px'},
      'tablet': {'min': '600px', 'max': '1366px'},
      'laptop': '1280px',
      'desktop': '2560px',
    },
    colors: { 
      'ghost_white': { 
        DEFAULT: '#e8e9f3', 
        100: '#21233e', 
        200: '#41467c', 
        300: '#6b71b1', 
        400: '#a9add2', 
        500: '#e8e9f3', 
        600: '#ecedf5', 
        700: '#f1f2f8', 
        800: '#f6f6fa', 
        900: '#fafbfd' 
      }, 
      'silver': { 
        DEFAULT: '#cecece', 
        100: '#292929', 
        200: '#535353', 
        300: '#7c7c7c', 
        400: '#a5a5a5', 
        500: '#cecece', 
        600: '#d8d8d8', 
        700: '#e2e2e2', 
        800: '#ececec', 
        900: '#f5f5f5' 
      }, 
      'french_gray': { 
        DEFAULT: '#a6a6a8', 
        100: '#212121', 
        200: '#424243', 
        300: '#626264', 
        400: '#838386', 
        500: '#a6a6a8', 
        600: '#b7b7b8', 
        700: '#c9c9ca', 
        800: '#dbdbdc', 
        900: '#ededed' 
      }, 
      'outer_space': {
        DEFAULT: '#495159', 
        100: '#0f1012', 
        200: '#1d2124', 
        300: '#2c3136', 
        400: '#3b4148', 
        500: '#495159', 
        600: '#697480', 
        700: '#8d97a1', 
        800: '#b3bac1', 
        900: '#d9dce0'
      }, 
      'eerie_black': { 
        DEFAULT: '#1c2321', 
        100: '#050706', 
        200: '#0b0e0d', 
        300: '#101413', 
        400: '#161b1a', 
        500: '#1c2321', 
        600: '#43544f', 
        700: '#6b867e', 
        800: '#9bafaa', 
        900: '#cdd7d4' 
      } 
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
