<template>
   <div id="reportDanger">
        <div class="form">

                <div @click.stop="openReportTime" class="Mark">
                    <mt-field  label="上报时间"   readonly="readonly" placeholder="请选择时间" v-model="form.reportTime"  ></mt-field>
                </div>

            <div  class="Mark">
                    <mt-field  label="上报人"   placeholder="默认本人" v-model="form.reportUser"   ></mt-field>
            </div>

           <div  class="updateStyle" @click.stop="openReportType({text:'类型',local:'form.rep0ortType'})">      
                <mt-cell  is-link>
                    <span>
                        <div  class="Mark">
                                <mt-field  label="类型"  readonly="readonly"  placeholder="选择类型" v-model="form.reportType"  ></mt-field>
                        </div>
                    </span>
                </mt-cell>
          </div>

     </div>



     <my-popup  v-if="isPopup" :that="that" :context="context" /> 

     <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>


       <!-- 日期 -->
         <mt-datetime-picker
            ref="picker"
            @confirm="handleConfirm"
            v-model="pickerValue"
           >
      </mt-datetime-picker>
   </div>
</template>

<script>

import myPopup from "@/components/myPopup.vue"
import { getFullTime } from "@/utils/date"
   export default {
       name:"ReportDanger",
       beforeRouteEnter(to,from,next){
              console.log(to);


            next(vm=>{

               vm.axios.get("../static/jsons/"+to.meta.url).then(res=>{console.log(res)})
           
             });
       },
       data(){
           return {
             isPopup:false,
             context:{
               text:"",
               local:""
             },
             pickerValue:"",
             that:this,
             form:{
                 reportTime:"",
                 reportUser:"",
                 reportType:""
             },
                slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'center'
        }, 
           {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'center'
        }, 
           {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'center'
        }, 
           {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'center'
        }, 
         {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'center'
        }
      ]

    };
    
       },
      components:{
         myPopup
      },
     methods: {
      openReportTime() {
         this.$refs.picker.open();
      },
      onValuesChange(A,B,C){
        console.log(A);
           console.log(B);
              console.log(C);
      },

      openReportType(obj){
        
        this.context=obj
        this.isPopup=true
      },

      handleConfirm(date){
         this.form.reportTime = getFullTime(date)
      }
    }
   }
</script>



<style lang="scss" scoped>
  @import "@/style/views/reportDanger.scss";
</style>