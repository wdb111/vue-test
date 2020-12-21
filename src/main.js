// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import myPlugin from "wdb-npm-practice";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import SIdentify from './components/Identify/identify'//验证码
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(SIdentify)

Vue.use(ViewUI);

// Vue.use(myPlugin);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
