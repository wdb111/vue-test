<template>
  <div id="app">
    <el-aside class="aside" :width="isCollapse?'70px':'201px'">
      <el-menu
        :collapse="isCollapse"
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/to_element/el-navmenu/1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/to_element/el-navmenu/10">表格</el-menu-item>
            <el-menu-item index="/to_element/el-navmenu/2">第二页</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="/to_element/el-navmenu/3">第三页</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/to_element/el-navmenu/4">
          <i class="el-icon-menu"></i>
          <span slot="title">第四页</span>
        </el-menu-item>
        <el-menu-item index="/to_element/el-navmenu/5">
          <i class="el-icon-document"></i>
          <span slot="title">第五页</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <div class="right">
      <div style="width:100%">
        <i
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="isCollapse=!isCollapse"
        ></i>
        <span class="leables" :class=" $route.path=== '/to_element/el-navmenu/1' ? 'active' : ''">
          <router-link to="/to_element/el-navmenu/1">首页</router-link>
        </span>
        <Leables
          v-for="(item,index) in tableList"
          :key="index"
          :names="item"
          @removeTable="removeTable"
        />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Leables from "./Leables";
export default {
  components: {
    Leables
  },
  data() {
    return {
      isCollapse: false,
      tableList: []
    };
  },
  methods: {
    removeTable(tag) {
      for (let i = 0; i < this.tableList.length; i++) {
        if (this.tableList[i].path == tag) {
          this.tableList.splice(i, 1);
        }
      }
      if (this.$route.path == tag) {
        if (this.tableList.length > 0) {
          this.$router.push(this.tableList[this.tableList.length - 1].path);
        } else {
          this.$router.push("/to_element/el-navmenu/1");
        }
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    router: function() {
      return this.$route;
    }
  },
  watch: {
    router: {
      handler(value, oldValue) {
        console.log(333, value);
        let offs = this.tableList.every((item, index) => {
          return item.path != value.path; //确保tableList中没有此路由
        });
        if (offs && value.path !== "/to_element/el-navmenu/1") {
          console.log(444);
          this.tableList.push(value); //添加到tableList
        }
      },
      immediate: true //立即执行handler
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 201px;
  min-height: 400px;
}
</style>
<style scoped>
.aside {
  transition: all 0.4s;
}
i {
  cursor: pointer;
}
#app {
  margin-top: 20px;
  display: flex;
  /* flex: auto; */
}
.right {
  display: flex;
  /* flex-direction: column; */
  flex: auto;
}
/* .el-menu-vertical-demo {
  width: 200px;
} */
.leables {
  padding: 5px 10px;
  border: 1px solid #f8c56e;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 5px;
}
.leables a {
  color: #f8c56e;
  text-decoration: none;
}
.active {
  background: #f8c56e;
}
.active a {
  color: #ffffff !important;
}
</style>