# Accessibility & Performance

## A11y Cepat
- Semua kontrol punya label; ikon-only gunakan `aria-label`.
- Fokus jelas; jangan hilangkan outline; gunakan `:focus-visible`.
- Role/aria pada dialog, tab, disclosure; trap focus untuk modal.
- Kontras warna minimal WCAG AA.

## Performance
- Split kode komponen berat: `const Comp = defineAsyncComponent(() => import('./Comp.vue'))`
- Gunakan `loading="lazy"` untuk `<img>`; `decoding="async"`.
- Hindari watchers berat; gunakan computed/memoization secukupnya.
- Minimalkan re-render: bagi komponen besar jadi kecil & gunakan `:key` yang stabil.

## Budget (awal)
- LCP < 2.5s, CLS < 0.1, bundle utama < 200KB gzip (sesuaikan kebutuhan).