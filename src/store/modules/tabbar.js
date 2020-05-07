import tabbarMutation from '../tabbar/mutations'
import tabbarAction from '../tabbar/actions'
import tabbarGetters from '../tabbar/getters'
const state = {
    tabbarValue:"/"
}

const mutations = {
    ...tabbarMutation
}


const actions = {
    ...tabbarAction
}

const getters = {
    ...tabbarGetters
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
