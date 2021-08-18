<template>
  <div>
    <van-uploader v-model="fileList"
                  :after-read="afterRead"
                  :preview-options="{closeable: true}"
                  preview-size="80"
                  multiple
                  max-count="2"
                  upload-text="请选择"><van-button icon="plus" type="primary"
  >上传文件
  </van-button
  >
    </van-uploader>
  </div>
</template>

<script>
export default {
  name: 'Image',
  data () {
    return {
      fileList: []
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
