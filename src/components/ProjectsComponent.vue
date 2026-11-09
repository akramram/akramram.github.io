<template>
  <section id="projects" class="animated projects-component">
    <h2 class="text-xl md:text-2xl font-bold uppercase tracking-wide md:tracking-wider break-words">Portfolio</h2>
    <p class="text-sm md:text-base mb-4 md:mb-6 break-words">Berikut adalah proyek-proyek profesional yang telah saya kerjakan selama perjalanan karir saya:</p>

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
    title: "Pusat Sistem Informasi dan Teknologi Keuangan (Puspensi), Kemenkeu RI",
    description: "Apr 2024 - Sekarang"
  },
  {
    title: "Telkom Indonesia (TDS / MyTEnS & TOMPS)",
    description: "Jul 2022 - Sekarang"
  },
  {
    title: "Habilis Tech & Weaver (Klien Eropa)",
    description: "Mar 2024 - Sekarang"
  },
  {
    title: "Skolla EdTech",
    description: "Sep 2020 - Jul 2022"
  },
  {
    title: "PT Digital Biru Indonesia / Frackment.id",
    description: "Okt 2019 - Sep 2020"
  },
  {
    title: "Mitra Edu Teknologi",
    description: "Agu 2019 - Sep 2020"
  }
];

const items: ProjectItem[] = [
  {
    title: "Pusat Sistem Informasi dan Teknologi Keuangan (Puspensi), Kemenkeu RI",
    items: [
      { text: "Frontend Engineer bertanggung jawab atas pengembangan arsitektur dan pemeliharaan antarmuka aplikasi web strategis Kemenkeu menggunakan Angular, TypeScript, dan Tailwind CSS dalam ekosistem SSO OIDC Kemenkeu dan Azure DevOps.", type: "description" },
      { text: "Proyek & Modul Inti:", type: "header" },
      { text: "HRIS 2.0 (Sistem Utama ASN Kemenkeu): Mengembangkan modul Cuti Pegawai (perhitungan otomatis potongan tukin, kuota tambahan, verifikasi pengelola) dan modul Hukuman Disiplin / Hukdis (pencatatan pelanggaran dinas berjenjang, pembuatan digital BAP/BAK/LHPD, tanda tangan elektronik Nadine). Menulis 260+ commit terverifikasi pada codebase inti dengan zero downtime.", type: "item" },
      { text: "e-Grading HRIS 2.0: Mengembangkan alur penetapan sidang kenaikan grading jabatan DJPb (daftar nominatif, asesmen kemampuan kerja, persetujuan pimpinan berjenjang, hingga validasi SK). Merancang arsitektur rute /hris2/egrading dan dokumentasi ADR 0001–0009 standar integrasi tim.", type: "item" },
      { text: "Arjuna & Arjuna MFE: Mengembangkan fitur Manajemen Eksekutif berbasis rentang tanggal jabatan pimpinan (Menteri Keuangan & Wamen I–III) pada Arjuna.web, serta memimpin modernisasi Micro-Frontend (remoteArjuna, Angular 21, keu-ui, signal-based state management).", type: "item" },
      { text: "Pinset: Mengembangkan modul Pengelola Aset (/aset-dikelola, alokasi aset organisasi, distribusi non-BMN) terintegrasi data SIMAN 2 & layanan transportasi dinas SiKendi. Memperbarui kontrak Swagger REST API v2 dengan role-switching dinamis.", type: "item" }
    ]
  },
  {
    title: "Telkom Indonesia (TDS / MyTEnS & TOMPS)",
    items: [
      { text: "Frontend Engineer mengembangkan portal enterprise BUMN dan platform sales B2B skala nasional.", type: "description" },
      { text: "Proyek Utama:", type: "header" },
      { text: "MyTEnS Web: Merancang modul Profitability Tools v2 (rilis di v2.30.0) untuk kalkulasi otomatis kelayakan finansial proyek telekomunikasi berbasis skema form dinamis backend. Mengoptimalkan alur Risk Project Assessment (RPA) dan workflow Direct Lead Dispatch antar unit Witel.", type: "item" },
      { text: "TOMPS Project Management (SDA): Mengembangkan modul project charter, pelacakan deliverables, hingga handover proyek pada lini live multi-tenant SDA (pm.mytens.co.id) menggunakan Vue 3 + Vite. Meningkatkan keterlibatan aktif pengguna (user engagement) sebesar 30%.", type: "item" },
      { text: "TOMPS Asset Management: Membangun portal inventarisasi aset tetap (gedung, lahan, pembangkit listrik) menurunkan kesalahan pelacakan fisik aset 20%. Mengembangkan purwarupa analitik spasial Dashboard Danantara (MapLibre GL JS, rendering dataset >200 ribu aset negara).", type: "item" }
    ]
  },
  {
    title: "Habilis Tech & Weaver (Klien Eropa)",
    items: [
      { text: "Senior Frontend / Fullstack Engineer mengembangkan ekosistem aplikasi web skala besar berbasis Nx Monorepo, Next.js (App Router), Supabase, dan cloud AWS untuk berbagai klien di Perancis dan Eropa.", type: "description" },
      { text: "Proyek & Produk:", type: "header" },
      { text: "Square Rénovation (Prancis): Bertindak sebagai sole developer (Next.js, Supabase, Vercel) mengelola alur CRM operasional renovasi dari prospek, Plan de charge, atribusi teknis, hingga dossier subkontraktor. Menulis dan merawat 1.000+ automated unit & integration tests, 60+ migrasi database PostgreSQL, integrasi transaksi otomatis Brevo API, dan sinkronisasi Google Calendar API.", type: "item" },
      { text: "SonarPay: Mengembangkan sistem otentikasi multi-organisasi BDE, manajemen sesi berbasis JWT, integrasi checkout via MangoPay SDK, arsitektur reaktivasi akun terhapus, dan multi-fallback transactional email.", type: "item" },
      { text: "RozHome: Mengintegrasikan verifikasi identitas Sumsub KYC/AML SDK dengan penanganan state loading asinkron, serta modul filter analitik transaksi dompet digital & retail pada Backoffice admin.", type: "item" },
      { text: "Exo Monorepo: Mengembangkan antarmuka Backoffice & Admin berbasis Nx Monorepo, integrasi cloud AWS (Lambda, S3, SES, Pinpoint SMS), antarmuka interaktif drag-and-drop (@dnd-kit), dan sinkronisasi Resamania API.", type: "item" },
      { text: "CompanionCare & Wilih Monorepo: Aplikasi web kesehatan lansia (CompanionCare) dan retail (Wilih) dengan antarmuka responsif mobile-first / PWA serta optimasi zero layout-shift.", type: "item" },
      { text: "NFA B2B Supply Chain Platform: Membangun aplikasi rantai pasok cetak & retail B2B dengan alur pemesanan 5 tahap dan sistem impersonasi akun multi-toko.", type: "item" }
    ]
  },
  {
    title: "Skolla EdTech",
    items: [
      { text: "Memimpin pembaruan arsitektur antarmuka web Vue.js untuk platform Skolla EdTech, meningkatkan responsivitas dan reliabilitas sistem pembelajaran daring.", type: "description" },
      { text: "Proyek & Integrasi:", type: "header" },
      { text: "Skolla Student: Platform pembelajaran digital interaktif dengan fitur latihan soal, video materi, dan kelas online langsung.", type: "item" },
      { text: "Skolla Admin: Content Management System (CMS) untuk pengelolaan bank soal, penyelenggaraan tryout nasional, dan jadwal kelas live.", type: "item" },
      { text: "Skolla Landing Page: Web profil perusahaan untuk layanan edukasi, dioptimalkan untuk performa, aksesibilitas, dan SEO.", type: "item" },
      { text: "Integrasi SDK: Mengintegrasikan Zoom Meeting Web SDK untuk ruang kelas interaktif dan Midtrans Payment Gateway untuk penagihan langganan otomatis.", type: "item" }
    ]
  },
  {
    title: "PT Digital Biru Indonesia / Frackment.id",
    items: [
      { text: "Membangun dan memelihara aplikasi web responsif dan ramah pengguna menggunakan Nuxt.js dan React, dengan fokus pada performa tinggi dan pengalaman pengguna yang mulus.", type: "description" },
      { text: "Proyek:", type: "header" },
      { text: "Self Service Hotel Booking: Aplikasi pemesanan hotel mandiri berbasis web Nuxt.js, memudahkan tamu melakukan reservasi instan melalui antarmuka intuitif.", type: "item" },
      { text: "Noblar: Platform kolaboratif menonton konten streaming bersama berbasis React.js secara real-time.", type: "item" }
    ]
  },
  {
    title: "Mitra Edu Teknologi",
    items: [
      { text: "Memimpin migrasi stack frontend ke Vue.js, mengembangkan dashboard pemantauan kesehatan publik, dan berkolaborasi dengan pemangku kepentingan.", type: "description" },
      { text: "Proyek:", type: "header" },
      { text: "Dashboard SIPPKLING: Sistem monitoring sanitasi Rumah Sehat untuk Dinas Kesehatan Kota Depok dengan visualisasi grafik analitik interaktif untuk mendukung pengambilan keputusan klinis dan administratif.", type: "item" }
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
