import Vue from 'vue'
import VueRouter from 'vue-router'
import reportDanger from '@/router/routers/reportDanger'
import Untreated from '@/router/routers/Untreated'
import BaseInfo from '@/router/routers/BaseInfo'
Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Index',
        component: () =>
            import ('@/views/Index.vue')
    },
    ...reportDanger,
    ...Untreated,
    ...BaseInfo

]

const router = new VueRouter({
    routes
})

export default router