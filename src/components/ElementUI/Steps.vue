<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="数据模型"></el-step>
      <el-step title="视图模型"></el-step>
      <el-step title="流程图"></el-step>
      <el-step title="流程设置"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <div v-if="active==0">数据模型</div>
    <div v-if="active==1">视图模型</div>
    <div v-if="active==2">流程图</div>
    <div v-if="active==3">流程设置</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
<style scoped>
</style>