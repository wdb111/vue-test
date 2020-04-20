
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider
        ref="side_r"
        collapsible
        :collapsed-width="80"
        v-model="isCollapsed"
        class="bg"
        hide-trigger
      >
        <Menu width="auto" :class="menuitemClasses" accordion theme="light">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />
              <span>内容管理</span>
            </template>
            <MenuItem name="1-1">
              <span>文章管理</span>
              <Icon type="ios-arrow-forward" />
            </MenuItem>
            <MenuItem name="1-2">
              <span>评论管理</span>
              <Icon type="ios-arrow-forward" />
            </MenuItem>
            <MenuItem name="1-3">
              <span>举报管理</span>
              <Icon type="ios-arrow-forward" />
            </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
          <p style="height: 75px"></p>
          <Col span="4">
            <Icon
              @click.native="collapsedSider"
              :class="rotateIcon"
              type="ios-arrow-dropleft-circle"
              size="24"
            ></Icon>
          </Col>
        </Row>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar"></Header>

        <Content :style="{padding: '0 16px 16px'}">
          <div></div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-item", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side_r.toggleCollapse();
    }
  }
};
</script>
<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.layout-header-bar {
  background: #2b85e4;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.rotate-icon {
  transform: translate(-10px, 0px) rotate(-180deg);
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(0px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.bg {
  background: #dcdee2;
}
</style>