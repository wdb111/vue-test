<template>
  <div>
    <h1>{{this.$route.meta.title}}</h1>
  </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    computed: {
    router: function() {
      return this.$route;
    }
  },
  watch: {
    router: {
      handler(value, oldValue) {
        console.log( value)
        },
      immediate: true //立即执行handler
    }
  }
}
</script>
<style lang="less" scoped>
h1 {
    width: 100%;
    text-align: center;
}
</style>