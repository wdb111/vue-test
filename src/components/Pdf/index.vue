<!--
  功能：功能描述
  作者：王代彬
  时间：2020年09月11日 10:01:36
  版本：v1.0
-->
<template>
  <div class="pdf">
    <h3>说明</h3>
    <p>访问本地pdf时，请将文件放置static文件夹下面，否则无法访问</p>
    <p>如要禁用按钮，在路劲后加上#toolbar=0</p>
    <iframe id="ifa" ref="canvas" width="100%" height="100%" src="static/Git.pdf#toolbar=0" frameborder="0" ></iframe>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {},
  components: {},
  data() {
    return {
    };
  },
  filter: {},
  computed: {},
  watch: {},
  methods: {
  },
  created() {
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.pdf {
  height: 100%;
}
</style>
