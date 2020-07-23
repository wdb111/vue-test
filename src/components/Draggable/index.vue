

<template>
  <div class="hello">
    <div class="drag-field">
      <div
        class="item"
        draggable="true"
        @dragstart="dragstart($event, item)"
        @dragend="dragend"
        v-for="(item, index) in items"
        :key="index"
      >{{ item.label }}</div>
    </div>
    <div class="drop-field" @drop="drop" @dragover.prevent>
      <div class="item" v-if="droppedItem !== ''">{{ droppedItem }}</div>
    </div>
    <div id="app" @mousedown="move">
      <!--绑定按下事件-->
      {{positionX}}
      {{positionY}}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "",
  data() {
    return {
      droppedItem: "",
      items: [
        {
          id: 1,
          label: "模块一"
        },
        {
          id: 2,
          label: "模块二"
        },
        {
          id: 3,
          label: "模块三"
        }
      ],
      positionX: 0,
      positionY: 0
    };
  },
  methods: {
    dragstart(event, item) {
      event.dataTransfer.setData("item", item.label);
    },
    drop(event) {
      this.droppedItem = event.dataTransfer.getData("item");
    },
    dragend(event) {
      event.dataTransfer.clearData();
    },
    move(e) {
      let odiv = e.target; //获取目标元素

      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = e => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;

        //移动当前元素
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  }
};
</script>
<style lang="less" scoped>
.drag-field,
.drop-field {
  height: 10rem;
  box-sizing: border-box;
  padding: 1rem;
  background-color: #eee;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.item {
  width: 30%;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  font-size: 0.9rem;
  background-color: royalblue;
  color: #eee;
}
.item:hover {
  cursor: pointer;
}
#app {
  position: relative; /*定位*/
  top: 10px;
  left: 10px;
  width: 200px;
  height: 200px;
  background: #666; /*设置一下背景*/
}
</style>