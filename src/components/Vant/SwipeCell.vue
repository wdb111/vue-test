<template>
    <div>
        <h3>滑动单元格</h3>
        <div class="container">
            <van-swipe-cell>
                <template #left>
                    <van-button square type="primary" text="选择"/>
                </template>
                <van-cell :border="false" title="单元格" value="内容"/>
                <template #right>
                    <van-button square type="danger" text="删除"/>
                    <van-button square type="primary" text="收藏"/>
                </template>
            </van-swipe-cell>
            <van-swipe-cell>
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    class="goods-card"
                    thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
            </van-swipe-cell>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SwipeCell',
    data () {
        return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {}
}
</script>
<style>
/*.goods-card {*/
/*    margin: 0;*/
/*    background-color: #fff;*/
/*}*/

/*.delete-button {*/
/*    height: 100%;*/
/*}*/
</style>
<style lang="less" scoped>
.container {
    margin: auto;
    width: 300px;
}
</style>
