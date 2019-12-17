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
    <div>合并列</div>
    <el-table
      :data="tableData1"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
    </el-table>
    <h1>根据自己的条件合并列</h1>
    <el-table
        :data="listData"
        :span-method="objectSpanMethod1"
        class="tableArea"
        style="width: 100%">
        <el-table-column
          prop="type"
          label="序号"
          align="center"
          width="200"/>
        <el-table-column
          prop="sheetType"
          label="工单类型"
          />
        <el-table-column
          prop="taskKey"
          label="taskKey"
          />
        <el-table-column
          prop="templateUrl"
          label="templateUrl"
          />
        <el-table-column
          label="操作"
          >
          <template slot-scope="scope">
          	<el-tooltip class="item" effect="dark" content="修改" placement="top-start">
				      <i class="el-icon-edit-outline"  @click="modify(scope)" />
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
            <i class="el-icon-delete" @click="deleteData(scope)" />
				    </el-tooltip>
          </template>
        </el-table-column >
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
      rowList: [],
      spanArr: [],
      position: 0,
      listData: [],
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
      ],
      tableData1: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
    };
  },
  methods: {
  	queryData(){//查询操作
  		this.listData = [
  			{
        	id:1,
          type:1,
          sheetType: "事件单",
          taskKey: "shijian_01",
          templateUrl: "/shijian_01"
        },
        {
        	id:2,
          type:1,
          sheetType: "事件单",
          taskKey: "shijian_02",
          templateUrl: "/shijian_02"
        },
        {
        	id:3,
          type:1,
          sheetType: "事件单",
          taskKey: "shijian_03",
          templateUrl: "/shijian_04"
        },
        {
        	id:4,
          type:2,
          sheetType: "问题单",
          taskKey: "wenti_01",
          templateUrl: "/wenti_01"
        },
        {
        	id:5,
          type:2,
          sheetType: "问题单",
          taskKey: "wenti_02",
          templateUrl: "/wenti_02"
        },
        {
        	id:6,
          type:2,
          sheetType: "问题单",
          taskKey: "wenti_03",
          templateUrl: "/wenti_03"
        }
  		];
		  this.rowspan()
  	},
  	rowspan() {
  		this.listData.forEach((item,index) => {
	    	if( index === 0){
	    		this.spanArr.push(1);
	    		this.position = 0;
	    	}else{
	    		if(this.listData[index].type === this.listData[index-1].type ){
	    			this.spanArr[this.position] += 1;
	    			this.spanArr.push(0);
	    		}else{
	    			this.spanArr.push(1);
	    			this.position = index;
	    		}
	    	}
	    })
  	},
    objectSpanMethod1({ row, column, rowIndex, columnIndex }) {  //表格合并行
    	if (columnIndex === 0) {
    		const _row = this.spanArr[rowIndex];
    		const _col = _row>0 ? 1 : 0;
    		return {
    			rowspan: _row,
    			colspan: _col
    		}
    	}
    	if(columnIndex === 1){
    		const _row = this.spanArr[rowIndex];
    		const _col = _row>0 ? 1 : 0;
    		return {
    			rowspan: _row,
    			colspan: _col
    		}
    	}
    },
     objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      //  console.log(row,column, rowIndex, columnIndex)
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
    handleCheck(row) {
      const $table = this.$refs.table;
      $table.toggleRowExpansion(row);
      $table.toggleRowSelection(row);
    }
  },
  mounted() {
    this.queryData();
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
.el-select {
  margin-right: 15px;
}
.el-input {
  margin-right: 15px;
  width: 200px;
}
.tableArea {
  margin-top: 20px;
  box-shadow: 0 0 8px 0 #aaa;
}
i[class^="el-icon"] {
  margin-right: 5px;
  font-size: 16px;
  cursor: pointer;
}
.modify_table td{
		padding: 10px ;
	
}
.item_title{
	text-align: right;	
}
</style>