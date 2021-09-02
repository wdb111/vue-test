<template>
  <div class="box">
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="1"
    >
      <div v-for="item in list" :key="item">
        <div>{{item}}</div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onLoad () {
      console.log(666)
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 80) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  width: 600px;
  height: 500px;
  margin: auto;
}
</style>
