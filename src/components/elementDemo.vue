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
      class="el-backtop">
      
      <slot>
        <el-icon name="caret-top"></el-icon>
      </slot>
    </div>
  </transition>
    <div id="app">
      <el-button type="primary" @click="toDatabase">返回主页面</el-button>
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
   
  </div>
</template>
<script>
import { getValue } from "../api/public";
import throttle from 'throttle-debounce/throttle';
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
      this.$emit('click', e);
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
    this.container.addEventListener('scroll', this.throttledScrollHandler);
  },
  created() {},
  beforeDestroy() {
    this.container.removeEventListener('scroll', this.throttledScrollHandler);
  }

};
</script>
<style>
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