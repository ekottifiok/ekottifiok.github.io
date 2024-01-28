import {resolve} from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(root, "components"),
      "@public": resolve(root, "public"),
    }
  },
  plugins: [react()],
})
