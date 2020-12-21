<!--
  功能：功能描述
  作者：王代彬
  时间：2020年11月26日 13:36:47
  版本：v1.0
-->
<template>
    <div id="test">
        <div
            v-for="(item, index) in dataList"
            :key="index"
            :id="'myChart' + item.id"
            style="width: 300px; height: 300px; display: inline-block"
        ></div>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            mychart: [],
            dataList: [
                {
                    id: "1",
                    title: "图一",
                },
                {
                    id: "2",
                    title: "图二",
                },
                {
                    id: "3",
                    title: "图三",
                },
            ],
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        drawLine() {
            for (let i = 0; i <= this.dataList.length; i++) {
                this.mychart.push("mychart-" + i);
                this.$nextTick(() => {
                    this.mychart[i] = this.$echarts.init(
                        document.getElementById("myChart" + i)
                    );
                    // 绘制图表
                    this.mychart[i].setOption({
                        title: { text: "在Vue中使用echarts" },
                        tooltip: {},
                        xAxis: {
                            data: [
                                "衬衫",
                                "羊毛衫",
                                "雪纺衫",
                                "裤子",
                                "高跟鞋",
                                "袜子",
                            ],
                        },
                        yAxis: {},
                        series: [
                            {
                                name: "销量",
                                type: "line",
                                data: [5, 20, 36, 10, 10, 20],
                                label: {
                                    normal: {
                                        show: true,
                                        position: "top",
                                    },
                                },
                            },
                        ],
                    });
                });
            }

            // // 基于准备好的dom，初始化echarts实例
            // let myChart = this.$echarts.init(document.getElementById('myChart'))
            // // 绘制图表
            // myChart.setOption({
            //     title: { text: '在Vue中使用echarts' },
            //     tooltip: {},
            //     xAxis: {
            //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            //     },
            //     yAxis: {},
            //     series: [{
            //         name: '销量',
            //         type: 'bar',
            //         data: [5, 20, 36, 10, 10, 20]
            //     }]
            // });
        },
    },
    created() {},
    mounted() {
        // this.$nextTick(() => {
        this.drawLine();
        // });
    },
};
</script> 

<style lang='less' scoped>
</style>
