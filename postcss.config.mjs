const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
        mono: ['var(--font-roboto-mono)', 'monospace'], 
      },
     
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
