<!--
  功能：功能描述
  作者：王代彬
  时间：2020年11月10日 10:45:46
  版本：v1.0
-->
<template>
    <div>
        <div class="box">
            <div class="cj_btn">
                <input value="1" type="radio" id="cjon1" name="turn" />
                <label for="cjon1">开启</label>
            </div>
            <div>
                <input value="0" type="radio" id="cjoff1" name="turn" />
                <label for="cjoff1">关闭</label>
            </div>
            <MyRadio></MyRadio>
            <div>
                <div
                    v-for="(item, index) in dataList"
                    :key="index"
                    :id="'id' + item.id"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>

        <hr />
        <h1>级联样式</h1>
        <Button @click="open('duan')">打开弹窗（段级）</Button>
        <Button @click="open('zhan')">打开弹窗（站级）</Button>
        <Modal v-model="modal1" title="选择分组" width="1000">
            <div class="modal-box">
                <div class="box-left">
                    <template v-for="(item, index) in treeList">
                        <div
                            :class="[
                                'item',
                                current === index ? 'activation' : '',
                            ]"
                            :key="index"
                            @click="selectPar(item, index)"
                        >
                            {{ item.title }}
                        </div>
                    </template>
                </div>
                <div class="box-right">
                    <template v-if="modelValue && childernData.length">
                        <div
                            class="item"
                            v-for="(child, cindex) in childernData"
                            :key="cindex"
                        >
                            <div class="item-left">
                                {{ child.title }} <span>></span>
                            </div>
                            <div class="item-right">
                                <template
                                    v-if="
                                        child.childern && child.childern.length
                                    "
                                >
                                    <span
                                        v-for="(li, bindex) in child.childern"
                                        :key="bindex"
                                        @click="selectThree(child, li)"
                                        >{{ li.title }}</span
                                    >
                                </template>
                                <template v-else
                                    ><div style="text-align: center">
                                        暂无数据
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="!modelValue && childernData.length">
                        <div
                            class="item"
                            v-for="(child, cindex) in childernData"
                            :key="cindex"
                        >
                            <span
                                class="item-two-box"
                                @click="selectTwo(child)"
                                >{{ child.title }}</span
                            >
                        </div>
                    </template>
                    <template v-else>
                        <div
                            style="
                                text-align: center;
                                height: 600px;
                                line-height: 600px;
                            "
                        >
                            暂无数据
                        </div>
                    </template>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <Button @click="modal1 = false">关 闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
// import MyRadio from './child.vue'
export default {
    name: "demo",
    props: {},
    components: {
        MyRadio: () => import("./child.vue"),
    },
    data() {
        return {
            dataList: [],
            modal1: false,
            modelValue: false,
            childernData: [],
            current: 0,
            treeList: [],
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        selectThree(parent, child) {
            console.log(parent, child);
            this.modal1 = false;
        },
        selectTwo(item) {
            console.log(item);
            this.modal1 = false;
        },
        selectPar(item, index) {
            console.log(item)
            this.current = index;
            if (item.childern && item.childern.length) {
                item.childern.forEach((child) => {
                    if (child.childern && child.childern.length) {
                        this.modelValue = true;
                    }
                });
            }
            this.childernData = item.childern || [];
        },
        open(type) {
            this.modelValue = false;
            if (type === "duan") {
                this.treeList = [
                    {
                        id: "cdd",
                        title: "成都段",
                        childern: [
                            {
                                id: "myz",
                                title: "绵阳站",
                            },
                            {
                                id: "xcz",
                                title: "西昌站",
                                childern: [
                                    {
                                        id: "ybbz",
                                        title: "一班班组",
                                    },
                                    {
                                        id: "ebbz",
                                        title: "二班班组",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: "emd",
                        title: "峨眉段",
                        childern: [
                            {
                                id: "pxz",
                                title: "普雄站",
                                childern: [
                                    {
                                        id: "ybbz",
                                        title: "一班班组",
                                    },
                                    {
                                        id: "ebbz",
                                        title: "二班班组",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: "wzd",
                        title: "无站段",
                    },
                ];
            } else {
                this.treeList = [
                    {
                        id: "myz",
                        title: "绵阳站",
                        childern: [
                            {
                                id: "ybbz",
                                title: "一班班组",
                            },
                            {
                                id: "ebbz",
                                title: "二班班组",
                            },
                            {
                                id: "ybbz",
                                title: "一班班组",
                            },
                        ],
                    },
                    {
                        id: "xcz",
                        title: "西昌站",
                        childern: [
                            {
                                id: "ybbz",
                                title: "一班班组",
                            },
                            {
                                id: "ebbz",
                                title: "二班班组",
                            },
                            {
                                id: "ybbz",
                                title: "一班班组",
                            },
                            {
                                id: "ebbz",
                                title: "二班班组",
                            },
                        ],
                    },
                    {
                        id: "pxz",
                        title: "普雄站",
                        childern: [
                            {
                                id: "ybbz",
                                title: "一班班组",
                            },
                            {
                                id: "ebbz",
                                title: "二班班组",
                            },
                        ],
                    },
                    {
                        id: "wzd",
                        title: "无组站",
                    },
                ];
            }
            this.modal1 = true;
            this.selectPar(this.treeList[0], 0);
        },
    },
    created() {
        this.dataList = [
            {
                name: "1",
                id: "1",
            },
            {
                name: "2",
                id: "2",
            },
            {
                name: "3",
                id: "3",
            },
        ];
        this.$nextTick(() => {
            this.dataList.forEach((item) => {
                let div = document.getElementById("id" + item.id);
                console.log(div);
            });
        });
    },
    mounted() {},
};
</script> 

<style lang='less' scoped>
.box {
    margin-top: 100px;
    display: flex;
    justify-content: center;

    .cj_btn1 {
        margin-right: 18px;
    }
    label {
        cursor: pointer;
    }
}
.modal-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 600px;
    overflow-y: auto;
    box-shadow: -3px 3px 3px #e5e5e5, 3px 0px 3px #e5e5e5;
    .box-left {
        min-width: 150px;
        height: 100%;
        overflow-y: auto;
        background-color: #f5f6f7;
        .item {
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-weight: bold;
            font-size: 14px;
            border-left: 3px solid transparent;
            box-sizing: border-box;
            cursor: pointer;
            &:hover {
                background-color: #fff;
                border-color: #0085e8;
            }
        }
        .activation {
            background-color: #fff;
            border-color: #0085e8;
        }
    }
    .box-right {
        width: ~"calc(100% - 150px)";
        height: 100%;
        overflow-y: auto;
        .item {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            height: 80px;
            margin: 0 20px;
            padding: 10px 0;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom: 2px dotted #f2f2f2;
            .item-left {
                min-width: 80px;
                font-weight: bold;
                span {
                    margin-left: 10px;
                }
            }
            .item-right {
                width: ~"calc(100% - 80px)";
                line-height: 30px;
                // padding: 0 20px;
                // box-sizing: border-box;
                span {
                    display: inline-block;
                    margin: 0 10px 0px;
                    cursor: pointer;
                    &:hover {
                        color: #0085e8;
                    }
                }
            }
            .item-two-box {
                cursor: pointer;
                &:hover {
                    color: #0085e8;
                }
            }
        }
        .box-right > div:last-child {
            border: none;
            background-color: red;
        }
    }
}
.dialog-footer {
    text-align: center;
}
</style>
