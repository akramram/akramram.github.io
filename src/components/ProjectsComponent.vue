<template>
  <section id="projects" class="animated">
    <h2>Portfolio</h2>
    <p>Berikut adalah proyek-proyek profesional yang telah saya kerjakan selama perjalanan karir saya:</p>
    <ul class="list-none p-0 space-y-2">
      <li v-for="project in projects" :key="project.title">
        <button
          type="button"
          class="text-left w-full underline hover:no-underline"
          @click="selectedProject = project"
        >
          {{ project.title }}
        </button>
      </li>
    </ul>
    <ProjectCard v-if="selectedProject" :project="selectedProject" class="mt-4" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import projectsData from '@/data/projects.json';
import ProjectCard from './ProjectCard.vue';

interface Project {
  title: string;
  description: string;
}

defineOptions({ name: 'ProjectsComponent' });

const projects = projectsData as Project[];
const selectedProject = ref<Project | null>(null);
</script>
