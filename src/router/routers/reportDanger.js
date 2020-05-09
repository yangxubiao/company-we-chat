

export default [
            {
            path: '/reportDanger',
            name: 'reportDanger',
            meta:{
               url:"reportDanger.json"
            },
            component: () =>
                import ('@/views/reportDanger.vue')
        }
]