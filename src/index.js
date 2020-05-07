import CanvasSign from './canvas-sign'

const install = function (Vue) {
  Vue.component(CanvasSign.name, CanvasSign)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  CanvasSign
}

export {
  CanvasSign
}
