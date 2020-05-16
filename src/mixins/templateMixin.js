
const templateMixin = {
  beforeCreate () {
    var globalInfo = {};
    switch (this.$route.meta.url) {
      case "danger":
        globalInfo = require("../components/CustomTemplate/danger")
        this.globalInfo = globalInfo.globalInfo
        break;
      case "check":
        globalInfo = require("../components/CustomTemplate/check/check")
        this.globalInfo = globalInfo.globalInfo
        break;
      default:
        globalInfo = require("../components/CustomTemplate/danger")
        this.globalInfo = globalInfo.globalInfo
    }
  },


}

export default templateMixin;