<template>
  <van-tabbar v-model="selected">
    <van-tabbar-item>
      <span>工作台</span>
      <template>
        <img slot="icon" v-if="!workbench" src="../../static/image/workbench.svg" />
        <img slot="icon" v-else src="../../static/image/workbench_c.svg" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item>
      <span>待办</span>
      <template>
        <img slot="icon" v-if="!todo" src="../../static/image/todo.svg" />
        <img slot="icon" v-else src="../../static/image/todo_c.svg" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item>
      <span>我的</span>
      <template>
        <img slot="icon" v-if="!BaseInfo" src="../../static/image/my.svg" />
        <img slot="icon" v-else src="../../static/image/my_c.svg" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { updateTabbarValue } from '@/store/tabbar/type'
import { mapGetters } from 'vuex'
export default {
  name: 'Tabbar',
  data() {
    return {
      workbench: false,
      todo: false,
      BaseInfo: false
    }
  },
  computed: {
    ...mapGetters(['tabbar/getTabbarValue']),
    selected: {
      get() {
        switch (this['tabbar/getTabbarValue']) {
          case 0:
            this.workbench = true

            break
          case 1:
            this.todo = true

            break

          default:
            this.BaseInfo = true
        }
        return this['tabbar/getTabbarValue']
      },
      set(newVal) {
        this.$store.dispatch('tabbar/' + updateTabbarValue, { value: newVal })
        this.$router.push(
          newVal ? (newVal === 1 ? '/untreated' : '/BaseInfo') : '/'
        )
      }
    }
  }
}
</script>