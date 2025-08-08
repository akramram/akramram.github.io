<template>
  <section id="skills" class="animated skills-component" @click="handleSectionClick('Skill')">
    <h2>Skill</h2>
    <ul class="grid grid-cols-4 gap-2">
      <li v-for="skill in skills" :key="skill.name">
        <a 
          :href="skill.url" 
          target="_blank" 
          class="retro-card inline-block w-full text-black bg-white border-2 border-black px-4 py-3 font-mono font-bold text-sm uppercase tracking-wide no-underline"
          style="box-shadow: 3px 3px 0px #000;"
        >
          {{ skill.name }}
        </a>
      </li>
    </ul>

    <div class="text-center border-t-2 border-black pt-3 mt-4">
      <div class="text-xs italic">And many more!</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsComponent',
  data() {
    return {
      skills: [
        { name: 'Vue.js', url: 'https://vuejs.org' },
        { name: 'Nuxt.js', url: 'https://nuxt.com' },
        { name: 'React.js', url: 'https://react.dev' },
        { name: 'Next.js', url: 'https://nextjs.org' },
        { name: 'AngularJS', url: 'https://angularjs.org' },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        { name: 'Redux', url: 'https://redux.js.org/' },
        { name: 'Shadcn/UI', url: 'https://ui.shadcn.com/' },
        { name: 'Stripe Payment SDK', url: 'https://stripe.com/docs/payments' },
        { name: 'Sumsub SDK', url: 'https://sumsub.com/' },
        { name: 'Midtrans Payment SDK', url: 'https://docs.midtrans.com/' },
        { name: 'Zoom Meeting SDK', url: 'https://marketplace.zoom.us/docs/sdk/native-sdks/web/' },
        { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
        { name: 'Chart.js', url: 'https://www.chartjs.org/' }
      ]
    }
  },
  methods: {
    handleSectionClick(sectionName) {
      // console.log(`You clicked on the ${sectionName} section.`);
      // alert(`You clicked on the ${sectionName} section.`);
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
  display: block;
  text-decoration: none;
}

.retro-card:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #000 !important;
  text-decoration: none;
  color: #000;
}

.retro-card:active {
  transform: translate(1px, 1px);
  box-shadow: 2px 2px 0px #000 !important;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0;
}
</style>