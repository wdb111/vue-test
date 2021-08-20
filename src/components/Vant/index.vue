<!--
  功能：功能描述
  作者：王代彬
  时间：2021年07月23日 14:20:47
  版本：v1.0
-->
<template>
    <div>
        <el-button
            v-for="item in dataList"
            :key="item.url"
            class="button"
            size="small"
            @click="to_table(item.url)"
            >{{ item.title }}</el-button
        >
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            dataList: [
                {
                    title: "按钮",
                    url: "button",
                },
                {
                    title: "表单",
                    url: "form",
                },
                {
                    title: "选择器",
                    url: "select",
                },
                {
                    title: "文本域",
                    url: "textare",
                },
              {
                title: "文件",
                url: "image",
              },
              {
                title: "富文本",
                url: "richText",
              },
              {
                title: "标签页",
                url: "tabs",
              },
            ],
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        to_table(url) {
            this.$router.push("/to_vant/" + url);
        },
    },
    created() {},
    mounted() {},
};
</script>

<style lang='less' scoped>
</style>
