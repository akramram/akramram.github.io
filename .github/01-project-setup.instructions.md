# Project Setup

## Versi & Tools
- Node 20.x (gunakan `.nvmrc`)
- Package manager: npm (default repo ini)
- Path alias: `@/* -> ./src/*`

## Vite Config (contoh)
/// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  },
  server: { port: 5173 },
  preview: { port: 4173 }
});

## TypeScript Strict (tsconfig)
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "strict": true,
    "skipLibCheck": true,
    "noUncheckedIndexedAccess": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] },
    "types": ["vite/client", "node"]
  },
  "include": ["src"]
}

## Styles Entry
/* src/styles/tailwind.css */
@import "tailwindcss";
@layer base, components, utilities;
/* import tokens di sini */
@import "./tokens.css";

## Main Entry
// src/main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/tailwind.css";
createApp(App).mount("#app");

## Import Icon (lucide-vue-next) contoh
<!-- src/components/ui/Icon.vue -->
<script setup lang="ts">
import { AlertCircle } from "lucide-vue-next";
</script>
<template><AlertCircle class="w-5 h-5" /></template>

## ENV
- Gunakan `import.meta.env.VITE_*`.
- Jangan akses `process.env` langsung.

## Scripts (package.json)
- dev: `vite`
- build: `vite build`
- preview: `vite preview`
- deploy: `gh-pages -d dist`