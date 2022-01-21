<template>
    <van-popover
        v-model="showPopover"
        trigger="click"
        :actions="actions"
        v-if="false"
    >
        <slot name="content">气泡内容</slot>
        <template #reference>
            <slot>触发按钮</slot>
        </template>
    </van-popover>
</template>

<script>
export default {
    name: 'pop',
    data () {
        return {
            showPopover: false
        }
    },
    created () {
    },
    mounted () {
    },
    methods: {}
}
</script>

<style lang="less" scoped>

</style>
