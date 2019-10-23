<template>
  <div class="app">
    <el-button type="primary" @click="toDatabase">返回首页</el-button>
    <el-button type="success" @click="qrcode">点击生成二维码</el-button>
    <div id="qrcode" ref="qrcode"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {};
  },
  components: { QRCode },
  methods: {
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 232, // 设置宽度
        height: 232, // 设置高度
        text: "https://baidu.com"
      });
    },
    toDatabase() {
      this.$router.push("/");
    }
  },
  created() {
    // this.$nextTick(function() {
    //   this.qrcode();
    // });
  }
};
</script>
<style scoped>
.app {
  text-align: center;
  margin-top: 60px;
}
#qrcode {
  width: 232px;
  margin: 50px auto;
}
</style>