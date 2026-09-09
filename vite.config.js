import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Swissa-Associates/' : '/'),
    plugins: [react()],
    server: {
        port: 3000,
        open: false,
    },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ['three'],
                    reactVendor: ['react', 'react-dom'],
                    lucide: ['lucide-react'],
                },
            },
        },
    },
});
