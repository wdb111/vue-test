<!--
  功能：功能描述
  作者：王代彬
  时间：2020年11月04日 17:27:42
  版本：v1.0
-->
<template>
  <div>
    <Button @click="modal1 = true">打开弹窗</Button>
    <Table row-key="id" :columns="columns16" :data="data12" border>
      <template slot="action" slot-scope="{row}">
        <Button @click="addTree(row)">添加</Button>
      </template>
    </Table>
    <Modal v-model="modal1" title="标题" fullscreen>
      <div class="box">
        <div>
          <h3>停留车辆防溜检查巡视登记簿</h3>
          <Button @click="init">生成图片</Button>
          <a class="down" href="" download="downImg">下载</a>
        </div>
        <div>
          <Button type="primary" @click="addData"
          >
            <Icon type="md-add-circle"/>
            添加
          </Button
          >
        </div>
      </div>
      <div class="middle-box" ref="imageTofile">
        <Table :columns="columns1" :data="data1">
          <template slot-scope="{ row }" slot="time">
            <DatePicker
                clearable
                v-model="row.date"
                type="datetime"
                format="yyyy-MM-dd"
                placeholder="请选择"
                transfer
            ></DatePicker>
          </template>
          <template slot-scope="{ row }" slot="checkPerson">
            <Select v-model="row.checkPerson" transfer clearable>
              <Option
                  v-for="item in person"
                  :value="item.value"
                  :key="item.value"
              >{{ item.label }}
              </Option
              >
            </Select>
          </template>
          <template slot-scope="{ row }" slot="track">
            <Select v-model="row.track" transfer clearable>
              <Option
                  v-for="item in cityList"
                  :value="item.value"
                  :key="item.value"
              >{{ item.label }}
              </Option
              >
            </Select>
          </template>
          <template slot-scope="{ row }" slot="checkLine">
            <div v-if="row.track">
                            <span class="shebei-box">
                                <i
                                    class="iconfont iconzhijiao-triangle shebei"
                                    title="智能铁鞋"
                                ></i>
                                <span>01</span>
                            </span>

              <span class="putong shebei-box">
                                <i
                                    class="iconfont iconzhijiao-triangle shebei"
                                    title="普通铁鞋"
                                ></i>
                                <span>02</span>
                            </span>
              <span class="shebei-box shouzha">
                                <i
                                    class="iconfont iconquxiao shebei"
                                    title="手闸"
                                ></i>
                                <span>2位</span>
                            </span>

              <div class="car shebei-box" title="车厢">
                1234567
              </div>
              <span class="shebei-box jinguqi-box">
                                <i
                                    class="iconfont iconmeiyuan jinguqi"
                                    title="紧固器"
                                ></i>
                                <span class="wei">2位</span>
                                <span class="code">03</span>
                            </span>

              <div class="zhenmu shebei-box" title="防溜枕木">
                <div></div>
                <div></div>
              </div>
              <span class="shebei-box">
                                <span>03</span>
                                <i
                                    class="iconfont iconzhijiao-triangle shebei fanzhuan"
                                    title="智能铁鞋"
                                ></i>
                            </span>
              <span class="shebei-box">
                                <span>04</span>
                                <span class="putong putongfanzhuan">
                                    <i
                                        class="iconfont iconzhijiao-triangle shebei"
                                        title="普通铁鞋"
                                    ></i>
                                </span>
                            </span>
            </div>
          </template>

          <template slot-scope="{ row }" slot="content">
            <Input
                v-model="row.content"
                type="textarea"
                placeholder="请输入..."
                style="margin: 10px 0"
            />
          </template>
          <template slot-scope="{ row }" slot="remark">
            <Input
                v-model="row.remark"
                type="textarea"
                placeholder="请输入..."
                style="margin: 10px 0"
            />
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Icon
                title="确认"
                class="myIcon"
                type="md-checkmark-circle"
                @click="isOk(row, index)"
            />
            <Icon
                title="删除"
                class="myIcon"
                type="md-close-circle"
                @click="isDelete(index)"
            />
          </template>
        </Table>
      </div>

      <div class="box1">
        <h3>防溜交接</h3>
      </div>
      <Table :columns="columns2" :data="data2"></Table>
      <div class="box1">
        <h3>交接班</h3>
      </div>
      <div class="jjb-box">
        <div>
          <div>
            <div class="title titleLeft">交班人员信息</div>
            <div class="jiaobanLeft">交班班次：三班</div>
            <div class="jiaobanLeft">交班人员：张三</div>
            <div class="jiaobanLeft">
              交班密码：
              <Input
                  style="width: 240px"
                  type="password"
                  v-model="shiftOverPasswd"
                  placeholder="请输入密码"
              ></Input>
            </div>
          </div>
          <div>
            <div class="title">接班人员信息</div>
            <div class="jiaoban">
              接班班次：
              <Select
                  style="width: 240px"
                  v-model="successionClass"
                  placeholder="请选择"
                  label-in-value
              >
                <Option
                    v-for="item in person"
                    :value="item.value"
                    :key="item.value"
                >{{ item.label }}
                </Option
                >
              </Select>
            </div>
            <div class="jiaoban">
              接班人员：
              <Select
                  style="width: 240px"
                  v-model="successionPerson"
                  placeholder="请选择"
                  label-in-value
              >
                <Option
                    v-for="item in person"
                    :value="item.value"
                    :key="item.value"
                >{{ item.label }}
                </Option
                >
              </Select>
            </div>
            <div class="jiaoban">
              接班密码：
              <Input
                  style="width: 240px"
                  type="password"
                  v-model="successionPasswd"
                  placeholder="请输入密码"
              ></Input>
            </div>
          </div>
        </div>
        <div>
          <span class="initPassword">初始密码：1</span>
          <Button type="primary" @click="modal1 = false"
          >交 接
          </Button
          >
        </div>
      </div>
      <template slot="footer">
        <span></span>
      </template>
    </Modal>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'demo',
  props: {},
  components: {},
  data () {
    return {
      columns16: [
        {
          title: 'Name',
          key: 'name',
          tree: true
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      data12: [
        {
          id: '100',
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          id: '101',
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          children: [
            {
              id: '10100',
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park'
            },
            {
              id: '10101',
              name: 'Joe Blackn',
              age: 30,
              address: 'Sydney No. 1 Lake Park'
            },
            {
              id: '10102',
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              children: [
                {
                  id: '1010200',
                  name: 'Jim Green',
                  age: 24,
                  address: 'New York No. 1 Lake Park'
                }
              ]
            }
          ]
        },
        {
          id: '102',
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          id: '103',
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      modal1: false,
      shiftOverPasswd: '',
      successionClass: '',
      successionPerson: '',
      successionPasswd: '',
      columns1: [
        // {
        //     title: "时间",
        //     width:150,
        //     slot: "time",
        //     align: "center",
        // },
        {
          title: '检查人',
          width: 200,
          slot: 'checkPerson',
          align: 'center'
        },
        {
          title: '股道',
          width: 200,
          slot: 'track',
          align: 'center'
        },
        {
          title: '检查线路',
          slot: 'checkLine',
          minWidth: 250,
          align: 'center'
        },
        {
          title: '防溜情况',
          width: 300,
          slot: 'content',
          align: 'center'
        },
        {
          title: '备注',
          width: 300,
          slot: 'remark',
          align: 'center'
        },
        {
          title: '操作',
          width: 100,
          slot: 'action',
          align: 'center'
        }
      ],
      data1: [],
      columns2: [
        {
          title: '名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '使用中',
          key: 'used',
          align: 'center'
        },
        {
          title: '未使用',
          key: 'unUse',
          align: 'center'
        },
        {
          title: '总数量',
          key: 'allNum',
          align: 'center'
        }
      ],
      data2: [
        {
          name: '智能铁鞋',
          used: '11',
          unUse: '12',
          allNum: '23'
        },
        {
          name: '普通铁鞋',
          used: '4',
          unUse: '5',
          allNum: '9'
        },
        {
          name: '紧固器',
          used: '3',
          unUse: '8',
          allNum: '11'
        }
      ],
      cityList: [
        {
          value: '01',
          label: '股道一'
        },
        {
          value: '02',
          label: '股道二'
        },
        {
          value: '03',
          label: '股道三'
        }
      ],
      person: [
        {
          value: '01',
          label: '张三'
        },
        {
          value: '02',
          label: '李四'
        },
        {
          value: '03',
          label: '王五'
        }
      ]
    }
  },
  filters: {},
  computed: {},
  watch: {},
  methods: {
    addTree (row) {
      console.log(row, this.data12)
      let num = Math.floor(Math.random() * 99) + 1;

      this.data12.forEach(item => {
        if (item.id === row.id) {
          if (!item.children) {
            item.children = []
          }
          item.children.push({
            id: num,
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park'
          })

        }
      })
      let a=JSON.parse(JSON.stringify(this.data12))
      this.data12=[]
      this.data12=a
    },
    addData () {
      this.data1.push({
        time: '2016-10-03',
        track: '',
        checkLine: '',
        content: '',
        checkPerson: '',
        remark: '',
        action: '0'
      })
    },
    isOk (row, index) {
      row.action = '1'
      this.data1[index].action = '1'
    },
    isDelete (index) {
      this.data1.splice(index, 1)
    },
    init () {
      let canvas2 = document.createElement('canvas'),
          _canvas = document.querySelector('.middle-box'),
          w = parseInt(window.getComputedStyle(_canvas).width),
          h = parseInt(window.getComputedStyle(_canvas).height)

      //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
      canvas2.width = w * 2.5
      canvas2.height = h * 2.5
      canvas2.style.width = w + 'px'
      canvas2.style.height = h + 'px'
      //可以按照自己的需求，对context的参数修改,translate指的是偏移量
      //  let context = canvas.getContext("2d");
      //  context.translate(0,0);
      let context = canvas2.getContext('2d')
      context.scale(2.5, 2.5)
      //设置context位置，值为相对于视窗的偏移量负值，让图片复位(解决偏移的重点)
      // var rect = this.$refs.imageTofile.getBoundingClientRect(); //获取元素相对于视察的偏移量
      // context.translate(-rect.left, -rect.top);
      html2canvas(this.$refs.imageTofile, {
        canvas: canvas2,
        useCORS: true, // 【重要】开启跨域配置
        scrollY: 0 // 纵向偏移量 写死0 可以避免滚动造成偶尔偏移的现象
      }).then(function (canvas) {
        // console.log(canvas.toDataURL());
        //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
        document
            .querySelector('.down')
            .setAttribute('href', canvas.toDataURL())
      })
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less">
.myIcon {
  font-size: 20px;
  cursor: pointer;
}
</style>
<style lang='less' scoped>
.box {
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}

.box1 {
  margin: 16px 0;
  text-align: left;
}

.jjb-box {
  font-size: 14px;
  padding-top: 20px;
  // margin: 20px;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  // box-shadow: 1px 3px 12px 5px rgba(71, 71, 71, 0.09);
  // border-radius: 4px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 14px;
      color: #0474fe;
      font-weight: bold;
      margin-bottom: 10px;
      border-left: 3px solid #0474fe;
      padding-left: 10px;
      box-sizing: border-box;
    }

    .titleLeft {
      margin-bottom: 18px;
    }

    .jiaoban {
      margin-bottom: 20px;
    }

    .jiaobanLeft {
      margin-bottom: 30px;
    }

    .passwd {
      margin: 0;
    }
  }

  & > div:last-child {
    text-align: center;

    .initPassword {
      margin: 0 10px;
      font-size: 14px;
      color: red;
    }
  }
}

.zhenmu {
  display: inline-block;
  width: 20px;
  height: 20px;

  & div {
    display: inline-block;
    margin: 0 2px;
    width: 2px;
    height: 20px;
    background-color: #515a6e;
  }
}

.putong {
  position: relative;

  &::after {
    position: absolute;
    left: 5px;
    top: 0;
    content: "";
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 6px solid #fff;
    border-bottom: 6px solid #fff;
    border-right: 6px solid transparent;
  }
}

.shebei-box {
  margin: 0 15px;
}

.shouzha {
  position: relative;
  margin-right: 24px;

  span {
    position: absolute;
    top: -15px;
    right: -18px;
  }
}

.jinguqi {
  font-size: 30px;
}

.jinguqi-box {
  position: relative;

  .wei {
    position: absolute;
    top: -15px;
    right: -14px;
  }

  .code {
    position: absolute;
    top: 0;
    right: -10px;
  }
}

.shebei {
  font-size: 24px;
}

.car {
  display: inline-block;
  width: 65px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: #515a6e;
}

.fanzhuan {
  display: inline-block;
  transform: rotateY(180deg); /* 水平镜像翻转 */
}

.putongfanzhuan {
  display: inline-block;
  transform: rotateY(180deg); /* 水平镜像翻转 */

  &::after {
    position: absolute;
    left: 4px;
    top: 14px;
    content: "";
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 6px solid #fff;
    border-bottom: 6px solid #fff;
    border-right: 6px solid transparent;
  }
}
</style>
