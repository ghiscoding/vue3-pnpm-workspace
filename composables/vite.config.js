import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  server: {
    fs: {
      allow: ['..'],
    },
  },
  plugins: [
    vue({
      style: {
        filename: './style.css',
      },
    }),
    Components({
      dirs: ['src'],
      extensions: ['vue'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'components',
      // fileName: (format) => `my-lib.${format}.js`
      // formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      manualChunks: (id) => {
        if (id.includes('node_modules')) {
          return 'vendor';
        }
        if (id.includes('composables')) {
          return 'composables';
        }
        // return path.parse(id).name;
      },
      external: ['vue'],
      output: {
        minifyInternalExports: false,
        chunkFileNames: '[name].js',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, '/'),
      '@components': path.resolve(dirname, 'src'),
      '@composables': path.resolve(dirname, '../composables/src/'),
    },
  },
});
