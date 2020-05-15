
//隐患

const globalInfo = {
  data: {
    data: {
      from: {

      }
    }
  },

  inputs: [

    {
      keyId: 1, name: "bmInput",
      config: {
        type: "tel",
        require: true,
        readonly: true,
        disabled: true,
        maxlength: 20,
        ["input-align"]: "left",
        ["show-word-limit"]: 20,
        label: "上报时间",
        placeholder: "请选择时间",
        value: "reportTime",

      }
    }
  ]
}





export {
  globalInfo
}



