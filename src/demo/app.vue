<template>
  <div>
    <CanvasSign ref="canvasSign" />
    <div>
      <button @click="save">save</button>
      <button @click="clear">clear</button>
    </div>
    <img :src="imgSrc" alt="生成的图片" />
  </div>
</template>
<script>
import CanvasSign from '../canvas-sign'

export default {
  components: { CanvasSign },
  data () {
    return {
      imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII='
    }
  },
  methods: {
    save () {
      this.$refs.canvasSign.save(img => {
        this.imgSrc = img
      })
    },
    clear () {
      this.$refs.canvasSign.clear()
    }
  }
}
</script>
