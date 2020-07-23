<template>
  <div class="hello">
    <header>
      <h1>主页</h1>
    </header>
    <el-button v-for="(item,index) in dataList" :key="index" class="button" type="primary" @click="to_page(item.url)">{{item.name}}</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      dataList:[
        {
          name:"操作数据库",
          url:"/to_database"
        },
        {
          name:"生成二维码",
          url:"/to_Erweima"
        },
        {
          name:"elementUI例子",
          url:"/to_element/el-table"
        },{
          name:"iView例子",
          url:"/to_iview/nav"
        },
        {
          name:"代码高亮编辑器",
          url:"/to_codemirror"
        },
        {
          name:"backcTop回到顶部",
          url:"/to_backTop"
        },
        {
          name:"显示当前时间",
          url:"/to_date"
        },
        {
          name:"less的使用",
          url:"/to_less"
        },
        {
          name:"lodash的使用",
          url:"/to_lodash"
        },
        {
          name:"tinymce富文本编辑器",
          url:"/to_tinymce"
        },
        {
          name:"wangeditor富文本编辑器",
          url:"/to_wangeditor"
        },
        {
          name:"验证码",
          url:"/identify"
        },
        {
          name:"地图",
          url:"/to_map"
        },
        {
          name:"制作渐变尖角",
          url:"/to_jiao"
        },
        {
          name:"拖拽",
          url:"/to_draggable"
        }
      ]
    };
  },
  methods: {
    to_page(url){
      this.$router.push(url);
    }
    
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

.hello {
  width: 100%;
  height: 100%;
}
.button {
  margin-top: 20px;
}
</style>
