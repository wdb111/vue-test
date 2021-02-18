<!--
  功能：功能描述
  作者：王代彬
  时间：2021年01月27日 12:33:50
  版本：v1.0
-->
<template>
    <div class="child-box">
        子组件
    </div>
</template>

<script>
export default {
  name: 'demo',
  props: {},
  components: {},
  data () {
   return {}
  },
  filters: {},
  computed: {},
  watch: {},
  methods: {},
  created () {
  },
  mounted () {
  },
}
</script> 

<style lang='less' scoped>
.child-box{
    width: 500px;
    height: 300px;
    background-color: aqua;
    position: relative;
    top: -20px;
}
</style>
