<!--
  功能：功能描述
  作者：王代彬
  时间：2021年02月26日 21:25:25
  版本：v1.0
-->
<template>
    <div>
        <h3>内容超出时滚动</h3>
        <div class="security_info" id="right_text_top_box">
            <div id="right_text_top1">
                <div
                    v-for="(item, index) in messages"
                    :key="index"
                    @click="checkedRow(item)"
                >
                    {{ item.name }}
                </div>
            </div>
            <div id="right_text_top2" v-if="allowRoll">
                <div
                    v-for="(item, index) in messages"
                    :key="index"
                    @click="checkedRow(item)"
                >
                    {{ item.name }}
                </div>
            </div>
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
            messages: [
                {
                    name: "1胜多负少的鬼地方个梵蒂冈梵蒂冈",
                    id: "1",
                },
                {
                    name: "2孤鸿寡鹄接发广告",
                    id: "2",
                },
                {
                    name: "3好几款加了个放电饭锅单方事故电饭锅",
                    id: "3",
                },
                {
                    name: "4让他一人头有try让他一人头有如图",
                    id: "4",
                },
                {
                    name: "5不VNVB女包女不女保存V型",
                    id: "5",
                },
                {
                    name: "6发给红军号狂欢节",
                    id: "6",
                },
                {
                    name: "7金龟换酒体育部VN框架宽度改地方个梵蒂冈",
                    id: "7",
                },
                {
                    name: "8下再擦拭地方个梵蒂冈发",
                    id: "8",
                },
                {
                    name: "9建行卡号健康就好健康就好狂欢节狂欢节",
                    id: "9",
                },
                {
                    name: "10发给红军发个话费和规范化号狂欢节",
                    id: "10",
                },
            ],
            allowRoll:false,
            myScrollTopTimer: null,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        checkedRow(row) {
            console.log(row.id);
        },
        doitScollTop() {
            let test = document.getElementById("right_text_top_box");
            let test1 = document.getElementById("right_text_top1");
            // let test2 = document.getElementById("right_text_top2");
            this.allowRoll=test1.offsetHeight >= test.offsetHeight;
            // if (test1.offsetHeight >= test.offsetHeight) {
            //     test2.innerHTML = test1.innerHTML;
            // }
            function move() {
                if (test.scrollTop >= test1.offsetHeight) {
                    test.scrollTop = 0;
                } else {
                    test.scrollTop++;
                }
            }
            let _this = this;
            this.myScrollTopTimer = setInterval(move, 50);
            test.onmouseover = function () {
                clearInterval(_this.myScrollTopTimer);
            };
            test.onmouseout = function () {
                _this.myScrollTopTimer = setInterval(move, 50);
            };
        },
    },
    created() {},
    mounted() {
        this.$nextTick(() => {
            this.doitScollTop();
        });
    },
    beforeDestroy() {
        this.myScrollTopTimer && clearInterval(this.myScrollTopTimer);
    },
};
</script> 

<style lang='less' scoped>
.security_info {
    width: 300px;
    height: 200px;
    margin: 200px auto;
    overflow: hidden;
    border: 1px solid #000;
    #right_text_top1,
    #right_text_top2{
        & div:hover {
            background-color: turquoise;
            cursor: pointer;
        }
    }
}
</style>
