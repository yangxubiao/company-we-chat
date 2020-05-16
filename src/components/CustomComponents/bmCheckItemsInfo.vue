
<template>
    <div>
        {{title}}
        <button @click="fn('edit')">更换</button>
    </div>
 </template>
      
      <script>
      import checkItemsInfoMixin from '@/mixins/checkItemsInfoMixin'
      export default {    
       mixins: [checkItemsInfoMixin],
      methods:{
          fn(name){
            // console.log(name)
                  // this.$next
                  // this.$nextTick(()=> {
                  // debugger;
                    this.that.component='bmTabbar'
                //  })
            
         
          }
        }
      }
      </script>
      
      
      
      