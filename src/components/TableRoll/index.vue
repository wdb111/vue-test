<!--
  功能：功能描述
  作者：王代彬
  时间：2021年02月26日 21:25:25
  版本：v1.0
-->
<template>
    <div>
        <div class="drive_box roll4">
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告第一批采购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告第一批采购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告第一批采购计划物资</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告第一批采购计划物资采购招标</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告</span
                >
            </div>
            <div class="roll4_con">
                <span
                    >中国铁路成都局集团有限公司201907第一批采购计划物资采购招标公告</span
                >
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            messages: [
                {
                    message: "asdas",
                    result: "正常",
                    driverNo: "asdfasd",
                    dreverName: "kdgjfhf",
                },
                {
                    message: "asdas",
                    result: "胜多负少的",
                    driverNo: "asdfasd",
                    dreverName: "kdgjfhf",
                },
                {
                    message: "asdas",
                    result: "正常",
                    driverNo: "asdfasd",
                    dreverName: "kdgjfhf",
                },
                {
                    message: "asdas",
                    result: "胜多负少的",
                    driverNo: "asdfasd",
                    dreverName: "kdgjfhf",
                },
            ],
            message: null,
            infobord1: null,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        gundong4(el, el_con) {
            let doscroll = function () {
                let $parent = $("." + el);
                let $first = $parent.find("." + el_con + ":first");
                let height = $first.height();
                $first.animate(
                    {
                        marginTop: -height + "px",
                    },
                    500,
                    function () {
                        $first.css("marginTop", 0).appendTo($parent);
                    }
                );
            };
            let scrollTimer;
            let $this = $("." + el);
            $(".roll4_con").hover(function () {
                $(this).find("img").attr("src", "img/圆_选中.png");
                $(this).siblings().find("img").attr("src", "img/圆-默认.png");
            });
            $this
                .hover(
                    function () {
                        clearInterval(scrollTimer);
                    },
                    function () {
                        scrollTimer = setInterval(function () {
                            doscroll();
                        }, 3000);
                    }
                )
                .trigger("mouseleave");
        },
    },
    created() {},
    mounted() {
        this.$nextTick(() => {
            this.gundong4("roll4", "roll4_con");
        });
    },
};
</script> 

<style lang='less' scoped>
.drive_box {
    margin: 50px;
    height: 100px;
    overflow: hidden;
    border: 1px solid #000;
}
.roll4_con:hover{
    background-color: aqua;
    cursor: pointer;
}
</style>
