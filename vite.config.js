import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Inspector from 'vite-plugin-vue-inspector'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Activamos DevTools/Inspector solo en desarrollo para no afectar el build
  plugins: [
    vue(),
    command === 'serve' && VueDevTools(),
    command === 'serve' && Inspector()
  ].filter(Boolean)
}))
