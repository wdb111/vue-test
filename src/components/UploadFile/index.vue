<!--
  功能：功能描述
  作者：王代彬
  时间：2021年05月29日 12:57:44
  版本：v1.0
-->
<template>
    <div>
        <h3>上传文件（nodejs）</h3>
        <el-upload
            style="display: inline-block; margin: 0 10px"
            class="upload-demo"
            action="/api/uploadFile"
            :on-success="handleSuccess"
            :on-error="handleError"
        >
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <img src="/api/source/1.jpg" alt="" width="200" height="200">
    </div>
</template>

<script>
export default {
    name: "UploadFile",
    props: {},
    components: {},
    data() {
        return {};
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        // 文件上传成功时的钩子
        handleSuccess(response, file, fileList) {
            // console.log(response, file, fileList);
            this.$message.success("上传成功");
        },
        // 文件上传失败时的钩子
        handleError(err, file, fileList) {
            // console.log(err, file, fileList);
            this.$message.error("上传失败");
        },
    },
    created() {},
    mounted() {},
};
</script>

<style lang='less' scoped>
</style>
