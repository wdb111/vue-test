<template>
  <div>
    <transition name="el-fade-in">
      <div
        v-if="visible"
        @click.stop="handleClick"
        :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
        class="el-backtop"
      >
        <slot>
          <el-icon name="caret-top"></el-icon>
        </slot>
      </div>
    </transition>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回首页</el-button>
    </div>
    <div class="inputkuang">
      <div class="sub-title">激活即列出输入建议</div>
      <el-autocomplete
        clearable
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
      <el-button type="primary" @click="submit(state1)">提交</el-button>
      <h3>{{msg}}</h3>
    </div>
    <div style="width:300px">
      <el-tabs
        tab-position="right"
        v-model="editableTabsValue"
        type="card"
        editable
        @edit="handleTabsEdit"
      >
        <el-tab-pane
          :key="item.name"
          v-for="(item) in editableTabs"
          :label="item.title"
          :name="item.name"
        >{{item.content}}</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <el-table ref="table" :data="tableData">
    <el-table-column type="selection"></el-table-column>
    <el-table-column label="日期" prop="date"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="附件">
      <template slot-scope="props">
        <el-button type="primary" @click="handleCheck(props.row)">查看附件</el-button>
      </template>
    </el-table-column>
    <el-table-column type="expand">
      <template slot-scope="props">
        <div>{{props.row.name}}</div>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>
<script>
import { getValue } from "../api/public";
import throttle from "throttle-debounce/throttle";
export default {
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: [String],
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
       tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ],
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2,
      el: null,
      container: null,
      visible: false,
      restaurants: [],
      state1: "",
      msg: ""
    };
  },
  computed: {
    styleBottom() {
      return `${this.bottom}px`;
    },
    styleRight() {
      return `${this.right}px`;
    }
  },
  methods: {
     handleCheck(row) {
        const $table = this.$refs.table
        $table.toggleRowExpansion(row)
        $table.toggleRowSelection(row)
      },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
    toDatabase() {
      this.$router.push("/");
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      let major = [];
      getValue("majorManage", [], 0, 0, []).then(res => {
        for (let item of res.data) {
          major.push({ value: item.name, _id: item._id });
        }
      });
      return major;
    },
    handleSelect(item) {
      console.log(item);
    },
    submit(value) {
      this.msg = value;
    },
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },
    onScroll() {
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;
    },
    handleClick(e) {
      this.scrollToTop();
      this.$emit("click", e);
    },
    scrollToTop() {
      let el = this.el;
      let step = 0;
      let interval = setInterval(() => {
        if (el.scrollTop <= 0) {
          clearInterval(interval);
          return;
        }
        step += 10;
        el.scrollTop -= step;
      }, 20);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    this.init();
    this.throttledScrollHandler = throttle(300, this.onScroll);
    this.container.addEventListener("scroll", this.throttledScrollHandler);
  },
  created() {},
  beforeDestroy() {
    this.container.removeEventListener("scroll", this.throttledScrollHandler);
  }
};
</script>
<style>
.el-table__expand-column .cell {
  display: none;
}
</style>
<style scoped>
.inputkuang {
  text-align: center;
  margin-top: 30px;
}
#app {
  text-align: center;
  margin-top: 30px;
}
</style>