<template>
  <div>
    <div>
      <p>FullName: {{fullName}}</p>
      <p>
        FirstName:
        <input type="text" v-model="firstName" />
      </p>
    </div>
    <div>
      <p>obj.a: {{obj.a}}</p>
      <p>
        obj.a:
        <input type="text" v-model="obj.a" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Dawei",
      lastName: "Lou",
      fullName: "",
      obj: {
        a: 123
      }
    };
  },
  methods: {},
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
      deep: true//代表是否深度监听
    }
  }
};
</script>