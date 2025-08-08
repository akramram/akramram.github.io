
<template>
  <div
    v-if="visible"
    class="z-[1000] fixed inset-0 flex justify-center items-center bg-black/50 m-0 p-0 w-screen h-screen"
    @click.self="closeModal"
  >
    <div
      class="receipt-modal relative bg-white shadow-xl p-6 border-2 border-black rounded-none max-w-[400px] w-[90vw] font-mono text-black project-card"
      :class="sizeClass"
      style="box-shadow: 4px 4px 0px #000; min-height: 300px;"
    >
      <!-- Receipt Header -->
      <div class="text-center border-b-2 border-black pb-3 mb-4">
        <div class="text-xs font-bold uppercase tracking-wider">AKRAM RAHARDI</div>
        <div class="text-xs">Frontend Developer Portfolio</div>
        <div class="text-xs">--------------------------------</div>
      </div>

      <!-- Close Button -->
      <button
        class="top-2 right-2 absolute focus:outline-none text-black hover:text-gray-600 text-xl font-bold border border-black bg-white px-1 py-0"
        @click="closeModal"
        aria-label="Tutup"
        style="box-shadow: 2px 2px 0px #000;"
      >×</button>

      <!-- Receipt Content -->
      <div class="receipt-content">
        <div class="text-center mb-4">
          <h3 class="text-sm font-bold uppercase tracking-wide border-b border-black pb-2 mb-3">{{ project.title }}</h3>
        </div>
        
        <div class="text-xs leading-relaxed prose prose-xs font-mono max-h-[400px] overflow-y-auto">
          <div class="receipt-period mb-3 text-center font-bold">
            {{ project.description }}
          </div>
          
          <div class="receipt-list">
            <div 
              v-for="(item, index) in items" 
              :key="index" 
              class="receipt-item"
              :class="{ 
                'receipt-header': item.type === 'header',
                'receipt-emphasis': isEmphasisItem(item.text) && item.type === 'item',
                'receipt-description': item.type === 'description'
              }"
            >
              {{ item.type === 'item' ? '•' : '' }} {{ item.text }}
            </div>
          </div>
        </div>

        <!-- Receipt Footer -->
        <div class="text-center border-t-2 border-black pt-3 mt-4">
          <div class="text-xs">--------------------------------</div>
          <div class="text-xs">Thank you for viewing!</div>
          <div class="text-xs">{{ new Date().toLocaleDateString() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, computed } from 'vue';

interface Project {
  title: string;
  description: string;
}

interface ReceiptItem {
  text: string;
  type: 'header' | 'item' | 'description';
}

defineOptions({ name: 'ProjectCard' });

const props = defineProps<{ 
  project: Project; 
  modelValue: boolean; 
  size?: 'sm' | 'md' | 'lg';
  items: ReceiptItem[];
}>();

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'max-w-sm';
    case 'lg':
      return 'max-w-2xl';
    case 'md':
    default:
      return 'max-w-md';
  }
});
const emit = defineEmits(['update:modelValue']);

const visible = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  visible.value = val;
});

function closeModal() {
  visible.value = false;
  emit('update:modelValue', false);
}

function isEmphasisItem(text: string): boolean {
  // Check if item should be emphasized (like project names)
  return text.includes(':') || text.includes('Platform') || text.includes('System') || text.includes('CMS');
}
</script>

<style scoped>
.receipt-modal {
  font-family: "Courier New", monospace;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  background: #fafafa;
  color: #000;
  line-height: 1.4;
}

.receipt-modal:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px #000 !important;
}

button:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0px #000 !important;
}

button:active {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0px #000 !important;
}

.receipt-content {
  font-size: 11px;
}

.receipt-content h3 {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.receipt-period {
  font-size: 10px;
  border-bottom: 1px dashed #000;
  padding-bottom: 8px;
}

.receipt-list {
  margin: 8px 0;
  padding-left: 0;
}

.receipt-item {
  margin-bottom: 6px;
  padding-left: 0;
  text-align: left;
  line-height: 1.3;
  position: relative;
}

.receipt-item::before {
  content: "• ";
  position: absolute;
  left: -8px;
}

.receipt-header {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;
}

.receipt-header::before {
  content: "";
}

.receipt-emphasis {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.receipt-emphasis::before {
  content: "";
}

.receipt-description {
  font-weight: normal;
  text-transform: none;
  letter-spacing: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.receipt-description::before {
  content: "";
}

/* Scrollbar styling for receipt */
.receipt-content::-webkit-scrollbar {
  width: 6px;
}

.receipt-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border: 1px solid #000;
}

.receipt-content::-webkit-scrollbar-thumb {
  background: #000;
}

.receipt-content::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>


