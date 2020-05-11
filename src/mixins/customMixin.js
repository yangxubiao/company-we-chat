
const customMixin ={
    props:{
        config:{
            type:Object,
            default:()=>{}
        },
          that:{
            type:Object,
        },
          globalData:{
            type:Object,
        },
     },
       data(){
           return { 
               ...this.globalData
            }
       },
     

 }
 
 export default customMixin;