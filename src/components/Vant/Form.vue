<!--
  功能：功能描述
  作者：王代彬
  时间：2021年07月23日 14:34:08
  版本：v1.0
-->
<template>
    <div>
        <van-form validate-first @failed="onFailed">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
                v-model="value1"
                name="pattern"
                placeholder="正则校验"
                :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <!-- 通过 validator 进行函数校验 -->
            <van-field
                v-model="value2"
                name="validator"
                placeholder="函数校验"
                :rules="[{ validator, message: '请输入正确内容' }]"
            />
            <!-- 通过 validator 进行异步函数校验 -->
            <van-field
                v-model="value3"
                name="asyncValidator"
                placeholder="异步函数校验"
                :rules="[
                    { validator: asyncValidator, message: '请输入正确内容' },
                ]"
            />
            <van-cell-group>
                <van-field
                    v-model="username"
                    error
                    required
                    label="用户名"
                    placeholder="请输入用户名"
                />
                <van-field
                    v-model="phone"
                    required
                    label="手机号"
                    placeholder="请输入手机号"
                    error-message="手机号格式错误"
                />
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="info" native-type="submit"
                    >提交</van-button
                >
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            username:'',
            phone:'',
            value1: "",
            value2: "",
            value3: "",
            pattern: /\d{6}/,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        // 校验函数返回 true 表示校验通过，false 表示不通过
        validator(val) {
            return /1\d{10}/.test(val);
        },
        // 异步校验函数返回 Promise
        asyncValidator(val) {
            return new Promise((resolve) => {
                Toast.loading("验证中...");

                setTimeout(() => {
                    Toast.clear();
                    resolve(/\d{6}/.test(val));
                }, 1000);
            });
        },
        onFailed(errorInfo) {
            console.log("failed", errorInfo);
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
