<template>
  <div>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回首页</el-button>
    </div>
    <h1>地图</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    toDatabase() {
      this.$router.push("/");
    },
  },
}
</script>
<style scoped>
#app {
  text-align: center;
  margin-top: 10px;
}
</style>