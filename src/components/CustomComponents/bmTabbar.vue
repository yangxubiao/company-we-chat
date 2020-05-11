<template>
    <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="/">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        工作台
    </mt-tab-item>
    <mt-tab-item id="/untreated">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
       待办
    </mt-tab-item>
    <mt-tab-item id="/BaseInfo">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        我的
    </mt-tab-item>
    </mt-tabbar>
</template>

<script>
 import { updateTabbarValue } from '@/store/tabbar/type'
 import {mapGetters} from 'vuex'
   export default {
       name:"Tabbar",
       data(){
           return {
               
           }
       },
       computed:{
           ...mapGetters(["tabbar/getTabbarValue"]),
           selected:{
               get(){
                   return   this["tabbar/getTabbarValue"]
               },
               set(newVal){
                       this.$store.dispatch('tabbar/'+updateTabbarValue,{value:newVal})
                       this.$router.push(newVal)
               }
           }
          
       },

   }
</script>