<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年05月24日 11:39:24
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div class="tree_box">
    <div class="tree">
      <Tree :data="data2" show-checkbox @on-check-change="checkNode"></Tree>
    </div>
    <div>
      <CheckboxGroup v-model="fruit" @on-change="checkBtn">
        <template v-for="(item,index) in checkboxList">
          <Checkbox :key="index" :label="item.key">
            <span>{{item.value}}</span>
          </Checkbox>
        </template>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {},
  components: {},
  data() {
    return {
      fruit: [],
      checkboxList: [
        {
          key: "add",
          value: "增添"
        },
        {
          key: "del",
          value: "删除"
        },
        {
          key: "update",
          value: "修改"
        },
        {
          key: "select",
          value: "查询"
        }
      ],
      data2: []
    };
  },
  computed: {},
  methods: {
    checkNode(arr, node) {
      let newArr = [];
      arr.forEach(item => {
        newArr.push(item.id);
      });
      function fn(data2, newArr) {
        data2.forEach(b => {
          if (newArr.includes(b.id)) {
            b.checked = true;
          } else {
            delete b.checked;
          }
          if (b.children && b.children.length > 0) {
            fn(b.children, newArr);
          }
        });
        return data2;
      }
      if (newArr.length > 0) {
        this.data2 = fn(this.data2, newArr);
        //   let _this = this;
        //   if (newArr.length > 0) {
        //     _this.data2.forEach(b => {
        //       if (newArr.includes(b.id)) {
        //         b.checked = true;
        //       } else {
        //         delete b.checked;
        //       }
        //       if (b.children && b.children.length > 0) {
        //         b.children.forEach(d => {
        //           if (newArr.includes(d.id)) {
        //             d.checked = true;
        //           } else {
        //             delete d.checked;
        //           }
        //         });
        //       }
        //     });
      } else {
        this.data2 = [
          {
            id: "1",
            title: "首页",
            children: [
              {
                id: "1-1",
                title: "主页面"
              },
              {
                id: "1-2",
                title: "设备到货"
              },
              {
                id: "1-3",
                title: "设备安装"
              },
              { id: "1-4", title: "检修管理" },
              { id: "1-5", title: "调度管理" }
            ]
          },
          { id: "2", title: "项目管理" },
          { id: "3", title: "问题库" },
          { id: "4", title: "统一管理" },
          {
            id: "5",
            title: "系统管理",
            children: [
              { id: "5-1", title: "部门人员" },
              { id: "5-2", title: "权限管理" },
              { id: "5-3", title: "线别管理" },
              { id: "5-4", title: "车站管理" },
              { id: "5-5", title: "变电所" },
              { id: "5-6", title: "项目管理" }
            ]
          }
        ];
      }
      sessionStorage.setItem("treeData", JSON.stringify(this.data2));
      sessionStorage.setItem("routerList", JSON.stringify(newArr));
      //   console.log(newArr, this.data2);
    },
    checkBtn(val){
        console.log(val)
    }
  },
  created() {
    let arr = [
      {
        id: "1",
        title: "首页",
        children: [
          {
            id: "1-1",
            title: "主页面"
          },
          {
            id: "1-2",
            title: "设备到货"
          },
          {
            id: "1-3",
            title: "设备安装"
          },
          { id: "1-4", title: "检修管理" },
          { id: "1-5", title: "调度管理" }
        ]
      },
      { id: "2", title: "项目管理" },
      { id: "3", title: "问题库" },
      { id: "4", title: "统一管理" },
      {
        id: "5",
        title: "系统管理",
        children: [
          { id: "5-1", title: "部门人员" },
          { id: "5-2", title: "权限管理" },
          { id: "5-3", title: "线别管理" },
          { id: "5-4", title: "车站管理" },
          { id: "5-5", title: "变电所" },
          { id: "5-6", title: "项目管理" }
        ]
      }
    ];
    this.data2 = JSON.parse(sessionStorage.getItem("treeData")) || arr;
    let routerList = JSON.parse(sessionStorage.getItem("routerList")) || [];
    console.log(this.data2, routerList);
  }
};
</script> 

<style lang='less' scoped>
.tree_box {
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
}
</style>
