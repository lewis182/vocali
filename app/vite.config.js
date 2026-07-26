import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// NOTE: when hosting on GitHub Pages at https://<user>.github.io/<repo>/
// set base to '/<repo>/'. For a custom domain or user page, use '/'.
const BASE = process.env.VOCALI_BASE || '/vocali/'

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Vocali — Vocal Training',
        short_name: 'Vocali',
        description: 'A personal vocal-training reference and twelve-week programme.',
        theme_color: '#1C6B85',
        background_color: '#E7E0CF',
        display: 'standalone',
        orientation: 'any',
        start_url: BASE,
        scope: BASE,
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        // Owned content (text, diagrams, exercise steps) works offline.
        // YouTube embeds are never cached — they require a connection by design.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        navigateFallback: BASE + 'index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'fonts', expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          }
        ]
      }
    })
  ]
})
