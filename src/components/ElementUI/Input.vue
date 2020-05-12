<template>
  <div>
    <h1>watch高级应用</h1>
    <div>
      <p>FullName: {{fullName}}</p>
      <p>
        FirstName:
        <el-input style="width:200px" type="text" v-model="firstName" />
      </p>
    </div>
    <div>
      <p>obj.a: {{obj.a}}</p>
      <p>
        obj.a:
        <el-input style="width:200px" type="text" v-model="obj.a" />
      </p>
    </div>
    <div>
      <el-button @click="focuse">点击聚焦</el-button>
      <el-input class="aaa" style="width:200px" v-model="msg" placeholder="请输入..."></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:"",
      firstName: "Dawei",
      lastName: "Lou",
      fullName: "",
      obj: {
        a: 123
      }
    };
  },
  methods: {
    focuse(){
            let a=document.getElementsByClassName("aaa")[0];
            let b=a.getElementsByTagName("input")[0];
            b.focus();
    }
  },
  mounted() {
    this.obj = {
      a: "456"
    };
  },
  watch: {
    firstName: {
      handler(newName, oldName) {
        this.fullName = newName + " " + this.lastName;
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    },
    obj: {
      handler(newName, oldName) {
        console.log("obj.a changed");
      },
      immediate: true,
      deep: true //代表是否深度监听
    }
  }
};
</script>