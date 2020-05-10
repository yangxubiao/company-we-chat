

export default [
            {
            path: '/reportDanger',
            name: 'reportDanger',
            meta:{
               url:"../template/danger"
            },
            component: () =>
                import ('@/views/reportDanger.vue')
        }
]