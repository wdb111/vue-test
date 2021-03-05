<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月27日 15:47:15
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
    <div>
        <h1>过渡&动画</h1>
        <p>2秒检测一次值是否相等，若不相等，则替换，点击按钮效果相同</p>
        <div class="box">
            <el-input-number v-model="value" :min="0"></el-input-number>
            <button @click="addNum">add</button>
            <div class="wrap">
                <transition name="show">
                    <button class="d" key="aaa" v-if="showValue">
                        {{ oldNnum }}
                    </button>
                    <button class="d" key="bbb" v-else>{{ newNum }}</button>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            value: 0,
            oldNnum: 0,
            newNum: 0,
            showValue: true,
            timer: null,
        };
    },
    methods: {
        addNum() {
            this.newNum = this.value;
            if (this.oldNnum !== this.newNum) {
                this.showValue = !this.showValue;
                this.oldNnum = this.newNum;
            }
        },
    },
    created() {
        this.timer = setInterval(() => {
            this.addNum();
        }, 2000);
    },
    beforeDestroy() {
        this.timer && clearInterval(this.timer);
    },
};
</script> 

<style scoped>
.box {
    width: 300px;
    margin: auto;
}
.d {
    position: absolute;
    width: 50px;
    margin: 10px;
    text-align: center;
}

@keyframes show {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
    }
}

@keyframes hide {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateX(-100%);
    }
}

.show-enter-active {
    animation: show 1.2s;
}

.show-leave-active {
    animation: hide 1.2s;
}

.show-enter,
.show-leave-to {
    opacity: 0;
}

.wrap {
    position: relative;
}
</style>
