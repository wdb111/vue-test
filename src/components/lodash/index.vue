<template>
    <div>
        <h1>lodash</h1>
      <a href="https://www.lodashjs.com/" target="_blank">Lodash中文文档</a>
    </div>
</template>
<script>
import _ from "lodash";
export default {
    data () {
        return {

        }
    },
    created () {
        console.log(_.now())
    }
}
</script>
<style  scoped>

</style>
