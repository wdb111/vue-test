<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年05月12日 21:22:38
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div class="jiao">
    <h1>尖角</h1>
    <div class="box">
      <template v-for="(item,index) in dataList">
        <div :key="index" class="box1" :class="{box1active:current===index}" @click="select(index)">
          <i :class="item.icon"></i> {{item.title}}
          <div class="box2"></div>
          <div class="box3">
            <div :class="[item.actived?'light':'box4']"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jiao",
  props: {},
  components: {},
  data() {
    return {
      current: 0,
      dataList: [
        {
          title: "标题1",
          actived: true,
          icon:"iconfont iconshichanshenqingliucheng"
        },
        {
          title: "标题2",
          actived: false,
          icon:"iconfont iconwupinfanghangshenqingliucheng"
        },
        {
          title: "标题3",
          actived: false,
          icon:"iconfont iconwakuangzhongxinzhidushenpiliucheng"
        },
        {
          title: "标题4",
          actived: false,
          icon:"iconfont icongaizhangshenqingliucheng-feihetongleizhizaojiaofu"
        },
        {
          title: "标题5",
          actived: false,
          icon:"iconfont iconsystem_line1"
        },
        {
          title: "标题6",
          actived: false,
          icon:"iconfont iconcustomer_list_line1"
        },
        {
          title: "标题7",
          actived: false,
          icon:"iconfont iconcontract_filed_line1"
        },
        {
          title: "标题8",
          actived: false,
          icon:"iconfont iconinvoice_statistics_line"
        },
        {
          title: "标题9",
          actived: false,
          icon:"iconfont iconuserinfo-anquan"
        }
      ]
    };
  },
  computed: {},
  methods: {
    select(index) {
      this.current = index;
      this.dataList[index].actived = true;
    }
  },
  created() {}
};
</script> 

<style lang='less' scoped>
.jiao {
  min-height: 450px;
  color: #fff;
  background-color: #2d2d2d;
}
.box {
  padding-left: 80px;
  box-sizing: border-box;
}
.box1 {
  margin-top: 20px;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  background-color: gainsboro;
  .box2 {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 15px;
    left: -20px;
    background-color: gainsboro;
  }
  .box2::after {
    content: "";
    width: 0;
    height: 0;
    right: 0;
    border-top: 10px solid #2d2d2d;
    border-bottom: 10px solid #2d2d2d;
    border-left: 15px solid #2d2d2d;
    border-right: 10px solid transparent;
    position: absolute;
  }
  .box3 {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 20px;
    left: -40px;
    border-radius: 50%;
    background-color: #114f78;
  }
}
.box4 {
  position: absolute;
  top: -58px;
  left: 5px;
  width: 2px;
  height: 58px;
  background-color: #114f78;
}
.light {
  position: absolute;
  top: -58px;
  left: 5px;
  width: 2px;
  height: 58px;
  background-color: #239AD6;
}
.box1active {
  background-image: linear-gradient(#4fd3e1, #1d71a3);
  .box2 {
    background-image: linear-gradient(#40b6cf, #2b8db5);
  }
  .box3 {
    width: 14px;
    height: 14px;
    left: -41px;
    z-index: 10;
    background-color: #4fd3e1;
    .light {
      left: 6px;
    }
  }
}

.box > div:first-child {
  .box3 {
    .light {
      width: 0px;
      height: 0px;
    }
  }
}
</style>
