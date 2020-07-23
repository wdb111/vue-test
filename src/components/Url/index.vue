<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年06月20日 13:49:41
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <h1>url</h1>
    <div style="text-align:center">
      <el-button @click="go">跳转</el-button>
      <p>完整url：{{urlValue}}</p>
      <p>url参数：{{params}}</p>
      <p>{{urlObj}}</p>
    </div>
  </div>
</template>

<script>
import { getUrlKey } from "./getUrl";
export default {
  name: "Url",
  props: {},
  components: {},
  data() {
    return {
      urlValue: "",
      params: ""
    };
  },
  computed: {
    urlObj() {
      return this.$route.query;
    }
  },
  methods: {
    go() {
      this.$router.push({
        path: "/to_url",
        query: {
          name: "张三",
          id: "123",
          code: "1"
        }
      });
    }
  },
  created() {
    let name = getUrlKey("name", window.location.href),
      id = getUrlKey("id", window.location.href),
      code = getUrlKey("code", window.location.href);
    alert("name:" + name + "\n" + "id:" + id + "\n" + "code:" + code);
  }
};
</script> 

<style lang='less' scoped>
</style>
