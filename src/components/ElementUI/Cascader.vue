<template>
  <div id="app">
    <el-button type="success" @click="getvalue">获取数据</el-button>
    <el-cascader
      :props="defaultParams"
      :options="options"
      ref="cascaderAddr"
      v-model="selectedOptions"
      @change="handleAddressFun"
    ></el-cascader>
  </div>
</template>
<script>
export default {
  name: "cascader",
  data() {
    return {
      options: [],
      selectedOptions: [],
      defaultParams: {
        label: "name",
        value: "id",
        children: "sub",
        multiple: true
      }
      // addressOptions: [
      //   {
      //     value: "1",
      //     label: "指南",
      //     children: [
      //       {
      //         value: "2",
      //         label: "设计原则",
      //         children: [
      //           {
      //             value: "3",
      //             label: "一致"
      //           },
      //           {
      //             value: "4",
      //             label: "反馈"
      //           },
      //           {
      //             value: "5",
      //             label: "效率"
      //           },
      //           {
      //             value: "6",
      //             label: "可控"
      //           }
      //         ]
      //       },
      //       {
      //         value: "7",
      //         label: "导航",
      //         children: [
      //           {
      //             value: "8",
      //             label: "侧向导航"
      //           },
      //           {
      //             value: "9",
      //             label: "顶部导航"
      //           }
      //         ]
      //       }
      //     ]
      //   },
      // ]
    };
  },
  methods: {
    handleAddressFun() {
      // 三级地址选择
      // thsAreaCode = this.form.areaCode    // 注意1：获取value值
      const thsAreaCode = this.$refs["cascaderAddr"].getCheckedNodes(); //注意2： 获取label值
      // alert(thsAreaCode); // 注意3： 最终结果是个一维数组对象
      console.log(thsAreaCode);
      console.log(this.selectedOptions);
    },
    getvalue() {
      let options = {
        data: [
          {
            id: "1werdsfdsfds",
            name: "水果",
            level: "1",
            pid: "0",
            status: "1",
            sub: [
              {
                id: "4",
                name: "苹果",
                level: "2",
                pid: "1",
                status: "1"
              },
              {
                id: "8",
                name: "香蕉",
                level: "2",
                pid: "1",
                status: "1"
              }
            ]
          },
          {
            id: "2",
            name: "食品",
            level: "1",
            pid: "0",
            status: "1",
            sub: [
              {
                id: "5",
                name: "馒头",
                level: "2",
                pid: "2",
                status: "1"
              },
              {
                id: "6",
                name: "大米",
                level: "2",
                pid: "2",
                status: "1"
              }
            ]
          }
        ]
      };

      this.options = options.data;
      this. selectedOptions=[
["1werdsfdsfds", "4"],
["1werdsfdsfds", "8"]
      ] 
      console.log(this.options);
    }
  }
};
</script>
<style  scoped>
#app {
  width: 90%;
  margin: 30px auto;
}
</style>