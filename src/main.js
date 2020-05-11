import Vue from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'

import './style/common.scss'


import axios from './axios/axios'

import echarts from 'echarts'

import 'lib-flexible'

import '@/components/CustomComponents/custom.components.common'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


Vue.use(MintUI)

Vue.use(axios)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')