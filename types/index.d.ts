import { App } from 'vue'

declare module 'vue-canvas-sign'

export interface ICanvasSign {
  save: (callback: (imgBase64?: string) => void) => void
  clear: () => void
}

declare const _default: {
  install: (app: App, ...options: any[]) => any
}

export default _default
