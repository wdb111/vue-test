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
    <h1>尖角、选择前、选择时、选择后，三种颜色变化</h1>
    <div class="box">
      <template v-for="(item,index) in dataList">
        <div
          :key="index"
          :class="[item.actived?'box-light':'box1']"
          :style="{backgroundImage:itemImage(index)}"
          @click="select(index)"
        >
          <i :class="item.icon"></i>
          {{item.title}}
          <div class="box2" :style="{backgroundImage:itemImage(index)}"></div>
          <div
            :class="[item.actived?'point-light':'box3']"
            :style="{width:itemwidth(index)+'px',height:itemwidth(index)+'px',left:itemleft(index)+'px',backgroundColor:itemcolor(index)}"
          ></div>
          <div :class="[item.actived?'light':'box4']"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jiao",
  data() {
    return {
      current: 0,
      dataList: [
        {
          title: "标题1",
          actived: true,
          icon: "iconfont iconshichanshenqingliucheng"
        },
        {
          title: "标题2",
          actived: false,
          icon: "iconfont iconwupinfanghangshenqingliucheng"
        },
        {
          title: "标题3",
          actived: false,
          icon: "iconfont iconwakuangzhongxinzhidushenpiliucheng"
        },
        {
          title: "标题4",
          actived: false,
          icon: "iconfont icongaizhangshenqingliucheng-feihetongleizhizaojiaofu"
        },
        {
          title: "标题5",
          actived: false,
          icon: "iconfont iconsystem_line1"
        },
        {
          title: "标题6",
          actived: false,
          icon: "iconfont iconcustomer_list_line1"
        },
        {
          title: "标题7",
          actived: false,
          icon: "iconfont iconcontract_filed_line1"
        },
        {
          title: "标题8",
          actived: false,
          icon: "iconfont iconinvoice_statistics_line"
        },
        {
          title: "标题9",
          actived: false,
          icon: "iconfont iconuserinfo-anquan"
        }
      ]
    };
  },
  computed: {
    itemwidth() {
      return function(index) {
        if (this.current === index) {
          return 14;
        } else {
          return 12;
        }
      };
    },
    itemleft() {
      return function(index) {
        if (this.current === index) {
          return -41;
        } else {
          return -40;
        }
      };
    },
    itemcolor() {
      return function(index) {
        if (this.current === index) {
          return "#4fd3e1";
        } else {
          return "#239AD6";
        }
      };
    },
    itemImage() {
      return function(index) {
        if (this.current === index) {
          return "linear-gradient(#4fd3e1, #1d71a3)";
        } else {
          return "none";
        }
      };
    }
  },
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
}
.box-light {
  margin-top: 20px;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgb(13, 182, 36);
  .box2 {
    background-color: rgb(13, 182, 36);
  }
}
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
.point-light {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 20px;
  left: -40px;
  z-index: 10;
  border-radius: 50%;
  background-color: #239ad6;
}
.box4 {
  position: absolute;
  top: -38px;
  left: -35px;
  width: 2px;
  height: 58px;
  background-color: #114f78;
}
.light {
  position: absolute;
  top: -38px;
  left: -35px;
  width: 2px;
  height: 58px;
  background-color: #239ad6;
}
.box > div:first-child {
  .light {
    width: 0px;
    height: 0px;
  }
}
</style>
