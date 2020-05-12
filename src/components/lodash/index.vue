<template>
    <div>
        <h1>lodash</h1>
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