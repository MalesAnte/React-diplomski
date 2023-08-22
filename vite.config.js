import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig, loadEnv } from 'vite';

dotenv.config();

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    define: {
      /*    __MAIN_API_URL__: `"${process.env.VITE_MAIN_API_URL}"`,*/
    },
    plugins: [react()],
    server: {
      host: true,
      port: 3001,
    },
  });
};
