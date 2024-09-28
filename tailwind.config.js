/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        "beige": "#CCD4BD",
        "darkblue": "#264c62",
        "darkblue2": "#2c495d"
      }
    },
  },
  plugins: [],
}

