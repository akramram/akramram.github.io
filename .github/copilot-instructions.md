# Copilot Instructions for akramram.github.io

## Project Overview
- This is a personal frontend developer portfolio for Akram Rahardi R, built primarily with Vue 3 (see `src/`), using Vite for development/build.
- The site features a vintage Japanese web aesthetic, with minimalist design, simple animations, and interactive section clicks.
- Main entry: `index.html` (loads `src/main.ts` and `App.vue`).

## Key Structure & Components
- All main content is in `src/components/`:
  - `HeaderComponent.vue`, `FooterComponent.vue`, `NavigationComponent.vue`: Layout and navigation.
  - `AboutComponent.vue`, `SkillsComponent.vue`, `ProjectsComponent.vue`: Main content sections.
  - `ProjectsComponent.vue` demonstrates use of `v-html` for rich project descriptions.
- Global styles: `src/assets/main.css`.
- Utility functions: `src/lib/utils.ts` (if needed for cross-component logic).

## Developer Workflows
- **Development:**
  - Use `npm run dev` (or `bun run dev` if using Bun) to start the Vite dev server.
  - Hot reload is enabled for `.vue` and `.ts` files.
- **Build:**
  - Use `npm run build` (or `bun run build`) to generate production assets.
- **No formal test suite** is present; manual browser testing is standard.

## Project-Specific Patterns & Conventions
- **Section click handlers**: Each main section uses a click handler (e.g., `@click="handleSectionClick('Portfolio')"`) for interactivity, but actual alert/logging is commented out for production.
- **Project data**: Project lists are hardcoded in component `data()`, not fetched from an API.
- **Scoped styles**: Each component uses `<style scoped>` for local CSS.
- **No router**: All content is rendered on a single page; navigation is handled via anchor links and component visibility.
- **No state management library**: All state is local to components.

## External Integrations
- No backend/API integration; all data is static.
- Some project descriptions reference integrations (e.g., Zoom SDK, Midtrans SDK), but these are not present in this codebase.

## Examples
- To add a new project: Edit the `projects` array in `ProjectsComponent.vue`.
- To add a new section: Create a new component in `src/components/`, import and use it in `App.vue`.

## References
- See `README.md` for a high-level project description and usage instructions.
- See `vite.config.ts` and `tsconfig*.json` for build and TypeScript settings.

---
If you are unsure about a workflow or pattern, check the relevant `.vue` component or ask for clarification.
