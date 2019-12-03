<template>
  <div id="app">
    <el-table ref="table" :data="tableData">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="附件">
        <template slot-scope="props">
          <el-button type="primary" @click="handleCheck(props.row)">查看附件</el-button>
        </template>
      </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <div>{{props.row.name}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
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
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    handleCheck(row) {
      const $table = this.$refs.table;
      $table.toggleRowExpansion(row);
      $table.toggleRowSelection(row);
    }
  }
};
</script>
<style>
.el-table__expand-column .cell {
  display: none;
}
</style>
<style scoped>
#app {
  width: 90%;
  margin: 30px auto;
}
</style>