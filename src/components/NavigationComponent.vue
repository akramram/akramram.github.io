<template>
  <nav class="animated navigation-component flex flex-col md:flex-row gap-2 md:gap-0">
    <a href="#about" @click="smoothScroll('about')" class="block md:inline-block text-center py-2 px-3 md:py-1 md:px-2 min-h-[44px] md:min-h-0 flex items-center justify-center">Tentang Saya</a>
    <a href="#skills" @click="smoothScroll('skills')" class="block md:inline-block text-center py-2 px-3 md:py-1 md:px-2 min-h-[44px] md:min-h-0 flex items-center justify-center">Keahlian</a>
    <a href="#projects" @click="smoothScroll('projects')" class="block md:inline-block text-center py-2 px-3 md:py-1 md:px-2 min-h-[44px] md:min-h-0 flex items-center justify-center">Proyek</a>
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