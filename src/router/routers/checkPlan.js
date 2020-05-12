

export default [
    
    {
    path: '/checkPlan',
    name: 'checkPlan',
    meta:{
        url:"../components/CustomTemplate/check"
     },
    component: () =>
        import ('@/views/checkPlan.vue')
}
]