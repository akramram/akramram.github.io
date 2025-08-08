<template>
  <div class="p-4 bg-surface text-text border border-outline rounded-md">
    <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
    <p class="text-sm" v-html="project.description"></p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Project {
  title: string;
  description: string;
}

defineOptions({ name: 'ProjectCard' });

const props = defineProps<{ project: Project }>();
</script>
