<template>
  <div>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回首页</el-button>
    </div>
    <h1>less在vue中的使用</h1>
    <div class="contant">
      第一步：
      <br />安装less依赖，npm install less less-loader --save
      <br />第二步：
      <br />在vue项目中build/webpack.base.conf.js;moduls对象的rules数组中最后添加
      <br />
      <pre>{{msg}}</pre>
      <div>
        现在基本上已经安装完成了，然后在使用的时候在style标签里加上lang=”less”里面就可以写less的代码了(style标签里加上 scoped 为只在此作用域 有效),
        scoped 是 vue的概念.
      </div>
      <pre>{{html}}</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: "less",
  data() {
    return {
      msg: `{
    test: /\.less$/,
    loader: "style-loader!css-loader!less-loader",
    },`,
      html: `<stylelang="less"scoped>
@nice-blue: #5B83AD;
@light-blue:@nice-blue +#111;
.header{
        background:@light-blue;
}
</style>`
    };
  },
  methods: {
    toDatabase() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Less.less";
</style>