const path = require('path');

module.exports = {
  // Các cài đặt khác của Webpack ở đây

  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      http: require.resolve('http-browserify'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },
};
