import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { qrcode } from 'vite-plugin-qrcode';

// https://vite.dev/config/
export default defineConfig({
  base: '/nutricao-calculator-react/', // 🔹 nome exato do repositório
  plugins: [react(), qrcode()],
});
