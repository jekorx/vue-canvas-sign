import { createApp } from 'vue'
import App from './app.vue'
import CanvasSign from './canvas-sign'

const app = createApp(App)

app.component('CanvasSign', CanvasSign)

app.mount('#app')
