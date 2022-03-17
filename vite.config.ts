import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        // {
        //   libName: 'antd',
        //   style: (name) => `antd/lib/${name}/style/index.less`,
        // },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            '@brand-color': '#ebb105',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://www.xxx.xxx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
