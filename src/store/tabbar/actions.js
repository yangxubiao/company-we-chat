import { updateTabbarValue } from '@/store/tabbar/type'
var actions = {
     [updateTabbarValue]({commit},playload){
      commit(updateTabbarValue,playload)
     }
}

export default actions
