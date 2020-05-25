<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年05月12日 23:35:18
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <h1>弹窗</h1>
    <Button type="primary" @click="modal1 = true">显示弹窗</Button>
    <Modal v-model="modal1" title="选择设备">
      <p>内容</p>
      <p>内容</p>
      <p>内容</p>
      <template slot="footer">
        <div class="modal-footer">
          <Button @click="ok">确定</Button>
          <Button @click="cancel">取消</Button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {},
  components: {},
  data() {
    return {
      modal1: false
    };
  },
  computed: {},
  methods: {
    ok() {
        this.modal1=false;
      this.$Message.info("Clicked ok");
    },
    cancel() {
        this.modal1=false;
      this.$Message.info("Clicked cancel");
    }
  },
  created() {}
};
</script> 
<style>

.ivu-modal {
  width: 680px !important;
  height: 400px;
  color: #D8ECFF;
  background-image: url("../../assets/img/弹窗-s.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.ivu-modal-content {
  background-color: transparent;
}
.ivu-modal-header,
.ivu-modal-footer {
  border: none;
}
.ivu-modal-footer{
 padding: 10px 18px 12px 18px;
}
.ivu-modal-header-inner {
  font-size: 14px;
  font-weight: bold;
  color: #D8ECFF !important;
}
.modal-footer {
  text-align: center;
}
.modal-footer button {
  width: 120px;
  height: 33px;
  border: none;
  color: #fff;
  background-image: linear-gradient(#4fd3e1, #1d71a3);
}
.modal-footer button:hover{
    color: #fff;
}
.ivu-modal-header-inner {
  height: auto;
  color: #fff;
  padding-left: 45px;
  padding-top: 1px;
  box-sizing: border-box;
}
.ivu-modal-close {
  position: relative;
}
.ivu-modal-close .ivu-icon-ios-close {
  position: absolute;
  top: 2px;
  left: 650px;
  color: #fff;
  opacity: 0.8;
}
.ivu-modal-close .ivu-icon-ios-close:hover {
    color: #fff;
    opacity: 1;
}
.ivu-modal-content{
    height: 100%;
}
.ivu-modal-body {
    padding: 5px 30px;
    height: calc(100% - 108px);
}

</style>
<style lang='less' scoped>
</style>
