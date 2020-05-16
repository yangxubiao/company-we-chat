<template>
   <div id="baseInfo">

          <button @click="addCheckItem">添加</button>
          <bm-check-item  :checkitems="checkitems" :that="that" />
          <bmTabbar  selected="baseInfo"  />
          <van-field name="uploader" label="文件上传">
            <template #input>
              <van-uploader v-model="uploader"  />
            </template>
          </van-field>
          <button @click="fn1">查看</button>
   </div>
</template>

<script>


import {checkItemsInfo} from '@/components/CustomTemplate/checkItemsInfo'
  export default {
      name:"BaseInfo",
      data(){
          return {
            ...checkItemsInfo.data,
            that:this,
            uploader: [],
          }
      },
      methods:{
        addCheckItem(){
            this.$router.push({path:"/checkItemsInfo",query:{name:'add'}})
        },
        fn1(){
         console.log(this.uploader)
        }
      }
  }
  
</script>