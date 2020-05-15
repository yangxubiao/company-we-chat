
const templateMixin = {
  beforeCreate () {
    var globalInfo = {};
    switch (this.$route.meta.url) {
      case "../components/CustomTemplate/danger":
        globalInfo = require("../components/CustomTemplate/danger")
        this.globalInfo = globalInfo.globalInfo
        break;
      case "../components/CustomTemplate/check":
        globalInfo = require("../components/CustomTemplate/check")
        this.globalInfo = globalInfo.globalInfo
        break;
      default:
        globalInfo = require("../components/CustomTemplate/danger")
        this.globalInfo = globalInfo.globalInfo
    }
  },


}

export default templateMixin;