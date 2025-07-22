/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      fontSize:{
        sm:"var(--base)",
        "xsm":"var(--1x25base)",
        "smx":"var(--1x5base)",
        "smx2":"var(--1x75base)",
        md:"var(--2xbase)",
        "mdx":"var(--2x5base)",
        lg:"var(--3xbase)",
        xl:"var(--4xbase)"
      },
      padding:{
        xs:"var(--05xbase)",
        sm:"var(--base)",
        "smx":"var(--1x5base)",
        "mds":"var(--1x75base)",
        md:"var(--2xbase)",
        "mdx":"var(--2x5base)",
        lg:"var(--3xbase)",
        xl:"var(--4xbase)",
        "xlg":"var(--5xbase)",
        "6xl":"var(--6xbase)",
        "7xl":"var(--7xbase)",
        "8xl":"var(--8xbase)",
        "10xl":"var(--10xbase)",
      },
      colors:{
          "stoneGray":"#f5f5f4",
          "lightGray":"#9ca3af",
          "midGray":"#4b5563",
          "primary":"#5f6fff",
          "primaryBackground":"#eff6ff",
          "bluish":"#bfdbfe",
          "darkGray":"#111827",
      },
      gap:{
        xs:"var(--05xbase)",
        sm:"var(--base)",
        "smx":"var(--1x5base)",
        md:"var(--2xbase)",
        "mxd":"var(--2x5base)",
        lg:"var(--3xbase)",
        xl:"var(--4xbase)"
      },
      
    },
  },
  plugins: [
    plugin(function({addBase}){
      addBase({
      ':root': {
        '--base': 'calc(8 * 1px)',
        '--0x25base': 'calc(var(--base) * 0.25)',
        '--0x5base': 'calc(var(--base) * 0.5)',
        '--0x75base': 'calc(var(--base) * 0.75)',
        '--1xbase': 'calc(var(--base) * 1)',
        '--1x25base': 'calc(var(--base) * 1.25)',
        '--1x5base': 'calc(var(--base) * 1.5)',
        '--1x75base': 'calc(var(--base) * 1.75)',
        '--2xbase': 'calc(var(--base) * 2)',
        '--2x25base': 'calc(var(--base) * 2.25)',
        '--2x5base': 'calc(var(--base) * 2.5)',
        '--2x75base': 'calc(var(--base) * 2.75)',
        '--3xbase': 'calc(var(--base) * 3)',
        '--3x25base': 'calc(var(--base) * 3.25)',
        '--3x5base': 'calc(var(--base) * 3.5)',
        '--3x75base': 'calc(var(--base) * 3.75)',
        '--4xbase': 'calc(var(--base) * 4)',
        '--4x5base': 'calc(var(--base) * 4.5)',
        '--5xbase': 'calc(var(--base) * 5)',
        '--5x5base': 'calc(var(--base) * 5.5)',
        '--6xbase': 'calc(var(--base) * 6)',
        '--6x5base': 'calc(var(--base) * 6.5)',
        '--7xbase': 'calc(var(--base) * 7)',
        '--7x5base': 'calc(var(--base) * 7.5)',
        '--8xbase': 'calc(var(--base) * 8)',
        '--8x5base': 'calc(var(--base) * 8.5)',
        '--9xbase': 'calc(var(--base) * 9)',
        '--9x5base': 'calc(var(--base) * 9.5)',
        '--10xbase': 'calc(var(--base) * 10)',
        },
      });
      
    })
  ],
}

