<template>
  <div>
    <canvas
      ref="canvas"
      :width="width > borderWidth * 2 ? width - borderWidth * 2 : width"
      :height="height"
      :style="borderStyle"
      @touchstart="touchstart"
      @mousedown="mousedown"
      @touchmove="touchmove"
      @mousemove="mousemove"
      @touchend="touchend"
      @mouseup="mouseup"
    ></canvas>
    <slot :save="save" :clear="clear"></slot>
  </div>
</template>
<script>
export default {
  name: 'CanvasSign',
  props: {
    // 画布宽
    width: {
      type: Number,
      default: document.documentElement.clientWidth || document.body.clientWidth
    },
    // 画布高
    height: {
      type: Number,
      default: 200
    },
    // 画线粗细
    lineWidth: {
      type: Number,
      default: 2
    },
    // 画线颜色
    color: {
      type: String,
      default: '#000'
    },
    // 画布背景色
    background: {
      type: String,
      default: 'rgba(255, 255, 255, 0)'
    },
    // 边框宽度
    borderWidth: {
      type: Number,
      default: 1
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: '#333'
    },
    // 图片类型，默认：image/png，可选：image/jpeg（注意修改background），image/webp（Chrome支持），其他类型均为image/png
    imageType: {
      type: String,
      default: 'image/png',
      validator (value) {
        return ['image/png', 'image/jpeg', 'image/webp'].indexOf(value) !== -1
      }
    },
    // 图片质量，当imageType为image/jpeg时生效，默认值：0.92，可选0~1之间，超出范围使用默认0.92
    imageQual: {
      type: Number,
      default: 0.92,
      validator (value) {
        return value <= 1 && value >= 0
      }
    }
  },
  computed: {
    borderStyle () {
      if (this.borderWidth > 0 && this.width > this.borderWidth * 2) {
        return `border: ${this.borderWidth}px solid ${this.borderColor}`
      }
      return ''
    }
  },
  data () {
    return {
      canvas: null,
      cxt: null,
      isDraw: false
    }
  },
  mounted () {
    this.$nextTick(this.init)
  },
  methods: {
    // 生成图片
    save (callback) {
      let imgBase64
      if (this.imageType === 'image/jpeg') {
        imgBase64 = this.canvas.toDataURL('image/jpeg', this.imageQual)
      } else {
        imgBase64 = this.canvas.toDataURL(this.imageType)
      }
      callback(imgBase64)
    },
    // 清空画布
    clear () {
      this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    // 初始化
    init () {
      const canvas = this.$refs.canvas
      this.canvas = canvas

      // 获取canvas context
      const cxt = canvas.getContext('2d')

      // canvas context相关设置
      cxt.fillStyle = this.background
      cxt.fillRect(0, 0, this.width, this.height)
      cxt.strokeStyle = this.color
      cxt.lineWidth = this.lineWidth
      cxt.lineCap = 'round' // 线条末端添加圆形线帽，减少线条的生硬感
      cxt.lineJoin = 'round' // 线条交汇时为原型边角
      // 利用阴影，消除锯齿
      cxt.shadowBlur = 1
      cxt.shadowColor = this.color

      this.cxt = cxt
    },
    // 移动端触摸摁下
    touchstart (e) {
      const { pageX, pageY, target } = e.changedTouches[0]
      const { tagName, offsetTop, offsetLeft } = target
      if (tagName === 'CANVAS') {
        this.cxt.beginPath()
        this.cxt.moveTo(pageX - offsetLeft, pageY - offsetTop)
      }
    },
    // pc端鼠标点下
    mousedown (e) {
      const { tagName, offsetTop, offsetLeft } = e.target
      if (tagName === 'CANVAS') {
        this.isDraw = true
        this.cxt.beginPath()
        this.cxt.moveTo(e.pageX - offsetLeft, e.pageY - offsetTop)
      }
    },
    // 移动端触摸滑动
    touchmove (e) {
      e.stopPropagation()
      e.preventDefault()
      const { pageX, pageY, target } = e.changedTouches[0]
      const { tagName, offsetTop, offsetLeft } = target
      if (tagName === 'CANVAS') {
        this.cxt.lineTo(pageX - offsetLeft, pageY - offsetTop)
        this.cxt.stroke()
      }
    },
    // pc端鼠标移动
    mousemove (e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.isDraw) {
        const { tagName, offsetTop, offsetLeft } = e.target
        if (tagName === 'CANVAS') {
          const { borderWidth, cxt } = this
          const { width, height } = this.canvas
          cxt.lineTo(e.pageX - offsetLeft, e.pageY - offsetTop)
          cxt.stroke()
          if (e.pageX - offsetLeft <= borderWidth ||
              e.pageX - offsetLeft >= width - borderWidth * 2 ||
              e.pageY - offsetTop <= borderWidth ||
              e.pageY - offsetTop >= height - borderWidth * 2) {
            this.isDraw = false
          }
        }
      }
    },
    // 移动端触摸抬起
    touchend () {
      this.cxt.closePath()
    },
    // pc端鼠标松开
    mouseup () {
      this.isDraw = false
      this.cxt.closePath()
    }
  }
}
</script>
