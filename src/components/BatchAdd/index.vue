<!--
  功能：功能描述
  作者：王代彬
  时间：2021年02月18日 14:48:30
  版本：v1.0
-->
<template>
    <div>
        <Button class="btn" @click="batchAdd">添加</Button>
        <div class="table-box">
            <div class="title">
                <div>
                    <Checkbox
                        :indeterminate="indeterminate"
                        :value="checkAll"
                        @click.prevent.native="handleCheckAll"
                    ></Checkbox>
                </div>
                <div>ID</div>
                <div>标题1</div>
                <div>标题2</div>
                <div>标题3</div>
                <div>标题4</div>
                <div>标题5</div>
                <div>操作</div>
            </div>
            <div class="content">
                <draggable
                    v-model="dataList"
                    animation="500"
                    force-fallback="true"
                    handle=".move"
                    :move="checkMove"
                >
                    <div class="item" v-for="(row, index) in dataList">
                        <div >
                            <Checkbox
                                @on-change="(val) => changeSelect(val, row)"
                                v-model="row.selected"
                            ></Checkbox>
                        </div>
                        <div class="move" style="cursor: move;">{{ index + 1 }}</div>
                        <div>
                            <Input
                                v-model="row.value1"
                                style="width: 100px"
                                placeholder="Enter something..."
                            />
                        </div>
                        <div>
                            <i-switch size="large" v-model="row.value2">
                                <span slot="open">开启</span>
                                <span slot="close">关闭</span>
                            </i-switch>
                        </div>
                        <div>
                            <Input
                                v-model="row.value3"
                                style="width: 100px"
                                placeholder="Enter something..."
                            />
                        </div>
                        <div>
                            <Input
                                v-model="row.value4"
                                style="width: 100px"
                                placeholder="Enter something..."
                            />
                        </div>
                        <div>
                            <Input
                                v-model="row.value5"
                                style="width: 100px"
                                placeholder="Enter something..."
                            />
                        </div>
                        <div>
                            <Icon type="md-create" @click="updateRow(row)" />
                            <Icon type="md-trash" @click="deleteRow(index)" />
                        </div>
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name: "demo",
    props: {},
    components: { draggable },
    data() {
        return {
            indeterminate: true,
            checkAll: false,
            dataList: [],
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        checkMove(val) {
            return true;
        },
        handleCheckAll() {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;
            this.dataList.forEach((item) => {
                item.selected = this.checkAll;
            });
        },
        changeSelect(val, row) {
            console.log(val, row);
        },
        batchAdd() {
            let obj = {
                selected: false,
                value1: "",
                value2: false,
                value3: "",
                value4: "",
                value5: "",
            };
            this.dataList.push(obj);
        },
        updateRow(row) {
            console.log(row);
        },
        deleteRow(index) {
            this.dataList.splice(index, 1);
        },
    },
    created() {},
    mounted() {},
};
</script>

<style lang='less' scoped>
.btn {
    margin: auto;
    margin-top: 20px;
}
.table-box {
    margin: 20px auto;
    width: 60%;
    height: 600px;
    background-color: #eee;
    .title,
    .item {
        display: flex;
        justify-content: space-around;
        div {
            width: 170px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #2c344d;
            font-weight: 600;
        }
        & > div:first-child,
        & > div:nth-child(2) {
            width: 60px;
        }
        & > div:last-child {
            width: 100px;
        }
    }

    .content {
        height: 560px;
        overflow-y: auto;
        .item {
            margin: 10px 0;
            div {
                font-size: 14px;
                font-weight: 100;
            }
            & > div:last-child {
                font-size: 24px;
                cursor: pointer;
                i:hover {
                    color: rgb(48, 112, 231);
                }
            }
        }
    }
}
</style>
