# Data Fetching & State

## Prinsip
- Gunakan `fetch` native + AbortController.
- Global state minimal; gunakan composables lokal.
- Pinia hanya jika kompleks (butuh persetujuan sebelum menambah dependency).

## useFetch Composable
// src/composables/use-fetch.ts
import { ref, onScopeDispose } from "vue";
export function useFetch<T>(url: string, init?: RequestInit) {
  const data = ref<T | null>(null);
  const error = ref<unknown>(null);
  const loading = ref(false);
  const controller = new AbortController();
  onScopeDispose(() => controller.abort());

  const run = async () => {
    loading.value = true;
    try {
      const res = await fetch(url, { ...init, signal: controller.signal });
      if (!res.ok) throw new Error(res.statusText);
      data.value = (await res.json()) as T;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };
  return { data, error, loading, run };
}

## UI States
- Loading: skeleton/spinner.
- Error: pesan ramah + tombol retry.
- Empty: empty state terdefinisi (reusable di `components/ui/EmptyState.vue`).