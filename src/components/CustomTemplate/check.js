
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
    ]
}





export {
    globalInfo,
    data
} 



