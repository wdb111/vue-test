<!--
  功能：内嵌组件遮挡
  作者：王代彬
  时间：2021年01月27日 12:33:32
  版本：v1.0
-->
<template>
    <div class="parent-box">
        父组件
        <hr />
        <Child></Child>
    </div>
</template>

<script>
import Child from "./child.vue";
export default {
    name: "demo",
    props: {},
    components: { Child },
    data() {
        return {};
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
.parent-box{
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    background-color: aliceblue;
}
</style>
