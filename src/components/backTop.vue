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
      <h3>backTop回到顶部</h3>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import throttle from "throttle-debounce/throttle";

export default {
  name: "backTop",

  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: [String],
    right: {
      type: Number,
      default: 20
    },
    bottom: {
      type: Number,
      default: 20
    }
  },

  data() {
    return {
      el: null,
      container: null,
      visible: false
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

  mounted() {
    this.init();
    this.throttledScrollHandler = throttle(300, this.onScroll);
    this.container.addEventListener("scroll", this.throttledScrollHandler);
  },

  methods: {
      toDatabase() {
      this.$router.push("/");
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

  beforeDestroy() {
    this.container.removeEventListener("scroll", this.throttledScrollHandler);
  }
};
</script>
<style scoped>
#app {
  text-align: center;
  margin-top: 10px;
}
.box {
    height: 1500px;
    background-color: rgb(255, 229, 217);
}
</style>