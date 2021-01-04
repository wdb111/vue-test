<!--
  功能：功能描述
  作者：王代彬
  时间：2020年12月22日 09:51:53
  版本：v1.0
-->
<template>
    <div class="grid-box">
        <Row>
            <Col span="8">
                <div class="box1">span</div>
            </Col>
            <Col span="8">
                <div class="box2"></div>
            </Col>
            <Col span="8">
                <div class="box1"></div>
            </Col>
        </Row>
        <br />
        <Row :gutter="16">
            <Col span="8">
                <div class="box1">span、gutter（增加间隔，推荐使用16+8n）</div>
            </Col>
            <Col span="8">
                <div class="box2"></div>
            </Col>
            <Col span="8">
                <div class="box1"></div>
            </Col>
        </Row>
        <br />
        <Row type="flex">
            <Col span="8" order="3">
                <div class="box1"></div>
            </Col>
            <Col span="8" order="1">
                <div class="box2">span、type(flex)、order（调换顺序）</div>
            </Col>
            <Col span="8" order="2">
                <div class="box1"></div>
            </Col>
        </Row>
        <br />
        <Row>
            <Col span="16" push="8">
                <div class="box1"></div>
            </Col>
            <Col span="8" pull="16">
                <div class="box2">span、push（向右移动格数）、pull（向左）</div>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <div class="box1">span、offset(左右偏移)</div>
            </Col>
            <Col span="8" offset="8">
                <div class="box2"></div>
            </Col>
        </Row>
        <br />
        <Row type="flex" justify="space-around">
            <Col span="6">
                <div class="box1">span、type（flex)、justify</div>
            </Col>
            <Col span="6">
                <div class="box2"></div>
            </Col>
            <Col span="6">
                <div class="box1"></div>
            </Col>
        </Row>
        <br />
        <Row type="flex" justify="space-around" align="middle">
            <Col span="6">
                <div class="box1" style="height: 50px">
                    span、type（flex)、justify、align
                </div>
            </Col>
            <Col span="6">
                <div class="box2" style="height: 30px"></div>
            </Col>
            <Col span="6">
                <div class="box1" style="height: 100px"></div>
            </Col>
        </Row>
        <br />
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8">
                <div class="box1">响应式设计</div>
            </Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">
                <div class="box2"></div>
            </Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8">
                <div class="box1"></div>
            </Col>
        </Row>
        <br />
        <Row>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div class="box1">其它属性的响应式</div>
            </Col>
            <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div class="box2"></div>
            </Col>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div class="box1"></div>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: "grid",
    props: {},
    components: {},
    data() {
        return {};
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
.grid-box {
    width: 100%;
    height: 100%;
    .box1 {
        height: 50px;
        line-height: 50px;
        background-color: aqua;
    }
    .box2 {
        height: 50px;
        line-height: 50px;
        background-color: aquamarine;
    }
}
</style>
