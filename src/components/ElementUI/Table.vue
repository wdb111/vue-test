<template>
    <div id="app">
        <div>
            <h1>表格配置</h1>
            <div>
                <el-checkbox
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @change="handleCheckAllChange"
                    style="margin: 15px 0"
                    >全选</el-checkbox
                >
                <el-button @click="save">保存</el-button>
            </div>

            <el-checkbox-group
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
            >
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                    city
                }}</el-checkbox>
            </el-checkbox-group>
        </div>
        <el-table
            highlight-current-row
            :show-header="showHeader"
            :header-cell-style="{ background: '#F5F7FA', color: '#606266' }"
            height="400"
            :border="border"
            :stripe="stripe"
            ref="table"
            :data="tableData"
        >
            <el-table-column type="selection"></el-table-column>
            <el-table-column
                v-if="filters"
                key="date1"
                :sortable="sortable"
                :filters="[
                    { text: '2016-05-03', value: '2016-05-03' },
                    { text: '2016-05-02', value: '2016-05-02' },
                ]"
                :filter-method="filterHandler"
                label="日期"
                prop="date"
            ></el-table-column>
            <el-table-column
                resizable
                show-overflow-tooltip
                v-else
                key="date2"
                :sortable="sortable"
                label="日期"
                prop="date"
            ></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column
                header-align="center"
                align="left"
                label="日期"
                prop="date"
            ></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="日期" prop="date"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column
                :fixed="fixed"
                height="200"
                key="caozuo"
                label="操作"
            >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>

        <h1>根据自己的条件合并列</h1>
        <el-table
            :data="listData"
            :span-method="objectSpanMethod1"
            class="tableArea"
            style="width: 100%"
        >
            <el-table-column
                prop="type"
                label="序号"
                align="center"
                width="200"
            />
            <el-table-column prop="sheetType" label="工单类型" />
            <el-table-column prop="taskKey" label="taskKey" />
            <el-table-column prop="templateUrl" label="templateUrl" />
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-tooltip
                        class="item"
                        effect="dark"
                        content="修改"
                        placement="top-start"
                    >
                        <i
                            class="el-icon-edit-outline"
                            @click="modify(scope)"
                        />
                    </el-tooltip>
                    <el-tooltip
                        class="item"
                        effect="dark"
                        content="删除"
                        placement="top-start"
                    >
                        <i class="el-icon-delete" @click="deleteData(scope)" />
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <h1>表格选中及回显</h1>
        <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%"
        >
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
            <el-button @click="setCurrent()">取消选择</el-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        visibilityHeight: {
            type: Number,
            default: 200,
        },
        target: [String],
        right: {
            type: Number,
            default: 40,
        },
        bottom: {
            type: Number,
            default: 40,
        },
    },
    data() {
        return {
            showHeader: true,
            filters: false,
            fixed: false,
            stripe: false,
            border: false,
            sortable: false,
            checkAll: false,
            checkedCities: ["显示表头"],
            cities: [
                "显示表头",
                "斑马纹",
                "边框",
                "固定操作列",
                "排序",
                "筛选",
            ],
            isIndeterminate: true,
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
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333,
                },
            ],
            currentRow: null,
        };
    },
    methods: {
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
          console.log(val)
            this.currentRow = val;
        },
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        },
        handleCheckAllChange(val) {
            this.checkedCities = val ? this.cities : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            this.checkedCities = value;
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < this.cities.length;
        },
        save() {
            this.showHeader = false;
            this.stripe = false;
            this.border = false;
            this.fixed = false;
            this.sortable = false;
            this.filters = false;
            let _this = this;
            this.checkedCities.forEach((item) => {
                switch (item) {
                    case "斑马纹":
                        _this.stripe = true;
                        break;
                    case "边框":
                        _this.border = true;
                        break;
                    case "固定操作列":
                        _this.fixed = "right";
                        break;
                    case "排序":
                        _this.sortable = true;
                        break;
                    case "筛选":
                        _this.filters = true;
                        break;
                    case "显示表头":
                        _this.showHeader = true;
                        break;
                }
            });
        },
        queryData() {
            //查询操作
            this.listData = [
                {
                    id: 1,
                    type: 1,
                    sheetType: "事件单",
                    taskKey: "shijian_01",
                    templateUrl: "/shijian_01",
                },
                {
                    id: 2,
                    type: 1,
                    sheetType: "事件单",
                    taskKey: "shijian_02",
                    templateUrl: "/shijian_02",
                },
                {
                    id: 3,
                    type: 1,
                    sheetType: "事件单",
                    taskKey: "shijian_03",
                    templateUrl: "/shijian_04",
                },
                {
                    id: 4,
                    type: 2,
                    sheetType: "问题单",
                    taskKey: "wenti_01",
                    templateUrl: "/wenti_01",
                },
                {
                    id: 5,
                    type: 2,
                    sheetType: "问题单",
                    taskKey: "wenti_02",
                    templateUrl: "/wenti_02",
                },
                {
                    id: 6,
                    type: 2,
                    sheetType: "问题单",
                    taskKey: "wenti_03",
                    templateUrl: "/wenti_03",
                },
            ];
            this.rowspan();
        },
        rowspan() {
            this.listData.forEach((item, index) => {
                if (index === 0) {
                    this.spanArr.push(1);
                    this.position = 0;
                } else {
                    if (
                        this.listData[index].type ===
                        this.listData[index - 1].type
                    ) {
                        this.spanArr[this.position] += 1;
                        this.spanArr.push(0);
                    } else {
                        this.spanArr.push(1);
                        this.position = index;
                    }
                }
            });
        },
        objectSpanMethod1({ row, column, rowIndex, columnIndex }) {
            //表格合并行
            if (columnIndex === 0) {
                const _row = this.spanArr[rowIndex];
                const _col = _row > 0 ? 1 : 0;
                return {
                    rowspan: _row,
                    colspan: _col,
                };
            }
            if (columnIndex === 1) {
                const _row = this.spanArr[rowIndex];
                const _col = _row > 0 ? 1 : 0;
                return {
                    rowspan: _row,
                    colspan: _col,
                };
            }
        },
        handleCheck(row) {
            const $table = this.$refs.table;
            $table.toggleRowExpansion(row);
            $table.toggleRowSelection(row);
        },
    },
    mounted() {
        this.queryData();
    },
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
.modify_table td {
    padding: 10px;
}
.item_title {
    text-align: right;
}
</style>