<template>
  <div class="container-water-fall">
    <waterfall :col='col'
               :width="itemWidth"
               :gutterWidth="gutterWidth"
               :data="dataList"
               @loadmore="loadmore"
               @scroll="scroll">
      <div v-for="(group,gIndex) in groupList" :key="gIndex">
        <div>{{ group.title }}
          <label @click="collapsable(gIndex)">
            {{ collapsed[gIndex] ? '展开' : '收起' }}
          </label>
        </div>
        <div v-show="!collapsed[gIndex]">
          <div class="cell-item" v-for="(item,index) in group.children" :key="index">
            <img :src="item.photo" alt="加载错误"/>
            <div class="item-body">
              <div class="item-descA">{{ item.title }}</div>
            </div>
          </div>
        </div>

      </div>

    </waterfall>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      col: 2,
      page: 1,
      collapsed: []
    }
  },
  computed: {
    groupList () {
      return [
        {
          title: '分组1',
          children: this.dataList
        },
        {
          title: '分组2',
          children: this.dataList
        }
      ]
    },
    dataList () {
      let arr = []
      for (let i = 0; i < 5; i++) {
        let n = i + 1
        let r = 1000 * i
        let o = {
          photo: 'https://unsplash.it/' + r + '/900?random',
          title: '图片' + n
        }
        arr.push(o)
      }
      return arr
    },
    itemWidth () {
      return (334 * 0.5 * (document.documentElement.clientWidth / 375))
      //rem布局 计算列宽度
      //可以根据自己的rem设置修改这里的 334 值
    },

    gutterWidth () {
      return 20
      // return (36 * 0.5 * (document.documentElement.clientWidth / 375))
      //rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
      //可以根据自己的rem设置修改这里的 36 值
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    // 展开、收起
    collapsable (index) {
      this.$set(this.collapsed, index, !this.collapsed[index])
    },
    //布局
    scroll (scrollData) {
      // console.log(scrollData)
    },
    loadmore (index) {
      //这里是当滑动到底部时，再次请求接口，并且传page，返回的数据给dataList赋值
      //简单粗暴的有了分页功能
    }
  }
}
</script>

<style lang="less" scoped>
/* 流式布局 */
.container-water-fall {
  padding: 10px 3%;
  width: 100%;
  box-sizing: border-box;

  .cell-item {
    /* width: 100%; */
    /* margin-bottom: 18px; */
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-sizing: border-box;
    margin: 10% 0;

    img {
      /* border-radius: 12px 12px 0 0; */
      width: 100%;
      height: auto;
      display: block;
    }

    .item-body {
      .item-descA {
        font-size: 17px;
        color: rgba(46, 44, 42, 1);
        line-height: 17px;
        font-weight: bold;
        margin: 11.5px 0 13px 9px;
      }

      .item-descB {
        font-size: 12px;
        font-weight: 500;
        color: rgba(89, 89, 89, 1);
        line-height: 17px;
        margin: 11.5px 0 13px 9px;
      }
    }
  }
}


.item-footer {
  margin-top: 22px;
  position: relative;
  display: flex;
  align-items: center;
}

.name {
  max-width: 150px;
  margin-left: 10px;
  font-size: 14px;
  color: #999999;
}

.tech-list-ll .tab-bottom {
  padding: 10px 0 !important;
  height: 0 !important;
  background: #fafafa !important;
}
</style>
