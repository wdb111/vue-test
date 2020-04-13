
<template>
  <div id="app">
    <h1>Tinymce富文本编辑器</h1>
    <div class="tinymce">
      <editor id="tinymce" v-model="tinymceHtml" :init="init"></editor>
    </div>
  </div>
</template>
 
<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
export default {
  name: "tinymce",
  data() {
    return {
      tinymceHtml: "请输入文本",
      init: {
        language_url: "/static/tinymce/zh_CN.js",
        language: "zh_CN",
        skin_url: "/static/tinymce/skins/ui/oxide-dark",
        height: '100%',
        plugins:
          "link lists image code table colorpicker textcolor wordcount contextmenu",
        toolbar:
          "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat",
        branding: false
      }
    };
  },
  methods: {
     toDatabase() {
      this.$router.push("/");
    }
  },
  mounted() {
    tinymce.init({});
  },
  components: { Editor }
};
</script>

<style >
.tinymce {
  height: calc(100% - 102px);
}
.tox-tinymce {
  /* height: 100% !important; */
}
</style>
<style scoped>
#app {
  height: 100%;
}
.app {
  text-align: center;
}
h1 {
  margin-bottom: 20px;
  text-align: center;
}
</style>