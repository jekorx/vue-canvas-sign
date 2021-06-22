import { App } from 'vue'

declare module 'vue-canvas-sign'

export declare interface ICanvasSign {
  save: (callback: (imgBase64?: string) => void) => void
  clear: () => void
  install: (app: App) => any
}

declare const CanvasSign: ICanvasSign

export default CanvasSign
