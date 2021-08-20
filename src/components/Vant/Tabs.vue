<template>
  <div class="tab-box">
    <van-tabs v-model="active"
              type="line"
              color="green"
              background="#fff"
              line-width="100px"
              line-height="5px"
              animated
              border
              title-active-color="red"
              title-inactive-color="#000"
    >
      <van-tab dot :title="item.title" v-for="(item,index) in list" :key="index">{{ item.content }}</van-tab>
    </van-tabs>
    <van-tabs
        class="box"
        v-model="active1"
        type="card"
        color="green"
        background="#fff"
        title-active-color="red"
        title-inactive-color="#000"
    >
      <van-tab badge="2" :title="item.title" v-for="(item,index) in list" :key="index">{{ item.content }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      active: 0,
      active1: 0,
      list: [
        {
          title: '标签 1',
          content: '内容 1',
          url: 'http://www.baidu.com'
        },
        {
          title: '标签 2',
          content: '内容 2',
          url: 'richText'
        },
        {
          title: '标签 3',
          content: '内容 3',
          url: 'http://www.taobao.com'
        },
        {
          title: '标签 4',
          content: '内容 4',
          url: 'http://www.baidu.com'
        }
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>
<style lang="less">
.van-tabs__nav {
  border-radius: 50px;
  &>.van-tab:first-child{
    border-radius: 50px 0 0 50px;
  }
  &>.van-tab:last-child{
    border-radius: 0 50px 50px 0;
  }
}
</style>
<style lang="less" scoped>
.tab-box {
  margin-top: 50px;
  width: 500px;

  .box {
    margin-top: 50px;
  }
}
</style>
