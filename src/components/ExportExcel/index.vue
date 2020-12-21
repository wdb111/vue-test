<!--
  功能：功能描述
  作者：王代彬
  时间：2020年11月12日 15:19:48
  版本：v1.0
-->
<template>
    <div class="box">
        <Table :columns="columns1" :data="data1">
            <template slot="img" slot-scope="{row}">
                <img src="http://avatar.csdnimg.cn/9/8/3/2_xiaoxiaojie12321.jpg" alt="">
            </template>
        </Table>
        <Button @click="doit">点击导出表格</Button>
        <p>
            <a
                href="http://momentjs.cn/"
                target="_blank"
                rel="noopener noreferrer"
                >moment.js（时间格式化）</a
            >
        </p>
    </div>
</template>

<script>
import table2excel from "js-table2excel";
import moment from "moment";

export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            columns1: [
                {
                    title: "名字",
                    key: "name",
                },
                {
                    title: "年龄",
                    key: "age",
                },
                {
                    title: "图片",
                    slot: "img",
                },
            ],
            data1: [
                {
                    name: "John Brown",
                    age: 18,
                    img: "https://avatar.csdnimg.cn/9/8/3/2_xiaoxiaojie12321.jpg",
                },
            ],
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        doit() {
            const column = [
                {
                    title: "Name",
                    key: "name",
                    type: "text",
                },
                {
                    title: "Pic",
                    key: "pic",
                    type: "image",
                    width: 80,
                    height: 50,
                },
            ];
            /** column数据的说明 */
            // 1.title为列名
            // 2.key为data数据每个对象对应的key
            // 3.若为图片格式, 需要加type为image的说明,并且可以设置图片的宽高
            const data = [
                {
                    name: "xiao",
                    age: "18",
                    pic: "https://avatar.csdnimg.cn/9/8/3/2_xiaoxiaojie12321.jpg",
                },
                {
                    name: "jie",
                    age: "18",
                    pic: "https://avatar.csdnimg.cn/9/8/3/2_xiaoxiaojie12321.jpg",
                },
            ];
            const excelName = "boy";
            table2excel(column, data, excelName);
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
.box {
    margin-top: 100px;
    text-align: center;
}
</style>
