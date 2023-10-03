import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// index.htmlのルートディレクトリを変更
// 参考
// https://zenn.dev/junseinagao/scraps/a4e6b1413ff26e
// https://zenn.dev/s_takashi/articles/d033401905ccf9
const root = resolve(__dirname, 'src');

// ビルドの出力先をプロジェクトルート直下に変更
const outDir = resolve(__dirname, '');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: './',
  build: {
    outDir,
    assetsDir: 'shared',
    rollupOptions: {
      input: {
        dashboard: resolve(root, 'dashboard', 'index.html'),
        graphics: resolve(root, 'graphics', 'index.html'),
        extension: resolve(root, 'extension', 'index.ts'),
      },
    },
  },
});
