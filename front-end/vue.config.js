const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8000'
  }
})
//config proxy เพราะ frontend&backend are run the same machine
