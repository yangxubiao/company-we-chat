const  getFullTime=date=>{

    var year = date.getFullYear();//获取年；
    var month = date.getMonth()+1;//获取月份，由于月份是从0开始计算，所以要加1
    var day = date.getDate(); //获取日
    var hour = date.getHours();//获取时间
    var minute = date.getMinutes(); //分
    var second = date.getSeconds();//秒
    return year+"-"+(AutoJoinZero(month))+"-"+ (AutoJoinZero(day)) +"  "+ (AutoJoinZero(hour)) +":"+  (AutoJoinZero(minute))+":" + (AutoJoinZero(second))
   
} 

function AutoJoinZero(num){

  return  num < 10 ?  "0" + num  :  num ;
}


export {
    getFullTime
}