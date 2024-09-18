import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 test: {
 globals: true,
 environment: 'jsdom',
 setupFiles: ['./test/setupTests.js'], //agrego esta linea porque no tengo acceso a las APIs del navegador, JSDOM puede que no lo tenga disponible 
 }
})