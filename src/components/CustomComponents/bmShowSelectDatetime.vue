<template>
    <div class="showSelectDate">

              <!-- <div @click.stop="openReportTime" class="Mark">
                    <mt-field  :label="config.label"    :readonly="config.readonly" :placeholder="config.placeholder" v-model="config.value"  ></mt-field>
               </div>  -->

            <div @click.stop="openReportTime" :class="{Mark:config.require}">
                    <mt-field  :label="config.label"    :readonly="config.readonly"  :placeholder="config.placeholder" v-model="form[config.value]"  ></mt-field>
               </div>

         <mt-datetime-picker
                        ref="picker"
                        @confirm="handleConfirm"
                        v-model="pickerValue"
                    >
         </mt-datetime-picker>

    </div>
</template>

<script>

import { getFullTime } from "@/utils/date"
import customMixin from '@/mixins/customMixin'
   export default {

       mixins:[customMixin],
       methods:{
              handleConfirm(date){  
                this.form[this.config.value]=getFullTime(date)
             },

            openReportTime() {
                this.$refs.picker.open();
            },

        }
   }
</script>



<style lang="scss" scoped>
     @import "@/style/views/bmShowSelectDatetime.scss";
</style>
