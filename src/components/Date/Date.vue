<template>
  <div>
    <p>当前时间：</p>
    <h1>{{ year }}&nbsp;{{nowWeek}}&nbsp;{{Time}}</h1>
    <h1>{{nowTime | formatDate}}</h1>
    <h1></h1>
    <h1></h1>
  </div>
</template>
<script>
export default {
  name: "Date",
  data() {
    return {
      year:"",
      nowTime: new Date(), // 当前时间
      nowWeek: "星期", //星期几,
      Time:"",
    };
  },
  filters: {
    formatDate(time) {
      var moment = require("moment");
      return moment(time).format("YYYY-MM-DD");
    }
  },
  methods: {
    toDatabase() {
      this.$router.push("/");
    }
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    let Dates = new Date();
    let YY=Dates.getFullYear();
    let MM=Dates.getMonth()+1;
    let DD=Dates.getDate();
    let hh = Dates.getHours();
    let mm = Dates.getMinutes();
    let ss = Dates.getSeconds();
    let shijianchuo=Dates.getTime();
    this.year=YY+"年"+MM+"月"+DD+"日"
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (ss < 10) {
      ss = "0" + ss;
    }
    this.Time = hh + ":" + mm + ":" + ss;
    this.timer = setInterval(() => {
      let Dates = new Date(shijianchuo);//利用时间戳自己累加实现实时显示时间
      let hh = Dates.getHours();
      let mm = Dates.getMinutes();
      let ss = Dates.getSeconds();
      if (hh < 10) {
        hh = "0" + hh;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }
      _this.Time = hh + ":" + mm + ":" + ss; // 修改数据date
      shijianchuo=shijianchuo+1000;
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  created() {
    var moment = require("moment");
    var time = new Date();
    var nowTime = moment(time).format("YYYY-MM-DD");
    var dateArray = nowTime.split("-");
    var date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
    var week = "星期" + "日一二三四五六".charAt(date.getDay());
    this.nowWeek = week; // 赋值本地数据
  }
};
</script>
<style scoped>
#app {
  text-align: center;
  margin-top: 10px;
}
</style>