<template>
  <div class="code" @click="refreshCode">
    <Identify :identifyCode="identifyCode"></Identify>
  </div>
</template>

<script>
import Identify from "./identify";
export default {
  name: "codetest",
  components: {
    Identify
  },
  data() {
    return {
      identifyCodes:
        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      identifyCode: ""
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    }
  }
};
</script>

<style>
.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
</style>