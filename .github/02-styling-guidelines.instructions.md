# Styling Guidelines (Tailwind v4)

## Prinsip
- Utility-first + semantic tokens via CSS variables.
- Variants komponen dengan CVA; gabung kelas dengan `cn()` (clsx + tailwind-merge).
- Minimal inline style; gunakan class util atau CSS custom properties.

## Helper Kelas
// src/lib/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

## CVA Example
// src/components/ui/button-variants.ts
import { cva, type VariantProps } from "class-variance-authority";
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 ring-offset-2 disabled:opacity-50",
  {
    variants: {
      intent: { primary: "bg-primary text-on-primary", secondary: "bg-surface text-primary border border-outline" },
      size: { sm: "h-8 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-6 text-lg" }
    },
    defaultVariants: { intent: "primary", size: "md" }
  }
);
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

## Button.vue contoh
<!-- src/components/ui/Button.vue -->
<script setup lang="ts">
import { computed } from "vue";
import type { HTMLAttributes } from "vue";
import { buttonVariants, type ButtonVariantProps } from "./button-variants";
import { cn } from "@/lib/cn";

interface Props extends HTMLAttributes, ButtonVariantProps {
  as?: "button" | "a";
}
const props = withDefaults(defineProps<Props>(), { intent: "primary", size: "md", as: "button" });
defineEmits<{ (e: "click", ev: MouseEvent): void }>();
const classes = computed(() => cn(buttonVariants({ intent: props.intent, size: props.size }), props.class));
</script>

<template>
  <component :is="props.as" :class="classes" v-bind="$attrs"><slot /></component>
</template>