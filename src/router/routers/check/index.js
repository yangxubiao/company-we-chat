

export default [
    
    {
        path: '/checkPlan',
        name: 'checkPlan',
        meta:{
            url:"check"
         },
        component: () =>
            import ('@/views/check/checkPlan.vue')
    },
    {
        path: '/addCheckItem',
        name: 'addCheckItem',
        meta:{
            url:"check"
         },
        component: () =>
            import ('@/views/check/addCheckItem.vue')
    },
]