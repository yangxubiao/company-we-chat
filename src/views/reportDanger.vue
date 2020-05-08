<template>
   <div id="reportDanger">
        <div class="form">
                <div @click.stop="openReportTime" class="Mark">
                    <mt-field  label="上报时间"   readonly="readonly" placeholder="请选择时间" v-model="form.reportTime"  ></mt-field>
                </div>

            <div  class="Mark">
                    <mt-field  label="上报人"   placeholder="默认本人" v-model="form.reportUser"  ></mt-field>
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
             }

    };
    
       },
      components:{
         myPopup
      },
     methods: {
      openReportTime() {
         this.$refs.picker.open();
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