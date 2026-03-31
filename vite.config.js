import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        login: './login.html',
        books: './books.html',
        dashboard: './dashboard.html',
        profile: './profile.html',
        upload: './upload.html',
        search: './search.html',
        'book-details': './book-details.html',
        'admin-panel': './admin-panel.html',
        contact: './contact.html',
        terms: './terms.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
