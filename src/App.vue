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

<style>
/* Global styles can go here if not in a separate main.css */
/* For example, the body, animations from the original <style> tag */
body { /* This will apply globally */
    background-color: #f0e1c2;
    color: #333;
    font-family: "MS Mincho", serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

/* Global styles for elements as in the original embedded style */
header { /* Styles for <header> element, used by HeaderComponent */
    text-align: center;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

nav { /* Styles for <nav> element, used by NavigationComponent */
    text-align: center;
    margin-bottom: 20px;
}

nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;
}

nav a:hover {
    color: #d2691e;
}

section { /* Styles for <section> elements, used by About, Skills, Projects */
    background-color: #ffffff;
    border: 2px solid #333;
    padding: 15px;
    margin-bottom: 20px;
    transition: transform 0.3s;
}

section:hover {
    transform: scale(1.02);
}

section h2 {
    font-size: 1.8em;
    font-weight: normal;
    border-bottom: 1px dashed #333;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

footer { /* Styles for <footer> element, used by FooterComponent */
    text-align: center;
    border-top: 2px solid #333;
    padding-top: 10px;
    margin-top: 20px;
    font-size: 0.9em;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.animated {
    animation: fadeIn 2s ease-in-out;
}

/* Add any other global styles if needed */
#app {
  /* Styles for the root Vue app container if necessary */
}
main {
  /* If you want to wrap sections in a main tag like in semantic HTML */
}
</style>