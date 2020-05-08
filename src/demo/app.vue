<template>
  <div>
    <!-- 使用方法一 -->
    <CanvasSign ref="canvasSign" />
    <div>
      <button @click="save">save</button>
      <button @click="clear">clear</button>
    </div>
    <hr />
    <!-- 使用方法二 -->
    <CanvasSign>
      <!-- vue@2.6.0 版本及以上，才能使用 v-slot -->
      <!-- <template v-slot="{ save, clear }">
        <button @click="() => save(saveCallback)">save</button>
        <button @click="clear">clear</button>
      </template> -->
      <!-- vue@2.6.0 版本以下，使用 slot-scope -->
      <template slot-scope="{ save, clear }">
        <button @click="() => save(saveCallback)">save</button>
        <button @click="clear">clear</button>
      </template>
    </CanvasSign>
    <hr />
    <!-- 生成图片展示 -->
    <img :src="imgSrc" alt="生成的图片" />
  </div>
</template>
<script>
import CanvasSign from '../canvas-sign'

export default {
  components: { CanvasSign },
  data () {
    return {
      // 图片src，默认空白base64图片
      imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII='
    }
  },
  methods: {
    // slot中save方法回调
    saveCallback (imgBase64) {
      this.imgSrc = imgBase64
    },
    // 不使用slot的save方法
    save () {
      this.$refs.canvasSign.save(img => {
        this.imgSrc = img
      })
    },
    // 不使用slot的clear方法
    clear () {
      this.$refs.canvasSign.clear()
    }
  }
}
</script>
