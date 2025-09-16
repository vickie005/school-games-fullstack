# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Getting Started
```bash
pnpm create vite@latest frontend --template react-ts
cd frontend
pnpm install
pnpm install tailwindcss @tailwindcss/vite
```

# vite.config.ts add tailwindcss plugin
```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),//<-- ADD THIS
  ],
})
```

# Add this to your css file
```bash
@import "tailwindcss";
``` 