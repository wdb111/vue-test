<template>
  <div class="app">
    <el-button type="primary" @click="toDatabase">返回首页</el-button>
    <div>
      <span>二维码地址：</span>
      <el-input v-model="address" placeholder="请输入地址" style="width:200px"></el-input>
    </div>
    <el-button type="success" @click="qrcode">点击生成二维码</el-button>
    <div id="qrcode" ref="qrcode"></div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      address:""
    };
  },
  components: { QRCode },
  methods: {
    qrcode() {
      if(this.address==''){
        this.address="http://www.baidu.com"
      }
      let qrcode = new QRCode("qrcode", {
        width: 232, // 设置宽度
        height: 232, // 设置高度
        text: this.address
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