<!--
  功能：功能描述
  作者：王代彬
  时间：2021年07月26日 10:00:14
  版本：v1.0
-->
<template>
    <div class="vant-select-custom-box">
        <van-field
            readonly
            clickable
            name="picker"
            :value="value"
            label="选择器"
            placeholder="点击选择城市"
            @click="showPicker = true"
        >
        </van-field>
        <van-popup
            v-model="showPicker"
            :get-container="getContainer"
            position="bottom"
        >
            <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            value: "",
            columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
            showPicker: false,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        //绑定弹窗父级
        getContainer() {
            return document.querySelector(".vant-select-custom-box");
        },
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
    },
    created() {},
    mounted() {},
};
</script> 
<style lang="less">
.van-overlay,
.van-popup {
    position: absolute;
}
</style>
<style lang='less' scoped>
.vant-select-custom-box {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 100px auto;
    background-color: aliceblue;
}
</style>
