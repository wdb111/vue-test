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
    <hr>
    <div style="width:500px">
      <Tree :data="data5" :render="renderContent" class="demo-tree-render"></Tree>
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
      data2: [],
      data5: [
        {
          title: 'parent 1',
          expand: true,
          render: (h, { root, node, data }) => {
            return h('span', {
              style: {
                display: 'inline-block',
                width: '100%'
              }
            }, [
              h('span', [
                h('Icon', {
                  props: {
                    type: 'ios-folder-outline'
                  },
                  style: {
                    marginRight: '8px'
                  }
                }),
                h('span', data.title)
              ]),
              h('span', {
                style: {
                  display: 'inline-block',
                  float: 'right',
                  marginRight: '32px'
                }
              }, [
                h('Button', {
                  props: Object.assign({}, this.buttonProps, {
                    icon: 'ios-add',
                    type: 'primary'
                  }),
                  style: {
                    width: '64px'
                  },
                  on: {
                    click: () => { this.append(data) }
                  }
                })
              ])
            ]);
          },
          children: [
            {
              title: 'child 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  expand: true
                },
                {
                  title: 'leaf 1-1-2',
                  expand: true
                }
              ]
            },
            {
              title: 'child 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  expand: true
                },
                {
                  title: 'leaf 1-2-1',
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'default',
        size: 'small',
      }
    };
  },
  computed: {},
  methods: {
    recursion(data2, newArr) {
      data2.forEach(b => {
        if (newArr.includes(b.id)) {
          b.checked = true;
        } else {
          delete b.checked;
        }
        if (b.children && b.children.length > 0) {
          this.recursion(b.children, newArr);
        }
      });
      return data2;
    },
    checkNode(arr, node) {
      let newArr = [];
      arr.forEach(item => {
        newArr.push(item.id);
      });

      if (newArr.length > 0) {
        this.data2 = this.recursion(this.data2, newArr);
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
    },
    checkBtn(val) {
      console.log(val);
    },
    renderContent (h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-paper-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.title)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-add'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => { this.append(data) }
            }
          }),
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-remove'
            }),
            on: {
              click: () => { this.remove(root, node, data) }
            }
          })
        ])
      ]);
    },
    append (data) {
      const children = data.children || [];
      children.push({
        title: 'appended node',
        expand: true
      });
      this.$set(data, 'children', children);
    },
    remove (root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
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
<style>
.demo-tree-render .ivu-tree-title{
  width: 100%;
}
</style>
<style lang='less' scoped>
.tree_box {
  width: 100%;
  text-align: left
}
</style>
