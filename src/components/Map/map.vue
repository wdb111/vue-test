<template>
  <div>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回首页</el-button>
    </div>
    <h1>地图</h1>
    <my-plugin :propData='initData'></my-plugin>
  </div>
</template>
<script>
import myPlugin from "wdb-npm-practice"
export default {
  data(){
    return{
initData: 'hello 你好'
    }
  },
  components:{
myPlugin
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