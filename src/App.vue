<template>
  <div id="app">
    <HeaderComponent />
    <NavigationComponent />
    <main>
      <AboutComponent />
      <SkillsComponent />
      <ProjectsComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  },
  mounted() {
    // Equivalent to document.addEventListener("DOMContentLoaded", ...)
    // The click listeners are now handled within each component using @click
    // If you had global DOM manipulation that needed to run after the app is mounted,
    // it could go here, but it's better to handle it within components if possible.
  }
}
</script>