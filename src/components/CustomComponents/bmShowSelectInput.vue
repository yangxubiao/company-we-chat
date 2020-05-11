<template>
           <div  class="bmShowSelect" @click.stop="fn(config)">      
                <mt-cell  is-link>
                    <span>
                        <div  :class="{Mark:config.require}">
        
                                <mt-field  :label="config.label"  :readonly="config.readonly"  :placeholder="config.placeholder" v-model="config.value" ></mt-field>
                        </div>
                    </span>
                </mt-cell>
          </div>
</template>



<script>

import customMixin from '@/mixins/customMixin'
export default {
    mixins:[customMixin],
    methods:{
        fn(config){
           this.that.context=config;
           this.that.isPopup=true;
        }
     
    }


}

</script>

<style lang="scss" scoped>
     @import "@/style/views/bmShowSelectInput.scss";
</style>