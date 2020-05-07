<template>
   <div id="untreated">

    <mt-navbar v-model="selected">
  <mt-tab-item id="1">待处理</mt-tab-item>
  <mt-tab-item id="2">已处理</mt-tab-item>

</mt-navbar>
    <div class="search">
          <mt-search v-model="value"></mt-search>
    </div>


<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'content ' + n" />
  </mt-tab-container-item>

</mt-tab-container>



          <myTabbar   />
   </div> 
</template>

<script>

import myTabbar from '@/components/myTabbar.vue'

  export default {
      name:"Untreated",
      components:{
           myTabbar
       },
      data(){
          return {
              value:"",
              selected:"1"
          }
      }
  }
  
</script>



<style lang="scss" scoped>
   @import "@/style/views/Untreated.scss";
   
</style>