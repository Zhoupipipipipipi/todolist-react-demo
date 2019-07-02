const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      '@': path.join(__dirname, './src')
    }
  }
}