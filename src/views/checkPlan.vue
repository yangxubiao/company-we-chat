<template>
   <div id="checkPlan">
        <div class="form">

           



<!-- 组件ID ， 组件名 ， 配置项 -->
                    
           <div class="form-item" v-for="item in globalInfo.inputs"  :key="item.keyId">

                   <component   :is="item.name"  :config= "item.config" :that="that"  :globalData="data" ></component> 

           </div>





    

     </div>



     <bm-popup  v-if="isPopup" :that="that" :context="context" />



    

   </div>
</template>

<script>
import templateMixin from '@/mixins/templateMixin'
import { getFullTime } from "@/utils/date"
   export default {
       name:"checkPlan",
       mixins:[templateMixin],
       data(){
           return {
             isPopup:false,
             context:{
              
             },
             that:this,
       };
    
       },
   }



</script>



<style lang="scss" scoped>
  @import "@/style/views/reportDanger.scss";
</style>