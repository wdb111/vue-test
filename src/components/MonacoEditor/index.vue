<template>
    <div>
        monaco-editor
        <div id="monacoId" style="height: 360px;width: 100%;"></div>
    </div>
</template>

<script>

import * as monaco from 'monaco-editor'
export default {
    name: "index",
    data(){
        return{
            monacoEditor: { }
        }
    },
    created(){},
    mounted(){
        // 初始化编辑器，确保dom已经渲染，dialog中要写在opened中
        this.monacoEditor = monaco.editor.create(document.getElementById('monacoId'), {
            value: `<div class="m-body">
        <div class="m-body-bg" :style="config.background"></div>
        <m-header :config="config.top"></m-header>
        <div class="m-content" :style="config.innerContentStyle">
            <div class="m-view-list m-container" :style="containerStyle">
                123
            </div>
            <m-foot-nav :config="config.foot"></m-foot-nav>
        </div>
    </div>`,
            readOnly: true,
            language: 'html',
            theme: 'vs-dark'
        });
    },
    methods:{
        changeEditor() { // 更改editor内容
            this.monacoEditor.setValue(result.data);
            this.monacoEditor.getAction('editor.action.formatDocument')._run();
        },
        destroyEditor() { // 销毁编辑器
            this.monacoEditor.dispose();
        }
    }
}
</script>

<style lang="less" scoped>

</style>
