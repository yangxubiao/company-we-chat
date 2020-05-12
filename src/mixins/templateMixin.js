
const templateMixin ={
    beforeCreate(){
        var globalInfo  = {};
     switch(this.$route.meta.url) {
         case "../components/CustomTemplate/danger":
            globalInfo = require("../components/CustomTemplate/danger")
            this.globalInfo=globalInfo.globalInfo
            this.data=globalInfo.data
            break;
         case "../components/CustomTemplate/check":
            globalInfo = require("../components/CustomTemplate/check")
            this.globalInfo=globalInfo.globalInfo
            this.data=globalInfo.data
            break;
         default:
            globalInfo = require("../components/CustomTemplate/danger")
            this.globalInfo=globalInfo.globalInfo
            this.data=globalInfo.data
     } 
     
    
    },


 }
 
 export default templateMixin;