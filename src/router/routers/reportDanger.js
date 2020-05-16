

export default [
            {
            path: '/reportDanger',
            name: 'reportDanger',
            meta:{
               url:"danger"
            },
            component: () =>
                import ('@/views/reportDanger.vue')
        }
]