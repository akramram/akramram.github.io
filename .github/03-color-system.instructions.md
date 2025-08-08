# Color System

## Token via CSS Variables
/* src/styles/tokens.css */
:root {
  --bg: 16 16 18;
  --surface: 24 24 28;
  --primary: 59 130 246;
  --on-primary: 255 255 255;
  --text: 229 231 235;
  --outline: 48 50 58;
}
.dark {
  --bg: 11 11 12;
  --surface: 18 19 22;
  --primary: 96 165 250;
  --on-primary: 11 18 32;
  --text: 229 231 235;
  --outline: 42 44 51;
}

:root {
  color-scheme: light dark;
}

## Pemakaian di Tailwind v4
/* Tailwind v4 membaca CSS vars langsung */
.bg-primary { background-color: rgb(var(--primary) / <alpha-value>); }
/* Rekomendasi: gunakan util kelas seperti `bg-primary/90`, `text-text`, dsb.
   Atau buat utilities kustom via @layer utilities jika diperlukan. */