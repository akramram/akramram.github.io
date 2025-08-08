<template>
  <nav class="animated navigation-component">
    <a href="#about" @click="smoothScroll('about')">Tentang Saya</a>
    <a href="#skills" @click="smoothScroll('skills')">Keahlian</a>
    <a href="#projects" @click="smoothScroll('projects')">Proyek</a>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
  methods: {
    smoothScroll(targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }
}
</script>