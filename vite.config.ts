import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ['src'] })],
    base: '',
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: '@saticoy/ui',
            formats: ['es'],
            fileName: 'main',
        },
        rollupOptions: {
            external: [
                '@ant-design/icons',
                '@chakra-ui/react',
                '@emotion/react',
                '@emotion/styled',
                '@saticoy/core',
                'framer-motion',
                'i18next',
                'i18next-browser-languagedetector',
                'i18next-http-backend',
                'react',
                'react-dom',
                'react-helmet',
                'react-i18next',
                'react-icons',
            ],
        },
    },
});
