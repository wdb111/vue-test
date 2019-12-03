<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="6" :offset="9">
        <h5>自定义颜色</h5>
        <el-menu :unique-opened="true" background-color="#666" text-color="#fff" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">选项1</template>
              <el-menu-item index="1-1-1">选项1-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>导航2</span>
            </template>
              <el-menu-item index="2-1-1">选项2-1</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
#app {
  width: 90%;
  margin: 30px auto;
}
</style>