
//检查
const globalInfo  = {

    data:{
        form:{
 
        }
     },

    inputs:[
        {type:"dateTime",required:true,placeholder:"请选择时间",readonly:true,label:"上报时间",class:"Mark",value:'form.reportTime',click:openReportTime }
    ]
}



function openReportTime(){console.log(this)}


exports.globalInfo=globalInfo