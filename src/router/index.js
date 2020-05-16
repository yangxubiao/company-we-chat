import Vue from 'vue'
import VueRouter from 'vue-router'
import reportDanger from '@/router/routers/reportDanger'
import Untreated from '@/router/routers/Untreated'
import BaseInfo from '@/router/routers/BaseInfo'
// import checkPlan from '@/router/routers/checkPlan'
import checkItemsInfo from '@/router/routers/checkItemsInfo'
import check from '@/router/routers/check/'
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
    ...BaseInfo,
    // ...checkPlan,
     ...check,
    ...checkItemsInfo

]

const router = new VueRouter({
    routes
})

export default router