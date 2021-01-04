<!--
  功能：功能描述
  作者：王代彬
  时间：2020年11月06日 16:52:55
  版本：v1.0
-->
<template>
    <div>
        <i @click="reader" class="el-icon-microphone"></i> //elementUI
        麦克风图标
        <div id="msd-info">{{ words }}</div>
        <button @click="playRead">循环播放语音列表</button>
        <button @click="playPause">暂停语音</button>
        <button @click="playResume">恢复暂停</button>
        <button @click="playCancel">关闭语音列表</button>

        <button @click="voicePrompt('百度语音')">百度语音</button>
        <br>
        <br>
        <el-input
            v-model.lazy="textValue"
            type="textarea"
            autosize
            placeholder="请输入内容后按回车"
            style="width: 300px"
            @keyup.enter.native="voicePrompt(textValue)"
        ></el-input>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            textValue: "",
            words: "警告、警告、警告！",
            arr: [
                {
                    content: "警告一",
                },
                {
                    content: "警告二",
                },
                {
                    content: "警告三",
                },
            ],
            arr1: [],
            timer: null,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        playRead() {
            let content = this.arr[0].content;
            const articleTxt = content.replace(/<[^>]+>/g, ""); //获取富文本的纯文字
            let to_speak = new SpeechSynthesisUtterance(articleTxt);
            to_speak.voiceURI = "Google 普通话（中国大陆）";
            to_speak.rate = 1; // 设置播放语速，范围：0.1 - 10之间
            to_speak.onend = (event) => {
                //语音播放结束时候的回调
                this.arr.push(this.arr[0]);
                this.arr.shift();
                clearTimeout(this.timer);
                // this.timer= setTimeout(() => {
                this.playRead();
                // }, 3000);
            };
            window.speechSynthesis.speak(to_speak);
        },
        playPause() {
            console.log(111);
            window.speechSynthesis.pause();
        },
        playResume() {
            console.log(222);
            window.speechSynthesis.resume();
        },
        playCancel() {
            console.log(333);
            window.speechSynthesis.cancel();
        },
        reader() {
            let readWords = document.getElementById("msd-info").innerText; //获取播报的文字（除去样式）
            var url =
                "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" +
                encodeURI(readWords);
            var n = new Audio(url);
            n.src = url;
            n.play(); //播放阅读
            //  n.cancel();  //取消阅读
            //  n.pause();  //暂停阅读
        },
        voicePrompt(text) {
            new Audio(
                `https://tts.baidu.com/text2audio?cuid=baike&lan=ZH&ie=UTF-8&spd=5&ctp=1&pdt=301&vol=15&rate=32&per=0&tex=${text}`
            ).play();
            // 参数说明：https://ai.baidu.com/ai-doc/SPEECH/zk8hh4v39
            //ie=UTF-8：文字格式。
            //lan=zh：语言是中文，如果改为lan=en，则语言是英文
            //spd：语速,可以是1-9的数字，数字越大，语速越快
            //per：人声
            //vol：音量，"0" 最轻，"15" 最响
            //.play();  //播放阅读
            //  .cancel();  //取消阅读
            //  .pause();  //暂停阅读

            // new Audio(
            //     "http://tts.baidu.com/text2audio?cuid=gaodeid&lan=zh&ctp=1&pdt=311&tex=" +
            //         text
            // ).play();
        },
    },
    created() {
        // this.playRead(
        //     "请注意！谷歌浏览器不支持语音自动播报，必须用户操作触发；但是在一些前端框架中可直接触发"
        // );
    },
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
