<template>
  <div>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回首页</el-button>
    </div>
    <div class="hello">
    <el-button class="button" type="primary" @click="to_table">表格</el-button>
    <el-button class="button" type="primary" @click="to_input">输入框</el-button>
    <el-button class="button" type="primary" @click="to_collapse ">折叠面板</el-button>
    <el-button class="button" type="primary" @click="to_navmenu ">导航菜单</el-button>
    <el-button class="button" type="primary" @click="to_upload ">上传</el-button>
    <el-button class="button" type="primary" @click="to_cascader ">级联选择</el-button>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
    };
  },
  methods: {
    toDatabase() {
      this.$router.push("/");
    },
     to_table() {
      this.$router.push("/to_element/el-table");
    },
     to_input() {
      this.$router.push("/to_element/el-input");
    },
     to_collapse() {
      this.$router.push("/to_element/el-collapse");
    },
    to_navmenu() {
      this.$router.push("/to_element/el-navmenu");
    },
    to_upload() {
      this.$router.push("/to_element/el-upload");
    },
    to_cascader() {
      this.$router.push("/to_element/el-cascader");
    },
  },
};
</script>
<style>
</style>
<style scoped>
#app {
  text-align: center;
  margin-top: 30px;
}
.hello {
  margin-top: 20px;
  text-align: center;
}
.button {
  margin-top: 20px;
}
</style>