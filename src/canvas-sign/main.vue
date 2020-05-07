<template>
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
      offsetTop: 0,
      offsetLeft: 0,
      isDraw: false
    }
  },
  mounted () {
    this.$nextTick(this.init)
  },
  methods: {
    // 生成图片
    save (callback) {
      const imgBase64 = this.canvas.toDataURL()
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

      this.offsetTop = canvas.offsetTop // canvas上边距
      this.offsetLeft = canvas.offsetLeft // canvas左边距

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
      this.cxt.beginPath()
      this.cxt.moveTo(e.changedTouches[0].pageX - this.offsetLeft, e.changedTouches[0].pageY - this.offsetTop)
    },
    // pc端鼠标点下
    mousedown (e) {
      this.isDraw = true
      this.cxt.beginPath()
      this.cxt.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
    },
    // 移动端触摸滑动
    touchmove (e) {
      e.stopPropagation()
      e.preventDefault()
      this.cxt.lineTo(e.changedTouches[0].pageX - this.offsetLeft, e.changedTouches[0].pageY - this.offsetTop)
      this.cxt.stroke()
    },
    // pc端鼠标移动
    mousemove (e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.isDraw) {
        this.cxt.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
        this.cxt.stroke()
        if (e.pageX - this.offsetLeft <= this.borderWidth ||
            e.pageX - this.offsetLeft >= this.canvas.width - this.borderWidth * 2 ||
            e.pageY - this.offsetTop <= this.borderWidth ||
            e.pageY - this.offsetTop >= this.canvas.height - this.borderWidth * 2) {
          this.isDraw = false
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