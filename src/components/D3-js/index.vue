<template>
  <div>
    <el-button type="text" @click="doit">
      点击打开 Dialog
    </el-button>

    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
    >
      <el-button @click="init">点击</el-button>
      <div class="d3">
        <svg width="500">
          <g/>
          <rect/>
        </svg>
      </div>
      <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
                >
            </span>
    </el-dialog>
    <!-- <svg width="500">
        <g />
        <rect />
    </svg> -->
  </div>
</template>

<script>
import dagreD3 from 'dagre-d3';
import * as d3 from 'd3';

export default {
  data() {
    return {
      dialogVisible: false,
      list: {
        nodeInfos: [
          {
            id: 'node1',
            label: '节点1'
          },
          {
            id: 'node2',
            label: '节点2'
          },
          {
            id: 'node3',
            label: '节点3'
          },
          {
            id: 'node4',
            label: '节点4'
          }
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2'
          },
          {
            source: 'node2',
            target: 'node3'
          },
          {
            source: 'node2',
            target: 'node4'
          }
        ]
      }
    };
  },
  methods: {
    doit() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then((_) => {
            done();
          })
          .catch((_) => {
          });
    },
    init() {
      let _this = this;
      //获取D3
      let g = new dagreD3.graphlib.Graph().setGraph({});
      // 添加节点
      console.log(this.list)
      this.list.nodeInfos.forEach((item, index) => {
        item.rx = item.ry = 5; //圆角
        g.setNode(item.id, item);
      });

      // 链接关系
      this.list.edges.forEach((item) => {
        g.setEdge(item.source, item.target, {});
      });
      //绘制图形
      let svg = d3.select('svg'),
          inner = svg.select('g');
      //缩放

      let zoom = d3.zoom().on('zoom', function () {
        inner.attr('transform', d3.event.transform);
      });
      svg.call(zoom);
      let render = new dagreD3.render();
      render(inner, g);
      let code;
      inner.selectAll('g.node').on('click', (e) => {
        //点击事件
        console.log(e);
        code = this.list.nodeInfos.filter((item) => {
          return item.id === e;
        });
        _this.nodeData = code[0];
        _this.innerVisible = true;
        console.log(code[0].standard);
      });
      let initialScale = 1;
      // svg.call(
      //     zoom.transform,
      //     d3.zoomIdentity.translate(
      //         (svg.attr('width') - g.graph().width * initialScale) /
      //         2,
      //         // 500,
      //         20
      //     )
      //         .scale(initialScale)
      // );
      svg.attr('height', g.graph().height * initialScale + 40);
    }
  },
  created() {
    // this.$nextTick(() => {
    //   this.init();
    // });
  }
};
</script>

<style lang="less">
.d3 {
  text-align: center;
}

svg {
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid #adadad;
  border-radius: 5px;
}

.node rect {
  stroke: #606266;
  fill: #fff;
}

.edgePath path {
  stroke: #606266;
  fill: #333;
  stroke-width: 1.5px;
}
</style>
