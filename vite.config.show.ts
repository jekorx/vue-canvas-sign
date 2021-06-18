import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-canvas-sign',
  plugins: [
    vue()
  ],
  build: {
    target: 'es2015'
  }
})
