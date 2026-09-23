import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base is "/" for a user site (AshwabhB.github.io) or any Vercel/Netlify deploy.
// If you deploy to a project page like AshwabhB.github.io/portfolio, set base to "/portfolio/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
