<template>
  <div>
    <div class="hello">
    <el-button class="button" type="primary" v-for="(item,index) in dataList" :key="index" @click="to_page(item.url)">{{item.title}}</el-button>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      dataList:[
        {
          title:"表格",
          url:"/el-table"
        },
        {
          title:"输入框",
          url:"/el-input"
        },
        {
          title:"折叠面板",
          url:"/el-collapse"
        },
        {
          title:"导航菜单",
          url:"/el-navmenu"
        },
        {
          title:"上传",
          url:"/el-upload"
        },
        {
          title:"级联选择",
          url:"/el-cascader"
        },
        {
          title:"步骤条",
          url:"/el-steps"
        }
      ]
    };
  },
  methods: {
    to_page(url) {
      this.$router.push("/to_element"+url);
    }
  },
};
</script>
<style>
</style>
<style scoped>
#app {
  text-align: center;
  margin-top: 30px;
}
.hello {
  margin-top: 20px;
  text-align: center;
}
.button {
  margin-top: 20px;
}
</style>