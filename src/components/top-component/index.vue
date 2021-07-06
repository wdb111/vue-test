<!--
  功能：功能描述
  作者：王代彬
  时间：2021年06月25日 09:45:01
  版本：v1.0
-->
<template>
    <div class="box">
        <div class="left">
            <div class="left-l">
                <template v-if="formItem.left.show">
                    <Badge
                        :dot="formItem.left.notice"
                        v-if="formItem.left.type === 'icon'"
                    >
                        <Icon
                            type="ios-arrow-back"
                            :size="formItem.left.style.fontSize"
                            :color="formItem.left.style.color"
                        />
                    </Badge>
                    <div
                        v-if="formItem.left.type === 'text'"
                        :style="computedStyle(formItem.left)"
                    >
                        {{ formItem.left.content }}
                    </div>
                </template>
            </div>
            <div class="left-m">
                <template v-if="formItem.center.show">
                    <div
                        class="title"
                        :style="computedStyle(formItem.center.title)"
                    >
                        {{ formItem.center.title.content }}
                    </div>
                    <div
                        class="subtitle"
                        v-if="formItem.center.subtitle.show"
                        :style="computedStyle(formItem.center.subtitle)"
                    >
                        {{ formItem.center.subtitle.content }}
                    </div>
                </template>
            </div>
            <div class="left-r">
                <div v-for="(item, index) in formItem.right" :key="index">
                    <Icon
                        v-if="item.type === 'icon'"
                        type="ios-arrow-back"
                        size="28"
                    />
                    <span v-if="item.type === 'text'">{{ item.content }}</span>
                    <Button v-if="item.type === 'btn'">{{
                        item.content
                    }}</Button>
                </div>
                <template v-if="formItem.right.show">
                    <Icon
                        v-if="formItem.right.type === 'icon'"
                        type="ios-arrow-back"
                        size="28"
                    />
                    <div v-if="formItem.right.type === 'text'">文字</div>
                    <Button v-if="formItem.right.type === 'btn'">按钮</Button>
                </template>
            </div>
        </div>
        <div class="right">
            <Form :model="formItem" :label-width="100">
                <div>左侧：</div>
                <FormItem label="启用通知" style="display: inline-block">
                    <Checkbox v-model="formItem.left.notice"></Checkbox>
                </FormItem>
                <FormItem label="显示" style="display: inline-block">
                    <Checkbox v-model="formItem.left.show"></Checkbox>
                </FormItem>
                <FormItem label="类型">
                    <RadioGroup v-model="formItem.left.type">
                        <Radio label="icon">图标</Radio>
                        <Radio label="text">文字</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="文字" v-if="formItem.left.type === 'text'">
                    <Input
                        v-model="formItem.left.content"
                        placeholder="请输入"
                    ></Input>
                </FormItem>
                <FormItem label="字体大小" style="display: inline-block">
                    <InputNumber
                        :min="1"
                        v-model="formItem.left.style.fontSize"
                    ></InputNumber>
                </FormItem>
                <FormItem label="字体颜色" style="display: inline-block">
                    <ColorPicker v-model="formItem.left.style.color" />
                </FormItem>

                <div>中间：</div>
                <FormItem label="显示" style="display: inline-block">
                    <Checkbox v-model="formItem.center.show"></Checkbox>
                </FormItem>
                <FormItem label="显示副标题" style="display: inline-block">
                    <Checkbox
                        v-model="formItem.center.subtitle.show"
                    ></Checkbox>
                </FormItem>
                <FormItem label="标题">
                    <Input
                        v-model="formItem.center.title.content"
                        placeholder="Enter something..."
                    ></Input>
                </FormItem>
                <FormItem label="位置">
                    <RadioGroup v-model="formItem.center.title.style.textAlign">
                        <Radio label="left">居左</Radio>
                        <Radio label="center">居中</Radio>
                        <Radio label="right">居右</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="字体大小" style="display: inline-block">
                    <InputNumber
                        :min="1"
                        v-model="formItem.center.title.style.fontSize"
                    ></InputNumber>
                </FormItem>
                <FormItem label="字体颜色" style="display: inline-block">
                    <ColorPicker v-model="formItem.center.title.style.color" />
                </FormItem>
                <FormItem label="副标题">
                    <Input
                        v-model="formItem.center.subtitle.content"
                        placeholder="Enter something..."
                    ></Input>
                </FormItem>
                <FormItem label="字体大小" style="display: inline-block">
                    <InputNumber
                        :min="1"
                        v-model="formItem.center.subtitle.style.fontSize"
                    ></InputNumber>
                </FormItem>
                <FormItem label="字体颜色" style="display: inline-block">
                    <ColorPicker
                        v-model="formItem.center.subtitle.style.color"
                    />
                </FormItem>
                <FormItem label="位置">
                    <RadioGroup
                        v-model="formItem.center.subtitle.style.textAlign"
                    >
                        <Radio label="left">居左</Radio>
                        <Radio label="center">居中</Radio>
                        <Radio label="right">居右</Radio>
                    </RadioGroup>
                </FormItem>
                <div>右侧：<Button @click="add(rightType)">添加</Button></div>
                <FormItem label="类型">
                    <RadioGroup v-model="rightType">
                        <Radio label="icon">图标</Radio>
                        <Radio label="text">文字</Radio>
                        <Radio label="btn">按钮</Radio>
                    </RadioGroup>
                </FormItem>
                <div
                    class="right-box"
                    v-for="(item, index) in formItem.right"
                    :key="index"
                >
                    <div>
                        <Icon
                            v-if="item.type === 'icon'"
                            type="ios-arrow-back"
                            size="28"
                        />
                        <span v-if="item.type === 'text'">{{
                            item.content
                        }}</span>
                        <Button v-if="item.type === 'btn'">{{
                            item.content
                        }}</Button>
                    </div>
                    <div>
                        <Icon type="md-create" />
                        <Icon type="ios-trash" @click="del(index)" />
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopComponent",
    props: {},
    components: {},
    data() {
        return {
            rightType: "icon",
            formItem: {
                left: {
                    notice: false,
                    show: true,
                    type: "icon",
                    content: "文字",
                    style: {
                        fontSize: 14,
                        color: "#333",
                    },
                },
                center: {
                    show: true,
                    title: {
                        content: "标题",
                        style: {
                            textAlign: "center",
                            fontSize: 18,
                            color: "#333",
                        },
                    },
                    subtitle: {
                        show: false,
                        content: "副标题",
                        style: {
                            textAlign: "center",
                            fontSize: 12,
                            color: "#999",
                        },
                    },
                },
                right: [
                    {
                        type: "icon",
                        style: {
                            fontSize: 18,
                            color: "#333",
                        },
                    },
                ],
            },
        };
    },
    filters: {},
    computed: {
        computedStyle() {
            return (o) => {
                let textAlign = o.style.textAlign || "left";
                return {
                    fontSize: o.style.fontSize + "px",
                    color: o.style.color,
                    textAlign,
                };
            };
        },
    },
    watch: {},
    methods: {
        add(type) {
            let obj = {
                icon: {
                    type: "icon",
                    style: {
                        fontSize: 28,
                        color: "#333",
                    },
                },
                text: {
                    type: "text",
                    content: "文字",
                    style: {
                        fontSize: 14,
                        color: "#333",
                    },
                },
                btn: {
                    type: "btn",
                    content: "文字",
                    style: {
                        fontSize: 14,
                        color: "#333",
                    },
                },
            };
            this.formItem.right.push(obj[type]);
        },
        del(i) {
            this.formItem.right.splice(i, 1);
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
.box {
    display: flex;
    .left {
        width: 1000px;
        height: 60px;
        display: flex;
        align-items: center;
        border: 1px solid #000;
        .left-l {
            width: 50px;
            text-align: center;
        }
        .left-m {
            flex: auto;
            text-align: center;
            background-color: aqua;
        }
        .left-r {
            min-width: 200px;
            display: flex;
            align-items: center;
            div{
                margin: 0 2px;
            }
        }
    }
    .right-box {
        display: flex;
        justify-content: space-between;
    }
}
</style>
