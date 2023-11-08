import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/landing_nothing/',
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
