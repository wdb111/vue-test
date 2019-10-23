<template>
  <div>
    <el-button type="primary" @click="toDatabase">返回主页面</el-button>
    <h3>
      通过 npm install --save codemirror 下载；然后在组件中直接引用；<br>
      通过 import "codemirror/theme/idea.css"和theme: 'idea'（名字一样）来设置高亮主题
    </h3>
    <div class="box">
      <textarea ref="mycode" class="codesql" v-model="code" style="height:200px;width:600px;"></textarea>
    </div>
  </div>
</template>
<script>
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/theme/idea.css";//引入要使用的主题颜色，不引入则使用默认主题
let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/clike/clike");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/anyword-hint");
export default {
  name: "codeMirror",
  data() {
    return {
      code: "//按Ctrl键进行代码提示"
    };
  },
  methods: {
    toDatabase() {
      this.$router.push("/");
    }
  },
  mounted() {
    let editor = CodeMirror.fromTextArea(this.$refs.mycode, {
      mode: "text/x-java", //选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets: true,
      theme: 'idea',//设置主题，不设置的会使用默认主题
      // autofocus: true,
      extraKeys: { Ctrl: "autocomplete" }, //自定义快捷键
      hintOptions: {
        //自定义提示选项
        tables: {
          users: ["name", "score", "birthDate"],
          countries: ["name", "population", "size"]
        }
      }
    });
    //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
    // editor.on("cursorActivity", function() {
    //   editor.showHint();
    // });
  }
};
</script>
<style scoped>
.box {
  margin-top: 20px;
}
.codesql {
  font-size: 11pt;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
</style>
