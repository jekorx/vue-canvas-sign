import { App } from 'vue'
import CanvasSign from './main.vue'

CanvasSign.install = (app: App): void => {
  app.component(CanvasSign.name, CanvasSign)
}

export interface ICanvasSign {
  save: (callback: (imgBase64?: string) => void) => void
  clear: () => void
}

export default CanvasSign
