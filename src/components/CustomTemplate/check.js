
//检查

import {
  onConfirm,
  onCancel,
  getCheckPerson,
  getCheckTime,
} from './checkMethods'
import { pickerSize } from '@/utils/tools'

const globalInfo = {
  toastArr: {
    planName: "计划名称",
    chargePreson: "负责人",
    checkPreson: "检查人员",
    checkTime: "检查时间",
    checkCycle: "检查周期",
    checkLocal: "检查地点",
    placeLocal: "集合地点",
    checkArea: "检查范围",
    remark: "备注"

  },

  data: {
    form: {
      planName: "",
      chargePreson: "",
      checkPreson: "",
      checkTime: "",
      checkCycle: "",
      checkLocal: "",
      placeLocal: "",
      checkArea: "",
      remark: ""
    }
  },

  inputs: [

    // 计划名称
    {
      keyId: 1, name: "bmInput",
      config: {
        placeholder: '请输入计划名称',
        label: '计划名称',
        required: true,
        value: "planName"
      }
    },

    // 负责人
    {
      keyId: 2, name: "bmSelectInput",
      config: {
        ['right-icon']: 'arrow',
        placeholder: '请选择负责人',
        label: '负责人',
        required: true,
        value: "chargePreson",
        children: [
          {
            keyId: 3, name: "bmPicker",
            config: {
              title: "负责人",
              columns: ['杭州', '宁波'],
              value: "chargePreson",
              ["item-height"]: pickerSize
            },
            methods: {
              onConfirm,
              onCancel
            }
          }
        ]
      }
    },


    // 检查人员

    {
      keyId: 5, name: "bmSelectInput",
      config: {
        ['right-icon']: 'arrow',
        placeholder: '请输入检查人员',
        label: '检查人员',
        required: true,
        value: "checkPreson",
        children: [
          {
            keyId: 6, name: "bmPicker",
            config: {
              title: "检查人员",
              columns: [
                // 第一列
                {
                  values: ['周一', '周二', '周三', '周四', '周五'],
                  defaultIndex: 2,
                },
                // 第二列
                {
                  values: ['上午', '下午', '晚上'],
                  defaultIndex: 1,
                },
              ],
              value: "checkPreson",
              ["item-height"]: pickerSize,
            },
            methods: {
              onConfirm: getCheckPerson,
              onCancel: onCancel
            }
          }
        ]
      }
    },


    //检查时间

    {
      keyId: 10, name: "bmSelectInput",
      config: {
        ['right-icon']: 'arrow',
        placeholder: '请输入检查时间',
        label: '检查时间',
        required: true,
        value: "checkTime",
        children: [
          {
            keyId: 6, name: "bmDatetimePicker",
            config: {
              title: "检查时间",
              value: "checkTime",
              ["item-height"]: pickerSize,
            },
            methods: {
              onConfirm: getCheckTime,
              onCancel: onCancel
            }
          }
        ]
      }
    },

    //检查周期
    {
      keyId: 20, name: "bmSelectInput",
      config: {
        ['right-icon']: 'arrow',
        placeholder: '选择检查周期',
        label: '检查周期',
        required: true,
        value: "checkCycle",
        children: [
          {
            keyId: 3, name: "bmPicker",
            config: {
              title: "检查周期",
              columns: ['每天', '每周', '每月', '每三月', '每年'],
              value: "checkCycle",
              ["item-height"]: pickerSize
            },
            methods: {
              onConfirm,
              onCancel
            }
          }
        ]
      }
    },


    //检查地点
    {
      keyId: 30, name: "bmSelectInput",
      config: {
        ['right-icon']: 'arrow',
        placeholder: '请输入检查地点',
        label: '检查地点',
        required: true,
        value: "checkLocal",
        children: [
          {
            keyId: 6, name: "bmPicker",
            config: {
              title: "检查地点",
              columns: [
                // 第一列
                {
                  values: ['周一', '周二', '周三', '周四', '周五'],
                  defaultIndex: 2,
                },
                // 第二列
                {
                  values: ['上午', '下午', '晚上'],
                  defaultIndex: 1,
                },
              ],
              value: "checkLocal",
              ["item-height"]: pickerSize,
            },
            methods: {
              onConfirm: getCheckPerson,
              onCancel: onCancel
            }
          }
        ]
      }
    },



    // 集合地点
    {
      keyId: 40, name: "bmInput",
      config: {
        placeholder: '请输入集合地点',
        label: '集合地点',
        required: true,
        value: "placeLocal"
      }
    },


    // 检查范围
    {
      keyId: 50, name: "bmInput",
      config: {
        placeholder: '请输入检查范围',
        label: '检查范围',
        required: true,
        value: "checkArea"
      }
    },

    {
      keyId: 60, name: "bmInput",
      config: {
        placeholder: '备注',
        label: '备注',
        value: "remark"
      }
    },

  ]
}







export {
  globalInfo
}



