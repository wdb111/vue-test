<template>
  <div>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回首页</el-button>
    </div>
    <h1>地图</h1>
    <wdb-npm-practice :propData='initData'></wdb-npm-practice>
    <demo2 name=""小明></demo2>
  </div>
</template>
<script>
export default {
  data(){
    return{
initData: 'hello 你好'
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
