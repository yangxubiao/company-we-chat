<template>
  <div id="reportDanger">
    <div class="form">
      <div class="form-item" v-for="item in globalInfo.inputs" :key="item.keyId">
        <component :is="item.name" :config="item.config" :that="that"></component>
      </div>
    </div>

    <bm-popup v-if="isPopup" :that="that" :context="context" />
  </div>
</template>

<script>
import templateMixin from '@/mixins/templateMixin'

// import { getFullTime } from '@/utils/date'
export default {
  name: 'ReportDanger',
  mixins: [templateMixin],
  data() {
    return {
      isPopup: false,
      context: {},
      that: this
    }
  },

  methods: {}
}
</script>



<style lang="scss" scoped>
@import '@/style/views/reportDanger.scss';
</style>