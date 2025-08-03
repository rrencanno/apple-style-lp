/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // 'tailwindcss' から変更
    autoprefixer: {},
  },
};

export default config;
