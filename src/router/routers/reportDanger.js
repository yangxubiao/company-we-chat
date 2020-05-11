

export default [
            {
            path: '/reportDanger',
            name: 'reportDanger',
            meta:{
               url:"../components/CustomTemplate/danger"
            },
            component: () =>
                import ('@/views/reportDanger.vue')
        }
]