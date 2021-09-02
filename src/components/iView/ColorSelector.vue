<template>
  <div class="custom-color-picker-container">
    <template v-for="(item,index) in defaultColor">
      <div v-if="item.type==='selector'" class="custom-color-picker" @click="current=-1">
        <div class="default-color-box">
          <div class="item"></div>
        </div>
        <ColorPicker v-model="colorValue" alpha class="hide-picker"
                     :class="{activeColorPiker:current===-1}"
                     @on-active-change="onActiveChange"/>
      </div>
      <div v-else class="default-color-box"
           :class="{active:current===index}"
           :key="index"
           @click="onSelectColor(item,index)">
        <div class="item" :style="{background:item.type === 'default'?'':item.value}">
          {{ item.type === 'default' ? '默' : '' }}
        </div>
      </div>
    </template>

    <div :style="{margin:'0 20px', width:'100px',height:'50px',background: colorValue}"></div>
  </div>
</template>

<script>
export default {
  name: 'ColorSelector',
  data () {
    return {
      current: -1,
      colorValue: 'rgba(25, 190,107, .5)',
      defaultColor: [
        {
          type: 'default',
          value: '#3366ff'
        },
        {
          type: '',
          value: '#F23030'
        },
        {
          type: '',
          value: '#FF7214'
        },
        {
          type: '',
          value: '#42BD56'
        },
        {
          type: '',
          value: '#3285FF'
        },
        {
          type: 'selector',
          value: ''
        }]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onSelectDefault () {
      this.current = -2
      this.colorValue = '#3366ff'
    },
    onSelectColor (item, index) {
      this.colorValue = item.value
      this.current = index
    },
    onActiveChange (val) {
      this.colorValue = val
    }
  }
}
</script>

<style lang="less">
.hide-picker {
  .ivu-input-icon-normal {
    display: none;
  }

  .ivu-color-picker-color {
    opacity: 0;
  }

  .ivu-input-icon-normal + .ivu-input {
    padding-right: 7px;
  }

  .ivu-input {
    cursor: pointer;
    background-color: transparent;
  }

  .ivu-color-picker-focused {
    box-shadow: none;
  }
}

.activeColorPiker {
  .ivu-input {
    border-color: #57a3f3;
  }
}

</style>
<style lang="less" scoped>
.custom-color-picker-container {
  display: flex;

  .default-color-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    width: 34px;
    height: 32px;
    padding: 4px 7px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;

    &:hover {
      border-color: #57a3f3;
      cursor: pointer;
    }

    .item {
      width: 18px;
      height: 18px;
    }

  }

  .active {
    border-color: #57a3f3;
  }

  .custom-color-picker {
    position: relative;

    .hide-picker {
      position: absolute;
      top: 0;
      left: 4px;
    }

    .item {
      width: 0;
      height: 0;
      border: 10px solid #F23030;
      border-right-color: #FF7214;
      border-bottom-color: #42BD56;
      border-left-color: #3285FF;
    }

  }
}

</style>
