<template>
  <div id="app">
    <el-button type="primary" @click="toIndex">返回首页</el-button>
    <div class="data">
      <el-button type="primary" @click="dialogFormVisible = true">添加数据</el-button>
      <el-button type="primary" @click="dialogFormVisible1 = true">查询数据</el-button>
    </div>
    <el-dialog title="添加数据" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="addData">
        <el-form-item label="姓名：" :label-width="formLabelWidth">
          <el-input v-model="addData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄：" :label-width="formLabelWidth">
          <el-input v-model="addData.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别：" :label-width="formLabelWidth">
          <el-input v-model="addData.sex" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add(addData)">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查询数据" :visible.sync="dialogFormVisible1" width="40%">
      <el-form :model="selecteData">
        <el-form-item label="姓名：" :label-width="formLabelWidth">
          <el-input v-model="selecteData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄：" :label-width="formLabelWidth">
          <el-input v-model="selecteData.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别：" :label-width="formLabelWidth">
          <el-input v-model="selecteData.sex" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="select(selecteData)">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改数据" :visible.sync="dialogFormVisible2" width="40%">
      <el-form :model="updateData">
        <el-form-item label="姓名：" :label-width="formLabelWidth">
          <el-input v-model="updateData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄：" :label-width="formLabelWidth">
          <el-input v-model="updateData.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别：" :label-width="formLabelWidth">
          <el-input v-model="updateData.sex" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="update(updateData)">确 定</el-button>
      </div>
    </el-dialog>
    <div class="box">
      <div>获取的数据：</div>
      <el-table
        height="373"
        v-loading="loading"
        :data="tableData"
        style="width: 600px;margin:auto;"
      >
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" align="center"></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="updateButton(scope.row)" icon="el-icon-edit"></el-button>
            <el-button type="danger" @click="delet(scope.row)" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="allNum"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { selectValue, addValue, deleteValue, updateValue } from "../../api/public";
export default {
  data() {
    return {
      allTableData: [],
      pageSize: 5,
      pageNum: 0,
      currentPage4: 1,
      allNum: 0,
      loading: false,
      formLabelWidth: "120px",
      addData: {
        name: "",
        age: "",
        sex: ""
      },
      selecteData: {
        name: "",
        age: "",
        sex: ""
      },
      updateData: {
        name: "",
        age: "",
        sex: ""
      },
      oldData: {},
      tableData: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      msg: []
    };
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.tableData = this.allTableData.slice(0, val);
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.tableData = this.allTableData.slice(val * this.pageSize - this.pageSize, val * this.pageSize);
      // console.log(`当前页: ${val}`);
    },
    add(addData) {
      // var a="name"
      // let params = { [a]: "", url: "", type: "", sex: "" };  [a]动态添加key值
      // let params = [
      //   { [addData.key]: addData.value } //[addData.key]动态添加key值
      // ];
      addValue("MY_TABLE", addData).then(res => {
        this.$message({
          message: res.message,
          type: "success"
        });
        this.showTableData();
        this.dialogFormVisible = false;
      });
    },
    select(selecteData) {
      // let params = { sex: "男", age: "12" };
      let params = [];
      if (selecteData.name) {
        params.push({ column: "name", value: selecteData.name });
      }
      if (selecteData.sex) {
        params.push({ column: "sex", value: selecteData.sex });
      }
      if (selecteData.age) {
        params.push({ column: "age", value: selecteData.age });
      }
      this.loading = true;
      this.showTableData(params);
    },
    delet(row) {
      let params = [{ column: "_id", value: row._id }];
      deleteValue("MY_TABLE", params).then(res => {
        if (res.status == "200") {
          this.$message({
            message: res.message,
            type: "success"
          });
        }
        this.showTableData();
      });
    },
    updateButton(row) {
      this.updateData = JSON.parse(JSON.stringify(row));
      this.oldData = row;
      this.dialogFormVisible2 = true;
    },
    update(updateData) {
      let params = [{ column: "_id", value: updateData._id }]; // 查询条件
      let data1 = this.oldData;
      let data2 = updateData;
      let newData = {};
      for (let item1 in data1) {
        for (let item2 in data2) {
          if (item1 == item2) {
            if (data1[item1] != data2[item2]) {
              newData[item1] = data2[item2];
            }
          }
        }
      }
      // let newData = obj; //更新数据
      updateValue("MY_TABLE", params, newData).then(res => {
        if (res.status == "200") {
          this.$message({
            message: res.message,
            type: "success"
          });
        }
        this.dialogFormVisible2 = false;
        this.showTableData();
      });
    },
    //表格显示数据
    showTableData(value) {
      this.currentPage4=1;
      this.loading = true;
      let sch = [];
      if (value) {
        sch = value;
      }
      selectValue("MY_TABLE", sch).then(res => {
        let pageSize = this.pageSize;
        this.allTableData = res.data;
        this.allNum = res.data.length;
        this.tableData = res.data.slice(0,pageSize);
        this.loading = false;
        this.dialogFormVisible1 = false;
        
      });
    }
  },
  created() {
    this.showTableData();
  }
};
</script>
<style scoped>
.box {
  margin-top: 20px;
}
.data {
  margin-top: 20px;
}
#app {
  text-align: center;
  margin-top: 60px;
}
</style>