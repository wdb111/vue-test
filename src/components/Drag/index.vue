<!--
  功能：功能描述
  作者：王代彬
  时间：2021年01月18日 12:26:14
  版本：v1.0
-->
<template>
    <div id="drag-box">
        <div id="left-box">
            <div id="top"></div>
            <div id="resize1"></div>
            <div id="middel"></div>
            <div id="resize2"></div>
            <div id="bottom"></div>
        </div>
        <div id="resize3"></div>
        <div id="right-box"></div>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            // screenWidth: window.innerWidth,
            // screenHeight: window.innerHeight,
            // divHeight: 700,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        dragControllerDiv() {
            let dragBox = document.getElementById("drag-box"),
                leftBox = document.getElementById("left-box"),
                rightBox = document.getElementById("right-box"),
                resize1 = document.getElementById("resize1"),
                resize2 = document.getElementById("resize2"),
                resize3 = document.getElementById("resize3"),
                top = document.getElementById("top"),
                middel = document.getElementById("middel"),
                bottom = document.getElementById("bottom");

            resize1.onmousedown = function (e) {
                let startY = e.clientY;
                resize1.top = resize1.offsetTop;
                document.onmousemove = function (e) {
                    let endY = e.clientY;
                    let moveLen = resize1.top + (endY - startY);
                    // let maxT = leftBox.clientHeight - resize1.offsetHeight;
                    if (moveLen < 100) moveLen = 100;
                    if (moveLen > 500) moveLen = 500;
                    //   if (moveLen > maxT - 800) moveLen = maxT - 800
                    resize1.style.top = moveLen;
                    top.style.height = moveLen + "px";
                    middel.style.height =
                        leftBox.clientHeight -
                        bottom.clientHeight -
                        moveLen -
                        12 +
                        "px";
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    resize1.releaseCapture && resize.releaseCapture();
                };
                resize1.setCapture && resize1.setCapture();
                return false;
            };
            resize2.onmousedown = function (e) {
                let startY = e.clientY;
                resize2.top = resize2.offsetTop;
                document.onmousemove = function (e) {
                    let endY = e.clientY;
                    let moveLen =
                        resize2.top + (endY - startY) - top.clientHeight - 5;
                    // let maxT = leftBox.clientHeight - resize2.offsetHeight;
                    if (moveLen < 100) moveLen = 100;
                    if (moveLen > 500) moveLen = 500;
                    //   if (moveLen > maxT - 800) moveLen = maxT - 800
                    resize2.style.top = moveLen;
                    middel.style.height = moveLen + "px";
                    bottom.style.height =
                        leftBox.clientHeight -
                        top.clientHeight -
                        moveLen -
                        12 +
                        "px";
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    resize2.releaseCapture && resize.releaseCapture();
                };
                resize2.setCapture && resize2.setCapture();
                return false;
            };
            resize3.onmousedown = function (e) {
                let startX = e.clientX;
                resize3.left = resize3.offsetLeft;
                document.onmousemove = function (e) {
                    let endX = e.clientX;
                    let moveLen = resize3.left + (endX - startX);
                    if (moveLen < 100) moveLen = 100;
                    if (moveLen > 1800) moveLen = 1800;
                    resize3.style.left = moveLen;
                    top.style.width = moveLen + "px";
                    middel.style.width = moveLen + "px";
                    bottom.style.width = moveLen + "px";
                    leftBox.style.width = moveLen + "px";
                    resize1.style.width = moveLen + "px";
                    resize2.style.width = moveLen + "px";
                    rightBox.style.width = dragBox.clientWidth - moveLen + "px";
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    resize3.releaseCapture && resize.releaseCapture();
                };
                resize3.setCapture && resize3.setCapture();
                return false;
            };
        },
    },
    created() {
    },
    mounted() {
        this.dragControllerDiv();
    },
};
</script>

<style lang='less' scoped>
#drag-box {
    height: ~"calc( 100% - 162px)";
    width: 100%;
    background-color: #eee;
    display: flex;
}
#left-box {
    // flex: 1;
    width: 500px;
    height: 100%;
    position: relative;
}
#resize3 {
    position: relative;
    height: 100%;
    width: 5px;
    background-color: burlywood;
    cursor: e-resize;
}
#right-box {
    width: calc(100% - 505px);
    height: 100%;
    position: relative;
    background-color: greenyellow;
}

#top {
    width: 500px;
    height: ~"calc(30% - 5px)";
    overflow-y: auto;
    border: 1px solid red;
    box-sizing: border-box;
    background-color: red;
}

#resize1,
#resize2 {
    position: relative;
    width: 500px;
    height: 5px;
    background-color: burlywood;
    cursor: s-resize;
}

#middel {
    width: 500px;
    height: 40%;
    overflow: auto;
    background-color: black;
    border: 1px solid black;
    box-sizing: border-box;
}
#bottom {
    width: 500px;
    height: ~"calc(30% - 5px)";
    overflow: auto;
    border: 1px solid blue;
    background-color: blue;
    box-sizing: border-box;
}
</style>
