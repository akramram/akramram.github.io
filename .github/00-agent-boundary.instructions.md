# AI Coding Agent Boundary (Vue + Vite)

## Tujuan
- Menjamin output konsisten dengan standar tim & stack yang ada.
- Menghindari perubahan besar/breaking tanpa persetujuan.

## Stack Default
- Vue 3.5+ (Composition API, `<script setup lang="ts">`)
- Vite 6
- TypeScript strict
- Tailwind CSS v4 (+ @tailwindcss/vite)
- class-variance-authority (CVA), clsx, tailwind-merge
- Ikon: lucide-vue-next
- Deploy: gh-pages (build → dist)

## Directory Konvensi
src/
├─ assets/        # non-public assets yg di-bundle
├─ components/    # UI reusable (primitives & ui)
├─ features/      # modul berbasis domain/fitur
├─ composables/   # hooks reuse (useXxx)
├─ lib/           # helper umum (cn, constants, types)
├─ styles/        # tokens.css, tailwind.css, layer
└─ pages/ or router/ (opsional jika pakai vue-router)

## Yang Boleh
- Membuat/ubah komponen SFC, composable, util, test, story.
- Refactor non-breaking.
- Menambah token desain & varian komponen via CVA.

## Yang Tidak Boleh
- Menambah dependency baru tanpa alasan kuat & persetujuan.
- Mengubah strategi build/deploy.
- Mematikan linter/typecheck/test hanya untuk meloloskan build.

## Cara Kerja Saat Prompt
1. Jika requirement ambigu, ajukan ≤3 pertanyaan klarifikasi.
2. Urutan implementasi: desain API props/emit → state → a11y → styling → test.
3. Output setiap perubahan: daftar file + cuplikan kode inti + catatan migrasi (jika ada).

## Aturan Umum
- Gunakan Composition API, hindari Options API.
- Props & emits bertipe jelas (hindari `any`).
- Penamaan file: Komponen `PascalCase.vue`, composable `use-xxx.ts`, util `kebab-case.ts`.
- Ekspor named export untuk TS modules.
- i18n: jangan hardcode teks user-facing (gunakan helper `t()` jika ada).
- A11y: label/role, fokus keyboard, alt text.

## Checklist Output Wajib
- [ ] Build OK: `npm run build`
- [ ] Typecheck OK: `tsc --noEmit` (atau script setara)
- [ ] A11y dasar (label/role/focus/alt)
- [ ] Tidak menambah dependency tanpa persetujuan