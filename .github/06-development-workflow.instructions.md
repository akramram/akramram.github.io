# Development Workflow

## Branching
- main: stabil/production
- feature branches: `feat/<scope>-<desc>`, bugfix: `fix/<scope>-<desc>`, chore: `chore/...`

## Conventional Commits
- `feat(ui): add Button variants`
- `fix(contact): prevent double submit`
- `refactor(composables): simplify useFetch`

## Pull Request Checklist
- [ ] Build & typecheck lulus
- [ ] Screenshot/recording (jika UI)
- [ ] A11y dasar ok
- [ ] Tidak menambah dependency tanpa alasan
- [ ] Catatan migrasi (jika API berubah)

## CI Minimal (contoh langkah)
- npm ci
- npm run build
- tsc --noEmit
- npm test (jika testing diaktifkan)