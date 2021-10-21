<template>
  <div class="box">
    <van-list
        class="vant-list-custom"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        loading-text="."
        @load="onLoad"
        :offset="1"
    >
      <div v-for="item in list" :key="item">
        <div>{{item}}</div>
      </div>
        <van-loading class="custom-loading" v-if="!finished" type="spinner" color="#1989fa" />
        <van-loading class="custom-loading no-circle" v-if="!finished" >加载更多...</van-loading>
        <van-loading class="custom-loading" v-if="!finished" type="spinner" color="#1989fa" text-color="#2B364E">加载更多...</van-loading>
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
        if (this.list.length >= 30) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>
<style lang="less">
.vant-list-custom{
    .van-list__loading{
        display: none;
    }
}
</style>
<style lang="less" scoped>
.box{
  width: 600px;
  height: 200px;
  margin: auto;
    overflow-y: auto;
}
.custom-loading{
    text-align: center;
}
.no-circle{
    .van-loading__spinner {
        display: none;
    }
}
</style>
