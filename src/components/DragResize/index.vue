<template>
  <div class="drag-resize-container">
    <vue-drag-resize @resizing="resizing">
      <img v-bind="imgSize" src="../../assets/img/3.jpg" alt="">
    </vue-drag-resize>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'

export default {
  name: 'index',
  data () {
    return {
      imgSize: {
        width: 200,
        height: 200
      }
    }
  },
  components: {VueDragResize},
  created () {
  },
  mounted () {
  },
  methods: {
    resizing (obj) {
      let {height, width} = obj
      this.imgSize = {
        height,
        width
      }
    }
  }
}
</script>

<style lang="less" scoped>
.drag-resize-container {
  margin: 50px auto;
  position: relative;
  width: 400px;
  height: 600px;
  background-color: #eee;
  overflow: hidden;
}
</style>
