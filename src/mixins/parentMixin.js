
const parentMixin = {
  props: {
    config: {
      type: Object,
      required: true,
      default: () => { }
    },
    thatParent: {
      required: true,
      type: Object,
    },
    globalData: {
      required: true,
      type: Object,
      default: () => { }
    },
    methodsParent: {
      required: true,
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      ...this.globalData,
      ...this.methodsParent,
    }
  },
}

export default parentMixin;