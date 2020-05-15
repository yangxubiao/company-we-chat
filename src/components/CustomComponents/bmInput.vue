
<template>
  <div>
    <div class="form-item">
      <van-field v-model="form[config['value']]" v-bind="{ ...config }" />
    </div>
  </div>
</template>

<script>
import customMixin from '@/mixins/customMixin'
export default {
  mixins: [customMixin],
  data() {
    return {}
  }
}
</script>



