<template>
  <section id="projects" class="animated projects-component">
    <h2>Portfolio</h2>
    <p>Berikut adalah proyek-proyek profesional yang telah saya kerjakan selama perjalanan karir saya:</p>

    <!-- Timeline Container -->
    <div class="timeline-container">
      <div v-for="(project, index) in projects" :key="project.title" class="timeline-item"
        @click="selectedProject = project">
        <!-- Timeline Line -->
        <div class="timeline-line"></div>

        <!-- Timeline Dot -->
        <div class="timeline-dot"></div>

        <!-- Timeline Content -->
        <div class="timeline-content">
          <div class="timeline-period">{{ project.description }}</div>
          <div class="timeline-title">{{ project.title }}</div>
        </div>
      </div>
    </div>

    <teleport to="body">
      <ProjectCard v-if="selectedProject" v-model="modalOpen" :project="selectedProject"
        :items="getProjectItems(selectedProject.title)" @update:modelValue="onModalUpdate" />
    </teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ProjectCard from './ProjectCard.vue';

interface Project {
  title: string;
  description: string;
}

interface ProjectItem {
  title: string;
  items: ReceiptItem[];
}

interface ReceiptItem {
  text: string;
  type: 'header' | 'item' | 'description';
}

defineOptions({ name: 'ProjectsComponent' });

const projects: Project[] = [
  {
    "title": "Tomps by Telkom",
    "description": "Jul 2022 - Sekarang"
  },
  {
    "title": "Pusat Sistem Informasi dan Teknologi Keuangan Kementerian Keuangan",
    "description": "Apr 2024 - Des 2024"
  },
  {
    "title": "Habilis",
    "description": "Mar 2024 - Des 2024"
  },
  {
    "title": "Skolla EdTech",
    "description": "Sep 2020 - Jul 2022"
  },
  {
    "title": "PT Digital Biru Indonesia / Frackment.id",
    "description": "Okt 2019 - Sep 2020"
  },
  {
    "title": "Mitra Edu Teknologi",
    "description": "Agu 2019 - Sep 2020"
  }
];

