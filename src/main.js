import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // /index.js er implicit

createApp(App).use(router).mount('#app')
