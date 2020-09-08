<template>
  <div>
    
    <h1>自定义组件</h1>
    <!-- <my-plugin :propData='initData'></my-plugin> -->
  </div>
</template>
<script>
// import myPlugin from "wdb-npm-practice"
export default {
  data(){
    return{
initData: 'hello 你好'
    }
  },
  components:{
// myPlugin
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
