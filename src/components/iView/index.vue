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