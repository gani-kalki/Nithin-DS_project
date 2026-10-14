import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react';
export default defineConfig({ base: '/Nithin-DS_project/', plugins: [react()], build: { reportCompressedSize: false } });
