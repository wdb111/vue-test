<!--
  功能：功能描述
  作者：王代彬
  时间：2021年07月27日 14:55:57
  版本：v1.0
-->
<template>
    <div class="box">
        <van-field
            left-icon="smile-o"
            v-model="message"
            rows="4"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
        />
        <i class="iconfont icondaochu" style="font-size:30px"></i>
        <van-field
            left-icon="iconfont icondaochu"
            icon-prefix="iconfont"
            v-model="message"
            rows="4"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
        />
    </div>
</template>

<script>
export default {
    props: {},
    components: {},
    data() {
        return {
            message: "哈哈",
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
.box {
    width: 500px;
    height: 500px;
    border: 1px solid #333;
}
</style>
