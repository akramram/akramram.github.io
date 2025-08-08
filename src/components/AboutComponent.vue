<template>
  <section id="about" class="animated about-component" @click="handleSectionClick('Tentang Saya')">
    <h2>Tentang Saya</h2>
    <div class="retro-card bg-white border-2 border-black p-4 font-mono text-sm leading-relaxed" style="box-shadow: 3px 3px 0px #000;">
      <p>Frontend Developer dengan pengalaman lebih dari 4 tahun dalam JavaScript, TypeScript, VueJS, NuxtJS, AngularJS, ReactJS, dan NextJS. Terampil dalam membangun
aplikasi web berkinerja tinggi, mengoptimalkan pengalaman pengguna, dan berkolaborasi dengan tim untuk memberikan solusi yang skalabel
tepat waktu dengan praktik pengembangan web modern.
</p>
    </div>
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
.retro-card {
  font-family: "Courier New", monospace;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  transition: all 0.2s;
}

.retro-card:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000 !important;
}

.retro-card:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0px #000 !important;
}
</style>