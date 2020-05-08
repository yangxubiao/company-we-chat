<template>

<div id="popup"> 
<mt-popup

            class="restPopup"
            v-model="popupVisible"
            popup-transition="popup-fade"
            position="bottom"
            >
            <div class="popup-title" >
            <p @click="colsePopup">{{context1}}</p>
            <h4>{{context.text}}</h4>
            <p  @click="colsePopup">{{context2}}</p>
         </div>


      <mt-picker :slots="slots" @change="onValuesChange"  ></mt-picker>

</mt-popup>
</div>
</template>

<script>
   export default {
       props:{
           context1:{
              type:String,
              default:"取消"
           },
           context2:{
                type:String,
                default:"确定"
           },
           context:{
               type:Object,
                default(){
                  return {}
               }
           },
           that:{
               type:Object,
               default(){
                  return {}
               }
           }
       },
       data(){
           return {
              popupVisible:true,
                    slots: [
        {
          flex: 1,
          values: ['请选择','康明斯'],
          className: 'slot1',
          textAlign: 'center',
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['请选择'],
          className: 'slot3',
          textAlign: 'center'
        }
      ]
           }
       },
       methods:{
                onValuesChange(picker, values) {
                    
                    console.log(picker)
                    console.log(values)

                    if(values[0]==="康明斯"){
                        picker.setSlotValues(1,['设备维修', '安保', '能源设施', '物流团队', '行政','工艺','财务部','HSE','工程'])
                    }else{
                        picker.setSlotValues(1,['请选择'])
                    }
            
                },
                 colsePopup(){

                   this.popupVisible=false;
                   this.that.isPopup=false;
           }
       },
      

   }
</script>

<style lang="scss" scoped>
  @import "@/style/views/popup.scss";
</style>