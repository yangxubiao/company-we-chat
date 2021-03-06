
const customMixin = {
  props: {
    config: {
      type: Object,
      required: true,
      default: () => { }
    },
    that: {
      required: true,
      type: Object,
    },
    globalData: {
      required: true,
      type: Object,
      default: () => { }
    },
  },
  data () {
    return {
      ...this.globalData,

    }
  },
}

export default customMixin;