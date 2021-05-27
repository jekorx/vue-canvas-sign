# vue-canvas-sign
[![npm package](https://img.shields.io/npm/v/vue-canvas-sign.svg)](https://www.npmjs.com/package/vue-canvas-sign)
> vue canvas签名组件（vue canvas sign component）  
### 示例
> [demo展示](https://jekorx.github.io/vue-canvas-sign)

![vue-canvas-sign](screenshot/pic0.jpg)

### 用法
```bash
# 安装依赖
yarn add vue-canvas-sign
# or
npm i vue-canvas-sign -S
```
> 使用
```javascript
<template>
  <div>
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
import CanvasSign from 'vue-canvas-sign'

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
```
### 组件参数
| 参数          | 说明       | 类型    |  默认值 |  可选值 |
| :------------ | :--------  | :------ | :----- | :----- |
| width         | 画布宽     | Number  | ```document.documentElement.clientWidth || document.body.clientWidth``` | |
| height        | 画布高     | Number  | ```200``` | |
| lineWidth     | 画线粗细   | Number  | ```2``` | |
| color         | 画线颜色   | String  | ```#000``` | |
| background    | 画布背景色 | String  | ```rgba(255, 255, 255, 0)``` | |
| borderWidth   | 边框宽度   | Number  | ```1``` | |
| borderColor   | 边框颜色   | String  | ```#333``` | |
| imageType     | 生成图片类型，使用```image/jpeg```类型，注意修改```background```，清空画布再次绘制可能无法正常生成base64，所以不推荐使用使用```image/jpeg```类型 | String  | ```image/png```（👍推荐🔥） | ```image/png``` &#124; ```image/jpeg``` &#124; ```image/webp```(Chrome支持) |
| imageQual     | 生成图片质量，imageType为```image/jpeg```时生效 | Number  | ```0.92``` | ```0 ~ 1``` 之间数字 |
### slot
| 属性   | 说明        | 类型      |  参数 |
| :----- | :---------- | :------- | :----- |
| save   | 保存图片方法 | Function | callback(imgBase64) |
| clear  | 清空画布方法 | Function | 无 |
