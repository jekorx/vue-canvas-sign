<template>
  <div style="position: relative; left: 10px; top: 50px">
    <!-- 使用方法一 -->
    <CanvasSign ref="canvasSign" imageType="image/jpeg" :imageQual="0.01" background="#FFF" />
    <div>
      <button @click="saveHandle">save</button>
      <button @click="clearHandle">clear</button>
    </div>
    <hr />
    <!-- 使用方法二 -->
    <CanvasSign>
      <!-- vue@2.6.0 版本及以上，才能使用 v-slot -->
      <!-- <template v-slot="{ save, clear }">
        <button @click="() => save(saveCallback)">save</button>
        <button @click="() => clearWithSlotHandle(clear)">clear</button>
      </template> -->
      <!-- vue@2.6.0 版本以下，使用 slot-scope -->
      <template slot-scope="{ save, clear }">
        <button @click="() => save(saveCallback)">save</button>
        <button @click="() => clearWithSlotHandle(clear)">clear</button>
      </template>
    </CanvasSign>
    <hr />
    <!-- 生成图片展示 -->
    <img :src="imgSrc" alt="生成的图片" />
  </div>
</template>
<script>
import CanvasSign from '../canvas-sign'

const blankimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII='
export default {
  components: { CanvasSign },
  data () {
    return {
      // 图片src，默认空白base64图片
      imgSrc: blankimg
    }
  },
  methods: {
    // slot中save方法回调
    saveCallback (imgBase64) {
      this.imgSrc = imgBase64
    },
    // 不使用slot的save方法
    saveHandle () {
      this.$refs.canvasSign.save(img => {
        this.imgSrc = img
      })
    },
    // 不使用slot的clear方法
    clearHandle () {
      // 清空图片
      this.$refs.canvasSign.clear()
      // 清空画布
      this.imgSrc = blankimg
    },
    // 使用slot的clear方法
    clearWithSlotHandle (clear) {
      // 清空画布
      clear && clear()
      // 清空图片
      this.imgSrc = blankimg
    }
  }
}
</script>
