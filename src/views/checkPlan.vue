<template>
  <div id="checkPlan">
    <div class="container">
      <div class="form">
        <div class="form-item" v-for="item in globalInfo.inputs" :key="item.keyId">
          <component
            :is="item.name"
            :config="item.config"
            :that="that"
            :globalData="globalInfo.data"
          ></component>
        </div>
      </div>
      <div class="btn">
        <van-button type="default" @click="saveCheckPlan">保存</van-button>
        <van-button type="danger" @click="startCheckPlan">启动</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixins/templateMixin'
import { checkData } from '@/utils/tools'
export default {
  name: 'checkPlan',
  mixins: [templateMixin],
  data() {
    return {
      that: this
    }
  },
  created() {
    console.log(this.globalInfo)
  },
  methods: {
    saveCheckPlan() {
      if (
        checkData(this.globalInfo.toastArr, this.globalInfo.data.form, this)
      ) {
        console.log('888')
      }
    },
    startCheckPlan() {}
  }
}
</script>


<style lang="scss" scoped>
@import '@/style/views/reportDanger.scss';
</style>