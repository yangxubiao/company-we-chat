<template>
   <div id="reportDanger">
        <div class="form">
 <!-- <div  class="Mark"> -->
                    <!-- <mt-field  label="上报人"   placeholder="默认本人" v-model="form.reportUser"   ></mt-field> -->
            <!-- </div> -->

<!-- 
              <div @click.stop="openReportTime" class="Mark">
                    <mt-field  label="上报时间"   readonly="readonly" placeholder="请选择时间" v-model="form.reportTime"  ></mt-field>
               </div> -->

           



<!-- 组件ID ， 组件名 ， 配置项 -->
                    
           <div class="form-item" v-for="item in globalInfo.inputs"  :key="item.keyId">

                   <component   :is="item.name"  :config= "item.config" :that="that"  :globalData="data" ></component> 

           </div>

      <!-- <bm-show-select-input /> -->


           <!-- <div  class="updateStyle" @click.stop="openReport({text:'上报时间',local:'form.reportTime'})">      
                <mt-cell  is-link>
                    <span>
                        <div  class="Mark">
                                <mt-field  label="上报时间"  readonly="readonly"  placeholder="请选择时间" v-model="form.reportType"  ></mt-field>
                        </div>
                    </span>
                </mt-cell>
          </div>-->

<!-- 
           <div  class="updateStyle" @click.stop="openReport({text:'类型',local:'form.rep0ortType'})">      
                <mt-cell  is-link>
                    <span>
                        <div  class="Mark">
                                <mt-field  label="类型"  readonly="readonly"  placeholder="选择类型" v-model="form.reportType"  ></mt-field>
                        </div>
                    </span>
                </mt-cell>
          </div>  -->




          <button @click="fnfn"> 点击 </button>

     </div>



     <bm-popup  v-if="isPopup" :that="that" :context="context" />



       <!-- 日期 -->
         <!-- <mt-datetime-picker
            ref="picker"
            @confirm="handleConfirm"
            v-model="pickerValue"
           >
      </mt-datetime-picker> -->

   </div>
</template>

<script>
import templateMixin from '@/mixins/templateMixin'

import { getFullTime } from "@/utils/date"
   export default {
       name:"ReportDanger",
       mixins:[templateMixin],
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
        

    };
    
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

      openReport(obj){
        
        this.context=obj
        this.isPopup=true
      },

      handleConfirm(date){
         this.form.reportTime = getFullTime(date)
      },
      fnfn(){
         console.log(this.data)
      }
    }
   }
</script>



<style lang="scss" scoped>
  @import "@/style/views/reportDanger.scss";
</style>