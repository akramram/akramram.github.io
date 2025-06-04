import { createApp } from 'vue'
import App from './App.vue'
// If you created src/assets/main.css, import it here:
import './assets/main.css'

const app = createApp(App)
app.mount('#app') // This #app corresponds to the div in your public/index.html