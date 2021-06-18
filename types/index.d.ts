export interface ICanvasSign {
  save: (callback: (imgBase64?: string) => void) => void
  clear: () => void
}
