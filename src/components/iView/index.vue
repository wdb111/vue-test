<template>
    <div class="iview">
        <template v-for="item in data">
            <Button style="margin:10px" :key="item.url" @click="chengeRouter(item.url)">
                {{item.title}}
            </Button>
        </template>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data:[
                {
                    title:"导航栏",
                    url:"/nav"
                },
                {
                    title:"弹窗",
                    url:"/modal"
                },
                {
                    title:"树形结构",
                    url:"/tree"
                },
                {
                    title:"layout布局",
                    url:"/layout"
                },
                {
                    title:"自定义表格",
                    url:'/table'
                },
                {
                    title:"栅栏布局",
                    url:'/grid'
                },
              {
                title:"颜色选择器",
                url:'/color_selector'
              }
            ]
        }
    },
    methods: {
        chengeRouter(url){
            this.$router.push('/to_iview'+url)
        }
    }
}
</script>

<style  scoped>
.iview{
    text-align: center;
}

</style>
