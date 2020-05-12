<template>
    <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="/" v-if="!workbench">
        <img slot="icon" src="../../static/image/workbench.svg">
        工作台
    </mt-tab-item>
     <mt-tab-item id="/" v-else>
        <img slot="icon" src="../../static/image/workbench_c.svg">
        工作台
    </mt-tab-item>



     <mt-tab-item id="/untreated" v-if="!todo">
         <img slot="icon" src="../../static/image/todo.svg">
       待办
    </mt-tab-item>
     <mt-tab-item id="/untreated" v-else>
       <img slot="icon" src="../../static/image/todo_c.svg">
       待办
    </mt-tab-item>




     <mt-tab-item id="/BaseInfo" v-if="!BaseInfo">
         <img slot="icon" src="../../static/image/my.svg">
          我的
    </mt-tab-item>
     <mt-tab-item id="/BaseInfo" v-else>
       <img slot="icon" src="../../static/image/my_c.svg">
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
               workbench:false,
               todo:false,
               BaseInfo:false
           }
       },
       computed:{
           ...mapGetters(["tabbar/getTabbarValue"]),
           selected:{
               get(){

                     switch(this["tabbar/getTabbarValue"]) {
                                case "/":
                                    this.workbench=true;
                                    break;
                                case "/untreated":
                                    this.todo=true;
                                    break;
                                default:
                                    this.BaseInfo=true;
                       } 
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