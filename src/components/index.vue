<template>
  <div class="hello">
    <header>
        <h1>主页</h1>
    </header>
    <el-button class="button" type="primary" @click="to_database">操作数据库</el-button>
    <el-button class="button" type="primary" @click="to_erweima">生成二维码</el-button>
    <el-button class="button" type="primary" @click="to_element">elementUI例子</el-button>
    <el-button class="button" type="primary" @click="to_codemirror">代码高亮编辑器</el-button>
    <el-button class="button" type="primary" @click="to_backTop">backcTop回到顶部</el-button>
    <el-button class="button" type="primary" @click="to_date">显示当前时间</el-button>
    <el-button class="button" type="primary" @click="to_less">less的使用</el-button>
    <el-button class="button" type="primary" @click="to_tinymce">tinymce富文本编辑器</el-button>
    <el-button class="button" type="primary" @click="to_wangeditor">wangeditor富文本编辑器</el-button>
    <el-button class="button" type="primary" @click="to_map">地图</el-button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    to_database() {
      this.$router.push("/to_database");
    },
    to_erweima() {
      this.$router.push("/to_Erweima");
    },
    to_element() {
      this.$router.push("/to_element");
    },
    to_codemirror() {
      this.$router.push("/to_codemirror");
    },
    to_backTop() {
      this.$router.push("/to_backTop");
    },
    to_date() {
      this.$router.push("/to_date");
    },
    to_less() {
      this.$router.push("/to_less");
    },
    to_tinymce() {
      this.$router.push("/to_tinymce");
    },
    to_wangeditor() {
      this.$router.push("/to_wangeditor");
    },
    to_map() {
      this.$router.push("/to_map");
    }
  },
  created() {}
};
</script>

<style scoped>

header {
  text-align: center;
}

.hello {
  width: 100%;
  height: 100%;
}
.button {
  margin-top: 20px;
}
</style>
