<!--
  功能：功能描述
  作者：王代彬
  时间：2020年11月10日 10:45:46
  版本：v1.0
-->
<template>
    <div class="box">
        <div class="cj_btn">
            <input
                v-model="checked"
                value="1"
                type="radio"
                id="cjon"
                name="turn"
                @change="handleCheck"
            />
            <label for="cjon">开启</label>
        </div>
        <div>
            <input
                v-model="checked"
                value="0"
                type="radio"
                id="cjoff"
                name="turn"
                @change="handleCheck"
            />
            <label for="cjoff">关闭</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            checked: "",
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        handleCheck() {
            console.log(this.checked);
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
.box {
    margin-top: 100px;
    display: flex;
    justify-content: center;

    .cj_btn {
        margin-right: 18px;
    }
    label {
        cursor: pointer;
    }
}
input[type="radio"] + label::before {
    content: " "; /*不换行空格*/
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 0.4em;
    border-radius: 50%;
    background: url("../../assets/img/unchecked.png"); /*原始按钮图片地址*/
    background-size: cover;
    cursor: pointer;
}

input[type="radio"]:checked + label::before {
    content: " "; /*不换行空格*/
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 0.4em;
    border-radius: 50%;
    background: url("../../assets/img/checked.png"); /*选中的按钮图片地址*/
    background-size: cover;
    cursor: pointer;
}

input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}
</style>
