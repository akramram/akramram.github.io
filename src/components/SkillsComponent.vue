<template>
  <section id="skills" class="animated" @click="handleSectionClick('Skill')">
    <h2>Skill</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" style="text-decoration:none;color:black">Vue.js</a></li>
      <li><a href="https://react.dev" target="_blank" style="text-decoration:none;color:black">React.js</a></li>
      <li><a href="https://angularjs.org" target="_blank" style="text-decoration:none;color:black">AngularJS</a></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SkillsComponent',
  methods: {
    handleSectionClick(sectionName) {
      // console.log(`You clicked on the ${sectionName} section.`);
      // alert(`You clicked on the ${sectionName} section.`);
    }
  }
}
</script>

<style scoped>
/* Scoped styles for the Skills section */
ul {
  list-style-type: disc; /* Or your preferred style */
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
}
</style>