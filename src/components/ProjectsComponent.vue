<template>
  <section id="projects" class="animated" @click="handleSectionClick('Portfolio')">
    <h2>Portfolio</h2>
    <p>Berikut adalah proyek-proyek profesional yang telah saya kerjakan selama perjalanan karir saya:</p>
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <strong>{{ project.title }}</strong>
        <p v-html="project.description"></p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ProjectsComponent',
  data() {
    return {
      projects: [
        {
          title: 'Human Resource Information System (Pusintek)',
          description: 'Membangun dan memelihara solusi berbasis web yang dirancang untuk menyederhanakan proses organisasi, serta meningkatkan efisiensi dalam pengelolaan sumber daya manusia.'
        },
        {
          title: 'Project Management & Asset Management (Tomps.id)',
          description: `
            <strong>Project Management:</strong> Membuat solusi manajemen proyek waktu nyata yang meningkatkan perencanaan, pemantauan, dan evaluasi proyek, dengan peningkatan keterlibatan pengguna sebesar 30%.
            <br>
            <strong>Asset Management:</strong> Mengembangkan portal komprehensif untuk manajemen aset tetap, seperti gedung, lahan, dan pembangkit listrik, mengurangi kesalahan pelacakan aset sebesar 20%.
          `
        },
        {
          title: 'Digital Course Platform (Skolla EdTech)',
          description: 'Memimpin desain ulang dan optimalisasi aplikasi untuk memastikan responsivitas di berbagai perangkat. Berhasil mengintegrasikan Zoom Meeting SDK dan Midtrans Payment SDK untuk meningkatkan pengalaman pengguna.'
        },
        {
          title: 'Self-Service Hotel & Watch Together Platform (Frackment ID)',
          description: `
            <strong>Turu Hotel:</strong> Mengembangkan aplikasi pemesanan hotel mandiri menggunakan NuxtJS Framework.
            <br>
            <strong>Noblar:</strong> Merancang platform berbasis web untuk kolaborasi menonton konten secara bersama menggunakan ReactJS Framework.
          `
        },
        {
          title: 'Dashboard Monitoring Platform (Mitra Edu Teknologi)',
          description: 'Migrasi teknologi frontend ke VueJS untuk aplikasi monitoring Rumah Sehat di Depok, Indonesia. Meningkatkan pengalaman pengguna dan efisiensi aplikasi.'
        }
      ]
    };
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
/* Scoped styles for the Projects section */
ul {
  list-style-type: none; /* Assuming no bullets for projects based on original HTML structure */
  padding-left: 0;
}
li {
  margin-bottom: 15px;
}
li strong {
  display: block;
  margin-bottom: 5px;
}
</style>