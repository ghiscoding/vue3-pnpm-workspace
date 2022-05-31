import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      style: {
        filename: './style.css',
      },
    }),
    Components({
      dirs: ['src/components', '../components/src'],
      extensions: ['vue'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': `${path.resolve(__dirname, '../components/src')}`,
      '@composables': `${path.resolve(__dirname, '../composables/src')}`,
    },
  },
  server: {
    port: 4000,
  },
});
