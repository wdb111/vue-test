<template>
  <div>
    <div class="hello">
    <el-button v-for="item in dataList" :key="item.url" class="button" size="small" @click="to_table(item.url)">{{item.title}}</el-button>
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
          url:"el-table"
        },
        {
          title:"输入框",
          url:"el-input"
        },
        {
          title:"折叠面板",
          url:"el-collapse"
        },
        {
          title:"导航菜单",
          url:"el-navmenu/1"
        },
        {
          title:"上传",
          url:"el-upload"
        },
        {
          title:"级联选择",
          url:"el-cascader"
        }
      ]
    };
  },
  methods: {
     to_table(url) {
      this.$router.push("/to_element/"+url);
    }
     
  },
};
</script>
<style>
</style>
<style scoped>
.button {
  margin-top: 20px;
}
</style>