# Component Organization (Vue)

## Prinsip
- Pisahkan `components/ui` (presentational/primitives) dengan `features/<domain>` (logic + domain).
- Satu komponen = satu folder jika file pendukung banyak (test, story, types).
- Collocate composable/logic dekat dengan penggunaan dalam fitur.

## Struktur
src/
├─ components/
│  ├─ primitives/  # Button, Input, Icon, Dialog
│  └─ ui/          # Card, Table, EmptyState
├─ features/
│  └─ contact/
│     ├─ components/
│     ├─ composables/
│     └─ api/
├─ composables/     # generic hooks (useTheme, useMediaQuery)
└─ lib/

## Aturan SFC
- Gunakan `<script setup lang="ts">`.
- Tetapkan nama komponen untuk DevTools: `defineOptions({ name: "Button" })`.
- Props jelas, default via `withDefaults`.
- Emit event bertipe: `defineEmits<{ (e:"open-change", v:boolean): void }>()`.
- Hindari multi-source of truth; gunakan `v-model` dengan `modelValue` + `update:modelValue`.

## Example Input.vue (dengan v-model)
<!-- src/components/primitives/Input.vue -->
<script setup lang="ts">
defineOptions({ name: "Input" });
const props = withDefaults(defineProps<{ modelValue?: string; invalid?: boolean }>(), { modelValue: "", invalid: false });
const emit = defineEmits<{ (e:"update:modelValue", v:string): void }>();
</script>
<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="['h-10 px-3 rounded-md bg-surface text-text border', props.invalid ? 'border-red-500' : 'border-outline']"
  />
</template>