import Vue from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

import Vant from 'vant';


import 'element-ui/lib/theme-chalk/index.css';

import 'vant/lib/index.css';

import '@/style/common.scss'

import axios from './axios/axios'

import echarts from 'echarts'

import 'lib-flexible'

import '@/components/CustomComponents/custom.components.common'


Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


Vue.use(Vant);
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')