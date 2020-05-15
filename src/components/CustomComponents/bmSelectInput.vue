<template>
  <div>
    <van-field v-model="form[config['value']]" v-bind="{ ...config }" @click="showPicker = true" />

    <van-popup v-model="showPicker" position="bottom">
      <div v-for="item in config['children']" :key="item.keyId">
        <component
          :is="item.name"
          :config="item.config"
          :thatParent="thatParent"
          :globalData="globalData"
          :methodsParent="item.methods"
        ></component>
      </div>
    </van-popup>
  </div>
</template>


<script>
import customMixin from '@/mixins/customMixin'
export default {
  mixins: [customMixin],
  data() {
    return {
      showPicker: false,
      thatParent: this
    }
  }
}
</script>


  