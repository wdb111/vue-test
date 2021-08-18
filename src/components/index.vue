<template>
  <div class="hello">
    <header>
      <h1>主页</h1>
    </header>
    <el-button v-for="(item,index) in dataList" :key="index" class="button" type="primary" @click="to_page(item.url)">
      {{ item.name }}
    </el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      dataList: [
        {
          name: '操作mongoDB数据库',
          url: '/to_database'
        },
        {
          name: '生成二维码',
          url: '/to_Erweima'
        },
        {
          name: 'elementUI例子',
          url: '/to_element/el-table'
        }, {
          name: 'iView例子',
          url: '/to_iview/nav'
        },
        {
          name: 'Vant例子',
          url: '/to_vant/button'
        },
        {
          name: '代码高亮编辑器',
          url: '/to_codemirror'
        },
        {
          name: 'backcTop回到顶部',
          url: '/to_backTop'
        },
        {
          name: '显示当前时间',
          url: '/to_date'
        },
        {
          name: 'less的使用',
          url: '/to_less'
        },
        {
          name: 'lodash的使用',
          url: '/to_lodash'
        },
        {
          name: 'tinymce富文本编辑器',
          url: '/to_tinymce'
        },
        {
          name: 'wangeditor富文本编辑器',
          url: '/to_wangeditor'
        },
        {
          name: '验证码',
          url: '/identify'
        },
        {
          name: '地图',
          url: '/to_map'
        },
        {
          name: '制作渐变尖角',
          url: '/to_jiao'
        },
        {
          name: '拖拽',
          url: '/to_draggable'
        },
        {
          name: 'PDF.js',
          url: '/to_pdf'
        },
        {
          name: '全屏',
          url: '/to_screenfull'
        },
        {
          name: 'D3.js的使用',
          url: '/to_d3'
        },
        {
          name:"语音播报",
          url:'/to_audio'
        },
        {
          name:'导出Excel表格',
          url:'/to_excel'
        },
        {
          name:'Echarts图表',
          url:'/to_echarts'
        },
        {
          name:'拖动div宽高',
          url:'/to_drag'
        },
        {
          name:'左树右表',
          url:'/to_tree_table'
        },
        {
          name:'批量添加',
          url:'/to_batch_add'
        },
        {
          name:'内容滚动显示',
          url:'/to_table_roll'
        },
        {
          name:'动画',
          url:'/to_animation'
        },
        {
          name:'上传文件',
          url:'/to_upload_file'
        },
        {
          name:'瀑布流+展开、收起',
          url:'/to_waterfalls_flow'
        }
      ]
    }
  },
  methods: {
    to_page (url) {
      this.$router.push(url)
    }

  }
}
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
  margin-bottom: 20px;
}
</style>
