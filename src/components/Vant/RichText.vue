<template>
  <div>
    <quill-editor
        v-model="editorHtml"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
    </quill-editor>
  </div>
</template>

<script>
import {quillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: 'RichText',
  components: {quillEditor},
  data () {
    return {
      editorHtml: '',
      editorOption: {
        placeholder: '请输入内容'
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onEditorBlur (ev) {
      console.log('失焦：',ev)
      console.log(this.editorHtml)
    },
    onEditorFocus (ev) {
      // console.log('聚焦：',ev)
      // console.log(this.editorHtml)
    },
    onEditorReady (ev) {
      // console.log('加载完成：',ev)
      // console.log(this.editorHtml)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
