// craco.config.js
module.exports = {
  style: {
    postcss: { plugins: [require('tailwindcss'), require('autoprefixer')] },
  },
  //fix frame-motion .mjs error
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
}
