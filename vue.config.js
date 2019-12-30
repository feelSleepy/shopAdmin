const port = 8080;

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target:"http://localhost:2000",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ''
        }
      },
    }
  }
}