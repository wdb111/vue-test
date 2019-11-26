import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import database from '@/components/database'
import Erweima from '@/components/Erweima'
import $set from '@/components/$set'
import element from '@/components/elementDemo'
import codemirror from '@/components/codemirror'
import backTop from '@/components/backTop'
import map from '@/components/map'

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
      path: '/to_element',
      name: 'element',
      component: element
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
      path:'/to_map',
      name:'map',
      component:map
    },
  ]
})
