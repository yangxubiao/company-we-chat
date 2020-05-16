
const checkItemsInfoMixin = {
    props: {
      that: {
        required: true,
        type: Object,
      },
      data: {
        required: true,
        type: Object,
        default: () => { }
      },
      checkItemsInfo:{
        required: true,
        type: Object,
        default: () => { }
      }
    },
    data () {
      return {
        ...this.data.form,
        title:this.data.title
      }
    },
    created(){
        console.log(this.checkItemsInfo);
    },
  }
  
  export default checkItemsInfoMixin;