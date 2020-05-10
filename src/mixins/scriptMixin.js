
const scriptMixin ={
   beforeCreate(){
    switch(this.$route.meta.url) {
        case "../template/danger":
          this.globalInfo = require("../template/danger")
           break;
        case "":
            this.globalInfo = require("../template/danger")
           break;
        default:
            this.globalInfo = require("../template/danger")
    } 
    
   
   },

}

export default scriptMixin;