const items: ProjectItem[] = [
  {
    title: "Tomps by Telkom",
    items: [
      { text: "Mengembangkan dan memelihara aplikasi web, memastikan performa optimal dan pengalaman pengguna yang baik.", type: "description" },
      { text: "Berkolaborasi dengan tim lintas fungsi untuk merencanakan, mengeksekusi, dan menyelesaikan proyek tepat waktu dan sesuai lingkup.", type: "description" },
      { text: "Proyek utama:", type: "header" },
      { text: "Tomps Project Management: Membuat solusi manajemen proyek waktu nyata yang meningkatkan perencanaan, pemantauan, dan evaluasi proyek. Meningkatkan keterlibatan pengguna sebesar 30%.", type: "item" },
      { text: "Tomps Asset Management: Mengembangkan portal komprehensif untuk manajemen aset tetap seperti gedung, lahan, dan pembangkit listrik. Mengurangi kesalahan pelacakan aset sebesar 20%.", type: "item" }
    ]
  },
  {
    title: "Pusat Sistem Informasi dan Teknologi Keuangan Kementerian Keuangan",
    items: [
      { text: "Mengembangkan Human Resource Information System (HRIS) menggunakan AngularJS dan Tailwind. Sistem ini mengelola data karyawan dan proses HR secara efisien, dengan fokus pada desain ramah pengguna, performa tinggi, dan skalabilitas.", type: "item" },
      { text: "Mengembangkan dan memelihara solusi web untuk mengoptimalkan prosedur organisasi.", type: "item" },
      { text: "Bekerja sama dalam tim untuk membuat dan mengeksekusi codebase yang scalable dan efektif.", type: "item" },
      { text: "Meningkatkan pengalaman pengguna dengan menerapkan teknik dan standar pengembangan web modern.", type: "item" }
    ]
  },
  {
    title: "Habilis",
    items: [
      { text: "Mengembangkan aplikasi menggunakan NextJS, Redux, Shadcn/UI, Tailwind, mengimplementasikan notifikasi real-time, dan mengintegrasikan Sumsub SDK, dan Stripe Payment SDK, termasuk:", type: "description" },
      { text: "Home Investment Platform: Platform investasi properti yang scalable dengan pengalaman pengguna mulus dan desain intuitif, memungkinkan update data real-time untuk keputusan investasi yang lebih baik.", type: "item" },
      { text: "Branded Goods Rental Platform: Platform sewa barang bermerek yang ramah pengguna dengan integrasi pembayaran aman dan manajemen inventaris efisien.", type: "item" },
      { text: "Employee Profile Data Management System: Sistem internal untuk manajemen dan update data karyawan, terintegrasi dengan database perusahaan.", type: "item" },
      { text: "Music Sales Platform: Platform e-commerce penjualan musik dengan performa tinggi dan manajemen konten multimedia.", type: "item" },
      { text: "Content Management System (CMS): CMS untuk mempercepat update konten lintas platform, mudah diintegrasikan dengan aplikasi yang sudah ada.", type: "item" }
    ]
  },
  {
    title: "Skolla EdTech",
    items: [
      { text: "Memimpin redesign aplikasi, meningkatkan responsivitas dan efisiensi.", type: "description" },
      { text: "Mengembangkan komponen reusable, menyelesaikan isu zona waktu, mengimplementasikan notifikasi real-time, dan mengintegrasikan Zoom Meeting SDK serta Midtrans Payment SDK.", type: "description" },
      { text: "Proyek:", type: "header" },
      { text: "Skolla Student: Platform pembelajaran digital dengan latihan soal, video, dan kelas live.", type: "item" },
      { text: "Skolla Admin: CMS untuk bank soal, tryout, dan kelas live.", type: "item" },
      { text: "Skolla Landing Page: Web profil perusahaan untuk menampilkan layanan Skolla EdTech, dioptimalkan untuk performa dan aksesibilitas.", type: "item" }
    ]
  },
  {
    title: "PT Digital Biru Indonesia / Frackment.id",
    items: [
      { text: "Membangun dan memelihara aplikasi web responsif dan ramah pengguna menggunakan NuxtJS, dengan fokus pada performa tinggi dan pengalaman pengguna yang mulus.", type: "description" },
      { text: "Proyek:", type: "header" },
      { text: "Self Service Hotel Booking: Aplikasi pemesanan hotel mandiri berbasis web, memudahkan pengguna melakukan reservasi melalui antarmuka intuitif.", type: "item" },
      { text: "Noblar: Platform kolaborasi menonton konten berbasis web, memungkinkan pengguna menonton bersama secara real-time dengan interaksi yang lancar.", type: "item" }
    ]
  },
  {
    title: "Mitra Edu Teknologi",
    items: [
      { text: "Memimpin migrasi ke VueJS, mengembangkan dan memelihara aplikasi web termasuk Dashboard SIPPKLING, serta bekerja sama dengan tim lintas fungsi untuk memastikan pengalaman pengguna yang mulus dan performa tinggi di seluruh platform.", type: "description" },
      { text: "Mengelola platform monitoring Rumah Sehat di Depok.", type: "description" },
      { text: "Visualisasi data dalam bentuk chart untuk dashboard analitik, meningkatkan pengambilan keputusan dengan insight yang jelas.", type: "description" }
    ]
  }
];

const selectedProject = ref<Project | null>(null);
const modalOpen = ref(false);

function getProjectItems(projectTitle: string): ReceiptItem[] {
  const projectItem = items.find(item => item.title === projectTitle);
  return projectItem ? projectItem.items : [];
}

function onModalUpdate(val: boolean) {
  modalOpen.value = val;
  if (!val) selectedProject.value = null;
}

watch(selectedProject, (val) => {
  if (val) modalOpen.value = true;
});
</script>
