<template>
  <!-- 使用方法一 -->
  <CanvasSign ref="canvasSign" imageType="image/png" :imageQual="0.01" background="#FFF" />
  <div>
    <button @click="saveHandle">save</button>
    <button @click="clearHandle">clear</button>
  </div>
  <hr />
  <!-- 使用方法二 -->
  <CanvasSign :height="400">
    <template v-slot="{ save, clear }">
      <button @click="() => save(saveCallback)">save</button>
      <button @click="() => clearWithSlotHandle(clear)">clear</button>
    </template>
  </CanvasSign>
  <hr />
  <!-- 生成图片展示 -->
  <img :src="imgSrc" alt="生成的图片" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import CanvasSign, { ICanvasSign } from './canvas-sign'

const blankimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII='
export default defineComponent({
  components: { CanvasSign },
  setup () {
    const imgSrc = ref(blankimg)
    const canvasSign = ref<ICanvasSign>()

    // slot中save方法回调
    const saveCallback = (imgBase64?: string) => {
      imgSrc.value = imgBase64 || blankimg
    }
    // 不使用slot的save方法
    const saveHandle = () => {
      canvasSign.value?.save(img => {
        imgSrc.value = img || blankimg
      })
    }
    // 不使用slot的clear方法
    const clearHandle = () => {
      canvasSign.value?.clear() // 清空图片
      imgSrc.value = blankimg // 清空画布
    }
    // 使用slot的clear方法
    const clearWithSlotHandle = (clear: () => void) => {
      clear && clear() // 清空画布
      imgSrc.value = blankimg // 清空图片
    }

    return {
      canvasSign,
      imgSrc,
      saveCallback,
      saveHandle,
      clearHandle,
      clearWithSlotHandle
    }
  }
})
</script>
