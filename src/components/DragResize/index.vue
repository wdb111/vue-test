<template>
    <div class="drag-resize-container">
        <a href="https://blog.csdn.net/weixin_33957648/article/details/91423751" target="_blank">vue-drag-resize</a>
        <vue-drag-resize @resizing="onResizing" @clicked="onClicked" @activated="onActivated">
            <img v-bind="imgSize" src="../../assets/img/3.jpg" alt="">
        </vue-drag-resize>
    </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'

export default {
    name: 'index',
    data () {
        return {
            imgSize: {
                width: 200,
                height: 200
            }
        }
    },
    components: {VueDragResize},
    created () {
    },
    mounted () {
    },
    methods: {
        onResizing (obj) {
            let {height, width} = obj
            this.imgSize = {
                height,
                width
            }
        },
        onClicked(){
            console.log('点击')
        },
        onActivated(){
            console.log('点击组件外')
        }
    }
}
</script>

<style lang="less" scoped>
.drag-resize-container {
    margin: 50px auto;
    position: relative;
    width: 400px;
    height: 600px;
    background-color: #eee;
    overflow: hidden;
}
</style>
