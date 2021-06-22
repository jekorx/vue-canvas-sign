import { App } from 'vue'
import CanvasSign from './main.vue'

CanvasSign.install = (app: App): void => {
  app.component(CanvasSign.name, CanvasSign)
}

export default CanvasSign
