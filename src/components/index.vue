<template>
  <div class="hello">
    <h1>主页</h1>
    <el-button class="button" type="primary" @click="to_database">操作数据库</el-button>
    <el-button class="button" type="primary" @click="to_erweima">生成二维码</el-button>
    <el-button class="button" type="primary" @click="to_set">$set（实时添加属性）</el-button>
    <el-button class="button" type="primary" @click="to_element">elementUI例子</el-button>
    <el-button class="button" type="primary" @click="to_codemirror">在线编辑器</el-button>
    <el-button class="button" type="primary" @click="to_backTop">backcTop回到顶部</el-button>
    <el-button class="button" type="primary" @click="to_map">地图</el-button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
       
    };
  },
  methods: {
    to_database() {
      this.$router.push("/to_database");
    },
    to_erweima() {
      this.$router.push("/to_Erweima");
    },
    to_set() {
      this.$router.push("/to_set");
    },
    to_element() {
      this.$router.push("/to_element");
    },
    to_codemirror(){
      this.$router.push('/to_codemirror')
    },
    to_backTop(){
      this.$router.push('/to_backTop')
    },
    to_map(){
      this.$router.push('/to_map')
    }
    
  },
  created() {
  }
};
</script>

<style scoped>
.hello {
  margin-top: 60px;
  text-align: center;
}
.button {
  margin-top: 20px;
}
</style>
