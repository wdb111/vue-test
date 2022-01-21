<template>
    <div class="box" style="margin-left: 100px">
        <div>
            <h3>渐变色</h3>
            <RadioGroup v-model="data.type">
                <Radio label="sold">纯色</Radio>
                <Radio label="gradual">渐变</Radio>
            </RadioGroup>
            <div :style="divStyle"></div>
            <GradientColorPicker
                :color="data.color"
                :gradient="data.gradient"
                :isGradient="true"
                :onStartChange="(color) => onChange(color, 'start')"
                :onChange="(color) => onChange(color, 'change')"
                :onEndChange="(color) => onChange(color, 'end')"
            />
        </div>
        <div>
            <h3>带吸附工具</h3>
            <p>{{ color1 }}</p>
            <colorPicker v-model="color1"/>
        </div>


    </div>
</template>

<script>
import {ColorPicker as GradientColorPicker} from 'vue-color-gradient-picker'

export default {
    data () {
        return {
            gradient: false,
            color1: '#ff0000',
            data: {
                type: 'gradual',
                color: {
                    red: 255,
                    green: 0,
                    blue: 0,
                    alpha: 1
                },
                gradient: {
                    type: 'linear',
                    degree: 0,
                    points: [
                        {
                            left: 0,
                            red: 0,
                            green: 0,
                            blue: 0,
                            alpha: 1
                        },
                        {
                            left: 100,
                            red: 255,
                            green: 0,
                            blue: 0,
                            alpha: 1
                        }
                    ]
                }
            }
        }
    },
    computed: {
        divStyle () {
            let style = {
                width: '100px',
                height: '100px',
                background: this.data.gradient.style
            }
            return style
        }
    },
    components: {GradientColorPicker},
    methods: {
        onChange (attrs) {
            if (this.data.type === 'gradual') {
                this.data.gradient = {...attrs}
            } else {
                this.data.color = {...attrs}
            }
            console.log(this.data,attrs)
        }
    }
}
</script>

<style>
@import 'vue-color-gradient-picker/dist/index.css';
</style>
<style lang="less" scoped>
.box {
    margin-left: 100px;
    display: flex;
    div{
        margin-left: 50px;
    }
}
</style>
