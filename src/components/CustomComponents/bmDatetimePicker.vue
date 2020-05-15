<template>
  <div>
    <van-datetime-picker
      v-bind="{ ...config }"
      @confirm="onConfirm($event)"
      @cancel="onCancel($event)"
    />
  </div>
</template>

<script>
import parentMixin from '@/mixins/parentMixin'
export default {
  mixins: [parentMixin]
}
</script>

<style>
</style>