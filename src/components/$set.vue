<template>
  <div class="app">
    <el-button type="primary" @click="toDatabase">返回主页面</el-button>
    <div id="app">
      姓名：{{ data.name }}
      <br />
      年龄：{{ data.age}}
      <br />
      性别：{{data.sex}}
      <br />
      说明：{{data.info.content}}
    </div>
    <el-button type="success" @click="add">添加属性</el-button>
    
  </div>
</template>
<script>
let data = {
  name: "简书",
  age: "3",
  info: {
    content: "my name is test"
  }
};
export default {
  data() {
    return {
      data
    };
  },
  methods: {
    add() {
      //   this.data.sex="男"
      this.$set(this.data, "sex", "男");
      console.log(this.data);
    },
    toDatabase(){
      this.$router.push("/")
    }
  }
};
</script>
<style scoped>
.app {
    margin-top: 60px;
    text-align: center;
}
</style>