import { updateTabbarValue } from '@/store/tabbar/type'
var mutation = {
   [updateTabbarValue](state,playload){
        state.tabbarValue=playload.value
   }
}
export default mutation
