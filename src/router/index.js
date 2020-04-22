import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import database from '@/components/DataBase/database'
import Erweima from '@/components/QRcode/Erweima'
import element from '@/components/ElementUI/elementDemo'
import codemirror from '@/components/CodeMirror/codemirror'
import backTop from '@/components/BackTop/backTop'
import less from '@/components/Less/Less'
import map from '@/components/Map/map'
import date from '@/components/Date/Date'
import eltable from '@/components/ElementUI/Table'
import elinput from '@/components/ElementUI/Input'
import elcollapse from '@/components/ElementUI/Collapse'
import elnavmenu from '@/components/ElementUI/NavMenu'
import elupload from '@/components/ElementUI/Upload'
import elcascader from '@/components/ElementUI/Cascader'
import tinymce from '@/components/Tinymce/Tinymce'
import wangeditor from '@/components/Wangeditor/index'
import Steps from "@/components/ElementUI/Steps"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
          path: '/to_database',
          name: 'database',
          component: database
        },
        {
          path: '/to_Erweima',
          name: 'Erweima',
          component: Erweima
        },

        {
          path: '/to_codemirror',
          name: 'codemirror',
          component: codemirror
        },
        {
          path: '/to_backTop',
          name: 'backTop',
          component: backTop
        },
        {
          path: '/to_date',
          name: 'Date',
          component: date
        },
        {
          path: '/to_less',
          name: 'less',
          component: less
        }, {
          path: '/to_lodash',
          name: 'lodash',
          component: () => import("@/components/lodash")
        },
        {
          path: '/to_map',
          name: 'map',
          component: map
        },
        {
          path: '/to_tinymce',
          name: 'tinymce',
          component: tinymce
        },
        {
          path: '/to_wangeditor',
          name: 'wangeditor',
          component: wangeditor
        },
        {
          path: '/to_element',
          name: 'element',
          component: element,
          children: [
            {
              path: 'el-steps',
              name: 'Steps',
              component: Steps
            },
            {
              path: 'el-table',
              name: 'eltable',
              component: eltable
            },
            {
              path: 'el-input',
              name: 'elinput',
              component: elinput
            },
            {
              path: 'el-collapse',
              name: 'elcollapse',
              component: elcollapse
            },
            {
              path: 'el-navmenu',
              name: 'elnavmenu',
              component: elnavmenu,
              children:[
                {
                  id:'1',
                  path: '1',
                  name: 'public',
                  component: ()=>import('@/components/ElementUI/publicPage'),
                  meta:{
                    title:"首页"
                  },
                },
                {
                  id:'1',
                  path: '10',
                  name: 'public',
                  component: ()=>import('@/components/ElementUI/publicPage'),
                  meta:{
                    title:"表格"
                  },
                },
                {
                  id:"2",
                  path: '2',
                  name: 'public',
                  component: ()=>import('@/components/ElementUI/publicPage'),
                  meta:{
                    title:"第二页"
                  },
                },
                {
                  id:"3",
                  path: '3',
                  name: 'public',
                  component: ()=>import('@/components/ElementUI/publicPage'),
                  meta:{
                    title:"第三页"
                  },
                },
                {
                  id:"4",
                  path: '4',
                  name: 'public',
                  component: ()=>import('@/components/ElementUI/publicPage'),
                  meta:{
                    title:"第四页"
                  },
                },
                {
                  id:"5",
                  path: '5',
                  name: 'public',
                  component: ()=>import('@/components/ElementUI/publicPage'),
                  meta:{
                    title:"第五页"
                  },
                },
              ]
              
            },
            {
              path: 'el-upload',
              name: 'elupload',
              component: elupload
            },
            {
              path: 'el-cascader',
              name: 'elcascader',
              component: elcascader
            },
            
          ]
        },
        {
          path:"/to_iview",
          component:()=>import("@/components/iView"),
          children:[
            {
              path:"nav",
              component:()=>import("@/components/iView/Nav.vue")
            }
          ]
        }
      ]
    },

  ]
})
