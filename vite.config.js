
import { defineConfig } from 'vite'
import path from 'path'
/* const path = require('path') */

export default defineConfig({

  base:'/landing-page-vite-bootsrap/',
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})