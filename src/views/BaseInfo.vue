<template>
   <div id="baseInfo">
         BaseInfo

          <myTabbar  selected="baseInfo"  />
   </div>
</template>

<script>

import myTabbar from '@/components/myTabbar.vue'

  export default {
      name:"BaseInfo",
       components:{
           myTabbar
       },
      data(){
          return {
              
          }
      }
  }
  
</script>