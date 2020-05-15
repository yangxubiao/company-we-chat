<template>
  <div id="untreated">
    <div class="form">
      <van-cell-group>
        <van-cell :title="title" :value="value" />

        <van-cell-group>
          <van-field label="计划名称" required v-model="value1" type="datetime" placeholder="请输入计划名称" />

          <!-- <van-field
            readonly
            clickable
            required
            right-icon="arrow"
            name="datetimePicker"
            :value="datetime"
            label="时间选择"
            placeholder="点击选择时间"
            @click="showPicker = true"
          />

          <van-popup v-model="showPicker" position="bottom">
            <van-datetime-picker
              title="时间选择"
              item-height="89"
              type="datetime"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>-->
        </van-cell-group>
      </van-cell-group>
    </div>
    <bmTabbar />
  </div>
</template>

<script>
export default {
  name: 'Untreated',

  data() {
    return {
      currentDate: '',
      activeNames: [1, 2, 3],
      value1: '',
      showPicker: false,
      datetime: '',
      title: '单元格',
      value: '内容',
      username: '',
      phone: '',
      value10: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker1: false
    }
  }
}
</script>



<style lang="scss" scoped>
@import '@/style/views/Untreated.scss';
</style>