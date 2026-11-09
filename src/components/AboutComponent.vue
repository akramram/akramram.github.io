<template>
  <section id="about" class="animated about-component" @click="handleSectionClick('Tentang Saya')">
    <h2 class="text-xl md:text-2xl font-bold uppercase tracking-wide md:tracking-wider break-words">Tentang Saya</h2>
    <div class="retro-card bg-white border-2 border-black p-3 md:p-4 font-mono text-sm md:text-base leading-relaxed break-words" style="box-shadow: 3px 3px 0px #000;">
      <p class="text-justify md:text-left mb-3 md:mb-4">
        Frontend &amp; Fullstack Engineer dengan pengalaman lebih dari 6 tahun (sejak 2019) dalam merancang, membangun, dan merilis sistem skala kementerian (public sector), enterprise BUMN (Telkom Indonesia), serta produk digital internasional. Berpengalaman mendalam dalam arsitektur modern: Micro-Frontend (MFE), Angular (v13–v21), Vue 3 / Vite, React / Next.js, dan TypeScript, dengan keahlian integrasi SSO OIDC, REST API gateway v2, form schema dinamis, automated testing (1.000+ tests), serta manajemen state reaktif (Signals &amp; RxJS).
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent',
  methods: {
    handleSectionClick(sectionName) {
      // console.log(`You clicked on ${sectionName} section.`);
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
