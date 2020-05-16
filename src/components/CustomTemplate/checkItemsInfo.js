
//隐患

const checkItemsInfo = {

    add:{
      name:"bmCheckItemsInfo",
      title:"添加检查项",
      toastArr: {
        checkItemName:"检查项",
        checkItemType:"检查项类型",
        checkItemStandard:"检查标准",
      },
      form:{
        checkItemName:"",
        checkItemType:"",
        checkItemStandard:"",
        checkItemRemark:""
      },
      inputs:[
        {
            keyId: 1, name: "bmInput",
            config: {
              placeholder: '请输入检查项',
              label: '检查项',
              required: true,
              value: "checkItemName"
            }
          },
          {
            keyId: 2, name: "bmInput",
            config: {
              placeholder: '检查项类型',
              label: '请输入检查项类型',
              required: true,
              value: "checkItemType"
            }
          },
          {
            keyId: 3, name: "bmInput",
            config: {
              placeholder: '检查标准',
              label: '请输入检查标准',
              required: true,
              value: "checkItemStandard"
            }
          },
          {
            keyId: 4, name: "bmInput",
            config: {
              placeholder: '备注',
              label: '请输入备注',
              value: "checkItemRemark"
            }
          },

      ]
      
    },
    edit:{
      title:"编辑检查项",
      form:{
        checkItemName:"",
        checkItemType:"",
        checkItemStandard:"",
        checkItemRemark:""
      }
    },
    data: {
       checkitems:[{id:1,name:"丽丽"},{id:2,name:"明明"}]    
    },
  
    inputs: [
      
    ]
  }

  
  
  
  
  
  export {
    checkItemsInfo
  }
  
  
  
  