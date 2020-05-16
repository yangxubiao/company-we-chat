<template>
    <div>
        <component
        :is="component"
        :that="that"
        :data="data"
        :checkItemsInfo="checkItemsInfo"
      ></component>  
    </div>
</template>




<script>
import {checkItemsInfo} from '@/components/CustomTemplate/checkItemsInfo'
  export default {
     data(){
         return {
             component:checkItemsInfo[this.$route.query.name]['name'],
             that:this,
             data:checkItemsInfo[this.$route.query.name],
             checkItemsInfo
         }  
     }
  }
</script>
