

<template>
    <div class="hello">
        <h2>
            <a
                href="http://www.itxst.com/vue-draggable/tutorial.html"
                target="_block"
            >
                vuedraggable中文文档
            </a>
        </h2>

        <div>{{ drag ? "拖拽中" : "拖拽停止" }}</div>
        <p>单列拖拽</p>
        <!--使用draggable组件-->
        <draggable
            v-model="myArray"
            chosenClass="chosen"
            forceFallback="true"
            group="people"
            animation="1000"
            @start="onStart"
            @end="onEnd"
        >
            <transition-group>
                <div class="item" v-for="element in myArray" :key="element.id">
                    {{ element.name }}
                </div>
            </transition-group>
        </draggable>
        <br>
        <hr />
        <div style="padding: 10px">
            <!--使用draggable组件-->
            <p>表格拖动</p>
            <div>点击第一列数字进行拖动，其他列拖拽无效</div>
            <table class="itxst">
                <draggable
                    v-model="myArray"
                    animation="500"
                    force-fallback="true"
                    handle=".move"
                    @start="onStart"
                    @end="onEnd"
                    :move="checkMove"
                >
                    <tr v-for="item in myArray" :key="item.id">
                        <td style="width: 50px" class="move">{{ item.id }}</td>
                        <td style="width: 250px">{{ item.name }}</td>
                    </tr>
                </draggable>
            </table>
        </div>
        <hr />
        <br>
        <div>
            <!--使用draggable组件-->
            <p>多列拖拽</p>
            <div class="itxst">
                <div class="col">
                    <div class="title">国内网站</div>
                    <draggable
                        v-model="arr1"
                        group="site"
                        animation="300"
                        dragClass="dragClass"
                        ghostClass="ghostClass"
                        chosenClass="chosenClass"
                        @start="onStart"
                        @end="onEnd"
                    >
                        <transition-group>
                            <div
                                class="item"
                                v-for="item in arr1"
                                :key="item.id"
                            >
                                {{ item.name }}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <div class="col">
                    <div class="title">你可以把左边的元素拖到右边</div>
                    <draggable
                        v-model="arr2"
                        group="site"
                        animation="300"
                        dragClass="dragClass"
                        ghostClass="ghostClass"
                        chosenClass="chosenClass"
                        @start="onStart"
                        @end="onEnd"
                    >
                        <transition-group>
                            <div
                                class="item"
                                v-for="item in arr2"
                                :key="item.id"
                            >
                                {{ item.name }}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//导入draggable组件
import draggable from "vuedraggable";
export default {
    name: "",
    data() {
        return {
            drag: false,
             //定义要被拖拽对象的数组
      arr1:[
        {id:1,name:'www.itxst.com'},
        {id:2,name:'www.jd.com'},
        {id:3,name:'www.baidu.com'},
        {id:3,name:'www.taobao.com'}
        ],
        arr2:[
        {id:1,name:'www.google.com'},
        {id:2,name:'www.msn.com'},
        {id:3,name:'www.ebay.com'},
        {id:4,name:'www.yahoo.com'}
        ] ,
            //定义要被拖拽对象的数组
            myArray: [
                { people: "cn", id: 1, name: "www.itxst.com" },
                { people: "cn", id: 2, name: "www.baidu.com" },
                { people: "cn", id: 3, name: "www.taobao.com" },
                { people: "us", id: 4, name: "www.google.com" },
            ],
        };
    },
    components: {
        draggable,
    },
    methods: {
        checkMove(evt) {
            console.log(evt);
            return true;
        },
        //开始拖拽事件
        onStart() {
            this.drag = true;
        },
        //拖拽结束事件
        onEnd() {
            this.drag = false;
            console.log(this.myArray);
        },
    },
};
</script>
<style lang="less" scoped>
h2 {
    margin-top: 30px;
}
/*被拖拽对象的样式*/
.item {
    display: inline-block;
    padding: 6px;
    background-color: #fdfdfd;
    border: solid 1px #eee;
    margin: 10px;
    cursor: move;
}
/*选中样式*/
.chosen {
    border: solid 2px #3089dc !important;
}
/*定义要拖拽元素的样式*/
table.itxst {
    color: #333333;
    border: #ddd solid 1px;
    border-collapse: collapse;
}
table.itxst th {
    border: #ddd solid 1px;
    padding: 8px;
    background-color: #dedede;
}
table.itxst td {
    border: #ddd solid 1px;
    padding: 8px;
    background-color: #ffffff;
}
table.itxst tr {
    cursor: pointer;
}
table.itxst td.move:hover {
    cursor: move;
}

.ghostClass{
  background-color:  blue !important;
}
.chosenClass{
  background-color: red !important;
  opacity: 1!important;
}
.dragClass{
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow:none !important;
  outline:none !important;
  background-image:none !important;
}
.itxst{
  margin: 10px;
  
}
.title{
  padding: 6px 12px;
}
.col{
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius:5px ;
  float: left;
}
.col+.col{
 margin-left: 10px;
}

.item{
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border:  solid 1px #eee;
   background-color: #f1f1f1;
}
.item:hover{
  background-color: #fdfdfd;
  cursor: move;
}
.item+.item{
  border-top:none ;
  margin-top: 6px;
}
</style>