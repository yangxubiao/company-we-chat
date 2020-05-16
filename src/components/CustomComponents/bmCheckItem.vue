
<template>
<div>
    <div v-for='(item,index) in checkitems' :key="item.id">
        <van-swipe-cell> 
            <van-cell :title="item.name" value="内容" />
            <template #right>
              <van-button square text="删除" @click='deleteCheckItem(item.id)' type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
    </div>
  </template>
  
  <script>
//   import customMixin from '@/mixins/customMixin'
  export default {    // mixins: [customMixin],
    props:{
        checkitems:{
          type:Array,
          default:()=>{}
      },
      that:{
          type:Object
      }
    },
    methods:{
        deleteCheckItem(a){
            this.$dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            this.that.checkitems=this.that.checkitems.filter(item=>item.id!==a)
          }).catch(error=>{
             
          })
        }
      }
  }
  </script>
  
  
  
  