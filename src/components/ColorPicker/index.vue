<template>
    <div>
        <h3>颜色选择器</h3>
        <RadioGroup v-model="data.type" @on-change="change">
            <Radio label="sold">纯色</Radio>
            <Radio label="gradual">渐变</Radio>
        </RadioGroup>
        <ColorPicker
            :color="data.color"
            :gradient="data.gradient"
            :isGradient="true"
            :onStartChange="(color) => onChange(color, 'start')"
            :onChange="(color) => onChange(color, 'change')"
            :onEndChange="(color) => onChange(color, 'end')"
        />
    </div>
</template>

<script>
import { ColorPicker } from 'vue-color-gradient-picker'
export default {
  data () {
    return {
      isGradient: false,
      data: {
        type: 'sold',
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
    // isGradient() {
    //   return this.data.type === "gradual";
    // },
  },
  components: { ColorPicker },
  methods: {
    change () {
      console.log(666)
      this.isGradient = true
    },
    onChange (attrs, name) {
      //   this.data.color = { ...attrs };
      if (this.data.type === 'gradual') {
        this.data.gradient = { ...attrs }
      } else {
        this.data.color = { ...attrs }
      }
      console.log(attrs)
    }
  }
}
</script>

<style>
@import 'vue-color-gradient-picker/dist/index.css';
</style>
