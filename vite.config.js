import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// ¡Atención!
/**
 * El uso de `tailwindcss` como plugin en Vite así:
 * import tailwindcss from '@tailwindcss/vite'
 * plugins: [react(), tailwindcss()]
 * 
 * provocará un error como:
 * "Cannot find module '@tailwindcss/vite'" o
 * "Cannot call tailwindcss as a plugin"
 * 
 * TailwindCSS NO se usa así en Vite. Debe instalarse y configurarse usando un archivo tailwind.config.js
 * y agregando la directiva `@tailwind` dentro de los CSS, pero NO importándolo como un plugin en vite.config.js.
 * 
 * Solución: Elimina la línea de importación y la referencia en plugins.
 */

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
  

