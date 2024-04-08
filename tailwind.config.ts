import type { Config } from "tailwindcss";
import SK81 from './public/images/sk8-1.webp'
const config: Config = {
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
          // 'sk81': `url('${SK81}')`,
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
