<!--
  功能：功能描述
  作者：王代彬
  时间：2020年09月30日 12:17:19
  版本：v1.0
-->
<template>
    <div>
        <div>
            <h1>全屏及退出全屏页面</h1>
        </div>
        <el-button @click="fullScreen()">全屏</el-button>
        <el-button @click="exitFullscreen()">退出全屏</el-button>
        <div id="screenFull">
            <el-button @click="partScreen()"><i class="el-icon-rank"></i>局部全屏</el-button>
            <el-button @click="exitFullscreen()">退出局部全屏</el-button>
            <div>
                <img src="../../assets/logo.png" alt="" />
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
            fullscreen: false,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        // 监听页面是否全屏
        onResize(){
            let explorer = window.navigator.userAgent.toLowerCase();
            if (explorer.indexOf('chrome') > 0) {//webkit
                this.fullscreen = document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width;
            } else {//IE 9+  fireFox
                this.fullscreen = window.outerHeight === window.screen.height && window.outerWidth === window.screen.width;
            }
        },
        //全屏
        fullScreen() {
            let element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
        },
        //局部全屏
        partScreen() {
            let element = document.getElementById("screenFull");
            let requestMethod =
                element.requestFullScreen ||
                element.webkitRequestFullScreen ||
                element.mozRequestFullScreen ||
                element.msRequestFullScreen;
            if (requestMethod) {
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        },
        //退出全屏
        exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        },
    },
    created() {},
    mounted() {
            this.onResize()
    },
};
</script>

<style lang='less' scoped>
#screenFull {
    background-color: #fff;
}
</style>
