# Testing

## Piramida
- Unit (Vitest) > Component (Vue Testing Library) > E2E (Playwright).

## Rekomendasi Paket
- vitest, @vitejs/plugin-vue (sudah ada), @vue/test-utils, @testing-library/vue, jsdom.

## Setup Vitest
/// vitest.config.ts
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [vue()],
  test: { environment: "jsdom", globals: true }
});

## Contoh Test Komponen
import { render, screen, fireEvent } from "@testing-library/vue";
import Button from "@/components/ui/Button.vue";
test("renders and clicks", async () => {
  const onClick = vi.fn();
  render(Button, { props: { onClick } , slots: { default: "Save" }});
  const btn = screen.getByRole("button", { name: /save/i });
  await fireEvent.click(btn);
  expect(onClick).toHaveBeenCalled();
});