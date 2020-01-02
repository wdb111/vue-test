<template>
  <div>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回首页</el-button>
    </div>
    <h1>Wangeditor富文本编辑器</h1>
    <EditorBar v-model="detail" :isClear="isClear" @change="change"></EditorBar>
  </div>
</template>
<script>
import EditorBar from "./Wangeditor";
export default {
  name: "index",
  components: { EditorBar },
  data() {
    return {
      isClear: false,
      detail: ""
    };
  },
  methods: {
    toDatabase() {
      this.$router.push("/");
    },
    change(val) {
      console.log(val);
    }
  }
};
</script>
<style scoped>
#app {
  text-align: center;
}
h1 {
  margin-bottom: 20px;
  text-align: center;
}
</style>