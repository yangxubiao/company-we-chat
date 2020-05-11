
//隐患

const data ={
    pickerValue:"",
    form:{
  
        reportTime:"",
        reportTime1:"",
    }
  
}
const globalInfo  = {

    inputs:[
        
        {
            keyId:1,name:"bmShowSelectDatetime",
            config:{
                require:true,
                readonly:true,
                label:"上报时间",
                placeholder:"请选择时间",
                value:"reportTime",
    
            }
    }


    //     {
    //         keyId:2,name:"bmShowSelectInput",
    //         config:{
    //             require:true,
    //             readonly:true,
    //             label:"上报时间",
    //             placeholder:"请选择时间",
    //             value:data.form.reportTime,
    //             text1:'取消',
    //             text2:'确定',
    //             src:[
    //                 {
    //                 flex: 1,
    //                 values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
    //                 className: 'slot1',
    //                 textAlign: 'center'
    //                 },
    //            ],
    //         }
    // }

    ]
}





export {
    globalInfo,
    data
} 



