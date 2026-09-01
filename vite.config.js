import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes() {
      return [
        '/',
        '/webapps',
        '/about',
        '/portfolio',
        '/it-hilfe',
        '/pc-builds',
        '/contact',
        '/impressum',
        '/terms',
        '/datenschutz',
        '/blog',
        '/blog/web-app-oder-klassische-website',
        '/blog/excel-chaos-zur-web-app',
        '/blog/schnelle-website-mehr-kunden',
        '/blog/fehler-bei-website-neuentwicklung'
      ]
    }
  }
})