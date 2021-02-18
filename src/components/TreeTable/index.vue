<!--
  功能：功能描述
  作者：王代彬
  时间：2021年02月02日 20:12:21
  版本：v1.0
-->
<template>
    <div class="custom-alarm-box">
        <div class="top-box">
            <div class="left">
               <Icon custom="i-icon i-icon-shop_fill" size="24" />
                <span>报警记录</span>
            </div>
            <div>
                <Button type="error"><Icon custom="i-icon i-icon-shop_fill" size="24" /> 删除</Button>
            </div>
        </div>

        <div class="body-box">
            <div class="body-left left-tree">
                <div class="title">查看全部</div>
                <div class="alarm-page-box">
                    <el-tree
                        :data="data5"
                        node-key="id"
                        icon-class="el-icon-arrow-right"
                        highlight-current
                        :expand-on-click-node="false"
                        @node-click="handleNodeClick"
                    >
                        <span
                            class="custom-tree-node"
                            slot-scope="{ node, data }"
                        >
                            <span>
                                <i :class="data.icon"></i>{{ node.label }}
                            </span>
                        </span>
                    </el-tree>
                </div>
            </div>
            <div class="body-right">
                <div class="content">
                    <Form
                        ref="formCustom"
                        :model="formCustom"
                        :label-width="80"
                        inline
                    >
                        <FormItem label="设备编号" prop="passwd">
                            <Input
                                type="password"
                                v-model="formCustom.passwd"
                            ></Input>
                        </FormItem>
                        <FormItem label="报警类型" prop="passwdCheck">
                            <Select v-model="formCustom.passwdCheck" style="width: 120px;" clearable>
                                <Option
                                    v-for="item in alarmTypeList"
                                    :value="item.value"
                                    :key="item.value"
                                    >{{ item.label }}</Option
                                >
                            </Select>
                        </FormItem>
                        <FormItem label="报警时间" prop="age">
                            <DatePicker
                                type="datetimerange"
                                v-model="formCustom.date"
                                placeholder="请选择"
                            ></DatePicker>
                        </FormItem>
                        <FormItem label="报警时长" prop="age">
                            <Select v-model="maxValue" style="width: 90px;margin-right: 10px" clearable>
                                <Option
                                    v-for="item in sectionList"
                                    :value="item.value"
                                    :key="item.value"
                                    >{{ item.label }}</Option
                                >
                            </Select>
                            <InputNumber
                                :min="0"
                                v-model="formCustom.age"
                                style="width: 80px; margin-right: 10px"
                            ></InputNumber>
                            <Select v-model="timeValue" style="width: 50px" clearable>
                                <Option
                                    v-for="item in cityList"
                                    :value="item.value"
                                    :key="item.value"
                                    >{{ item.label }}</Option
                                >
                            </Select>
                        </FormItem>
                        <FormItem :label-width="0">
                            <Button
                                type="primary"
                                @click="handleSubmit('formCustom')"
                                >查询</Button
                            >
                            <Button
                                @click="handleReset('formCustom')"
                                style="margin-left: 8px"
                                >重置</Button
                            >
                        </FormItem>
                    </Form>
                    <div class="alarm-table-box" ref="alarmTable">
                        <Table border stripe :columns="columns1" :data="data1" :height="tabelHeight"></Table>
                    </div>
                </div>
                <div class="foot-box">
                    <Page
                        :page-size="10"
                        :total="100"
                        show-elevator
                        show-sizer
                        show-total
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'demo',
    props: {},
    components: {},
    data() {
        return {
            maxValue:'',
            timeValue:'',
            tabelHeight:0,
            columns1: [
                {
                    type: 'selection',
                    width: 40,
                    align: 'center',
                },
                {
                    title: '设备名称',
                    key: 'name',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '设备编号',
                    key: 'age',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '报警时间',
                    key: 'address',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '报警类型',
                    key: 'name',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '报警类容',
                    key: 'age',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '是否解除',
                    key: 'address',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '解除时间',
                    key: 'name',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '间隔时长',
                    key: 'age',
                    align:'center',
                    tooltip:true
                },
                {
                    title: '车站',
                    key: 'address',
                    align:'center',
                    tooltip:true
                },
            ],
            data1: [
                {
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                },
                {
                   name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                },
                {
                   name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                },
                 {
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                },
                {
                   name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                },
                 {
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                },
                {
                   name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                    name: '智能铁鞋',
                    age: 18,
                    address: '2021-02-01 ',
                    date: '失联',
                },
            ],
            alarmTypeList:[
                {
                    value: 'days',
                    label: '天',
                },
                {
                    value: 'hours',
                    label: '时',
                },
                {
                    value: 'minutes',
                    label: '分',
                },
                {
                    value: 'seconds',
                    label: '秒',
                },
            ],
            cityList: [
                {
                    value: 'days',
                    label: '天',
                },
                {
                    value: 'hours',
                    label: '时',
                },
                {
                    value: 'minutes',
                    label: '分',
                },
                {
                    value: 'seconds',
                    label: '秒',
                },
            ],
            sectionList:[
                {
                    value: 'max',
                    label: '大于',
                },
                {
                    value: 'min',
                    label: '小于',
                },
                {
                    value: 'equal',
                    label: '等于',
                },
                {
                    value: 'max_eq',
                    label: '大于等于',
                },
                {
                    value: 'min_eq',
                    label: '小于等于',
                },
            ],
            formCustom: {
                passwd: '',
                passwdCheck: '',
                date: '',
                age: 0,
            },
            value1: '',
            data5: [
                {
                    id: 1,
                    label: '一级 1',
                    icon: 'el-icon-date',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            icon: 'el-icon-date',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1',
                                    icon: 'el-icon-date',
                                },
                                {
                                    id: 10,
                                    label: '三级 1-1-2',
                                    icon: 'el-icon-date',
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        handleNodeClick(row, node) {
            console.log(row, node);
        },
    },
    created() {},
    mounted() {
        this.$nextTick(()=>{
            this.tabelHeight=this.$refs.alarmTable.offsetHeight;
        })
    },
};
</script> 

<style lang="less" >
.alarm-page-box {
    .el-icon-arrow-right {
        color: #000;
    }
    .el-tree-node__expand-icon.is-leaf {
        opacity: 0;
    }
    .el-tree-node__content {
        height: 36px;
    }
    .custom-tree-node {
        i {
            margin-right: 5px;
        }
    }
}
.alarm-table-box {
    .ivu-table th, .ivu-table td{
        height: 36px;
    }
}
</style>
<style lang='less' scoped>
@import './index.less';
</style>
