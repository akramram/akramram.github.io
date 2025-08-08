# Image Asset Management

## Struktur Direktori
public/img/
├─ icons/     # SVG icons & small graphics
├─ brands/    # Logo & brand assets
├─ commons/   # Shared/reusable images
├─ others/    # Halaman spesifik/unik
└─ dummies/   # Placeholder sementara

## Penamaan
- Icons: `ic_{deskripsi}.svg` → `ic_search.svg`, `ic_arrow_right.svg`
- Logo: `logo_{brand}.svg` → `logo_github.svg`
- Umum: `topic-context-{size}.{ext}` → `dashboard-empty-2x.webp`
- kebab-case, Inggris, tanpa spasi.

## Format & Optimasi
- SVG untuk ikon; WebP/AVIF untuk foto/ilustrasi; PNG bila perlu transparansi tajam.
- Kompres: SVGO (SVG) & imagemin/sharp (raster) sebelum commit.
- Sediakan 1x/2x untuk raster. 

## Implementasi di Vue
<picture>
  <source srcset="/img/commons/hero.avif" type="image/avif" />
  <source srcset="/img/commons/hero.webp" type="image/webp" />
  <img src="/img/commons/hero.png" width="1200" height="600" alt="Hero illustration" loading="lazy" />
</picture>

## Best Practices
- Alt wajib, deskriptif.
- Jangan commit file master besar dari desainer (pakai storage terpisah).