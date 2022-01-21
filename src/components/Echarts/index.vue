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
        <div
            id='myChart'
            style="width: 500px; height: 300px; display: inline-block"
        ></div>
    </div>
</template>

<script>

export default {
    name: 'demo',
    props: {},
    components: {},
    data () {
        return {
            myChart: [],
            dataList: [
                {
                    id: '1',
                    title: '图一'
                },
                {
                    id: '2',
                    title: '图二'
                },
                {
                    id: '3',
                    title: '图三'
                }
            ],
            chart: null
        }
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        drawLine () {
            for (let i = 0; i <= this.dataList.length; i++) {
                this.myChart.push('myChart-' + i)
                this.$nextTick(() => {
                    this.myChart[i] = this.$echarts.init(
                        document.getElementById('myChart' + i)
                    )
                    // 绘制图表
                    this.myChart[i].setOption({
                        title: {text: '在Vue中使用echarts'},
                        tooltip: {},
                        xAxis: {
                            data: [
                                '衬衫',
                                '羊毛衫',
                                '雪纺衫',
                                '裤子',
                                '高跟鞋',
                                '袜子'
                            ]
                        },
                        yAxis: {},
                        series: [
                            {
                                name: '销量',
                                type: 'line',
                                data: [5, 20, 36, 10, 10, 20],
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                }
                            }
                        ]
                    })
                })
            }

            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            let list=[{
                value: '1',
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },
                {
                    value: '2',
                    name: '价格',
                    type: 'bar',
                    data: [50, 200, 360, 100, 100, 200]
                }]
            myChart.setOption({
                // title: {text: '在Vue中使用echarts'},
                tooltip: {},
                legend: {
                    show: true,
                    formatter: (name,b) => {
                        console.log(name,b)
                        let obj=list.find(x=>x.name===name)
                        return obj.value
                    }
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: list
            })
        }
    },
    created () {
    },
    mounted () {
        this.drawLine()
    }
}
</script>

<style lang='less' scoped>
</style>
