# Font Guidelines

## Prinsip
- Gunakan variable font jika tersedia, self-host.
- Preload untuk weights yang dipakai, display: swap.

## Implementasi
/* public/fonts/Inter-Variable.woff2 */
@font-face {
  font-family: "InterVariable";
  src: url("/fonts/Inter-Variable.woff2") format("woff2");
  font-weight: 100 900;
  font-display: swap;
}

:root { --font-sans: "InterVariable", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial; }

html { font-family: var(--font-sans); }

## Skala & Line-height
- 12, 14, 16, 18, 20, 24, 30, 36, 48.
- Heading gunakan util semantik (token/utility), bukan style inline.

## Lisensi
- Simpan bukti lisensi di `/docs/licensing/` jika menggunakan font berbayar.