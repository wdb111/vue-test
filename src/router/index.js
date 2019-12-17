import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import database from '@/components/database'
import Erweima from '@/components/Erweima'
import $set from '@/components/$set'
import element from '@/components/elementDemo'
import codemirror from '@/components/codemirror'
import backTop from '@/components/backTop'
import less from '@/components/Less'
import map from '@/components/map'
import date from '@/components/Date'
import eltable from '@/components/ElementUI/Table'
import elinput from '@/components/ElementUI/Input'
import elcollapse from '@/components/ElementUI/Collapse'
import elnavmenu from '@/components/ElementUI/NavMenu'
import elupload from '@/components/ElementUI/Upload'
import elcascader from '@/components/ElementUI/Cascader'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
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
      path: '/to_set',
      name: '$set',
      component: $set
    },
   
    {
      path: '/to_codemirror',
      name: 'codemirror',
      component: codemirror
    },
    {
      path:'/to_backTop',
      name:'backTop',
      component:backTop
    },
    {
      path:'/to_date',
      name:'Date',
      component:date
    },
    {
      path:'/to_less',
      name:'less',
      component:less
    },
    {
      path:'/to_map',
      name:'map',
      component:map
    },
    {
      path: '/to_element',
      name: 'element',
      component: element,
      children:[
        {
          path: '/to_element/el-table',
          name: 'eltable',
          component: eltable
        },
        {
          path: '/to_element/el-input',
          name: 'elinput',
          component: elinput
        },
        {
          path: '/to_element/el-collapse',
          name: 'elcollapse',
          component: elcollapse
        },
        {
          path: '/to_element/el-navmenu',
          name: 'elnavmenu',
          component: elnavmenu
        },
        {
          path: '/to_element/el-upload',
          name: 'elupload',
          component: elupload
        },
        {
          path: '/to_element/el-cascader',
          name: 'elcascader',
          component: elcascader
        },
      ]
    },
  ]
})
