import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths({loose: true}), svgrPlugin()],
  resolve: {
    alias: {
      '@': '/src',
      hooks: '/src/hooks',
      api: '/src/api',
      constants: '/src/constants',
      icons: '/src/icons',
      components: '/src/components',
      assets: '/src/assets',
      theme: '/src/theme',
      generated: '/src/generated',
      utils: '/src/utils',
    },
  },
})
