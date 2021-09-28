<template>
  <div>
    <h3>底部固定、跟随切换</h3>
    <span>顶部：</span>
    <RadioGroup v-model="topData.type">
      <Radio label="float">浮动</Radio>
      <Radio label="follow">跟随</Radio>
      <Radio label="hide">隐藏</Radio>
    </RadioGroup>
    <span>底部：</span>
    <RadioGroup v-model="footData.type">
      <Radio label="float">浮动</Radio>
      <Radio label="follow">跟随</Radio>
      <Radio label="hide">隐藏</Radio>
    </RadioGroup>
    <span>顶部高度：</span>
    <Input type="number" v-model="topData.height" style="width: 100px"></Input>
    <span>底部高度</span>
    <Input type="number" v-model="footData.height" style="width: 100px"></Input>
    <hr>
    <div class="box" :style="boxStyle">
      <main>
        <header v-if="topData.type!=='hide'" :style="topStyle(topData.type)">标题</header>
        <p>内容开始</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>这是内容。。。。</p>
        <p>内容结尾</p>
        <div class="footer" v-if="footData.type!=='hide'" :style="footStyle(footData.type)">底部</div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      page: {
        top: {
          type: 'hide',
          height: 50
        },
        foot: {
          type: 'hide',
          height: 50
        }
      }
    }
  },
  computed: {
    topData () {
      return this.page.top
    },
    footData () {
      return this.page.foot
    },
    topStyle () {
      return (val)=>{
        let obj={
          height: this.topData.height + 'px'
        }
        if(val==='follow'){
          obj.position = 'static'
        }
        return obj
      }
    },
    boxStyle () {
      let obj = {
        paddingTop: 0,
        paddingBottom: 0
      }
      if (this.topData.type === 'float') {
        obj.paddingTop = `${this.topData.height}px`
      }
      if (this.footData.type === 'float') {
        obj.paddingBottom = `${this.footData.height}px`
      }
      return obj
    },
    footStyle () {
      return (val) => {
        let obj = {
          height: this.footData.height + 'px'
        }
        if (val === 'follow') {
          obj.position = 'static'
        }
        return obj
      }

    }
  },
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.box {
  margin: 20px auto;
  width: 400px;
  height: 600px;
  background-image: url("../../assets/img/2.jpg");
  padding: 50px 0;
  border: 1px solid #333;
  position: relative;
  box-sizing: border-box;
  position: relative;

  header {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #2A3746;
    color: #fff;
  }

  main {
    height: 100%;
    overflow-y: auto;
    //background-color: #e3e3e3;

    p {
      margin: 20px;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    font-size: 12px;
    color: #f1f1f1;
    border-top: 1px solid #333;
    background-color: #c4c4c4;
  }
}
</style>
