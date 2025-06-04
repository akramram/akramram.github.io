<template>
  <section id="about" class="animated" @click="handleSectionClick('Tentang Saya')">
    <h2>Tentang Saya</h2>
    <p>Saya Akram Rahardi R, seorang pengembang frontend asal Indonesia. Saya memiliki keahlian dalam Vue.js, React.js, dan AngularJS. Portofolio ini dibuat untuk memperkenalkan keahlian dan proyek-proyek yang telah saya kerjakan.</p>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent',
  methods: {
    handleSectionClick(sectionName) {
      // console.log(`You clicked on the ${sectionName} section.`);
      // alert(`You clicked on the ${sectionName} section.`); // Uncomment to restore original alert
    }
  }
}
</script>

<style scoped>
/* Scoped styles for the About section */
</style>