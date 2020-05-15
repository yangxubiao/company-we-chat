<template>
  <div id="index">
      
       <!-- 顶部logo -->
      <div class="title"></div>

      <!-- body区域 -->
      <div class="body">
          <div class="top">
           <van-swipe >
                      <van-swipe-item >
                      <ul>
                             <li>
                                  <router-link to="/reportDanger">
                                       <p><img src="../static/image/h_danger.svg" alt="" /></p>
                                       <h4>隐患上报</h4>
                                    </router-link>
                             </li>
                              <li>
                                  <router-link to="/checkPlan">
                                       <p><img src="../static/image/c_plan.svg" alt="" /></p>
                                       <h4>检查计划</h4>
                                    </router-link>
                             </li>
                              <li>
                                  <router-link to="/checkPlan">
                                       <p><img src="../static/image/a_check.svg" alt="" /></p>
                                       <h4>新增检查</h4>
                                    </router-link>
                             </li>
                              <li>
                                  <router-link to="/reportDanger">
                                       <p><img src="../static/image/c_standard.svg" alt="" /></p>
                                       <h4>隐患上报</h4>
                                    </router-link>
                             </li>
                      
                         </ul>
                 </van-swipe-item>
               <van-swipe-item>
                      <ul class="h_proposal">
                              <li>
                                  <router-link to="/reportDanger">
                                       <p><img src="../static/image/h_proposal.svg" alt="" /></p>
                                       <h4>隐患上报</h4>
                                    </router-link>
                             </li>
                    
                      
                         </ul>
              </van-swipe-item>
       </van-swipe>
         </div>
                    <div class="echarts">
                       <div id="echartContainer"></div>
                   </div> 
        </div>

      <!-- 空白区域 -->
       <div class="bottom">
      </div>

      <!-- 首页底部 -->
        <bmTabbar  />

     </div>
</template>

<script>

import {setSize} from '@/utils/tools'

export default {
  name: 'Index',
  data(){
    return {
      
    }
  },
  methods:{
    drawBar(){
          var myChart = this.$echarts.init(document.getElementById('echartContainer'));
          myChart.setOption({
                title: {
                  text: '堆叠条形图',
                  left:10,
                  top:15,

                  textStyle:{
                     fontSize:setSize
                  }
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  },
                    textStyle:{
                     fontSize:setSize
                  }
              },
              legend: {
                  data: ['直接访问', '搜索引擎'],
                  right:10,
                  top:15,
                 textStyle:{
                     fontSize:setSize
                  }
              },
              color:['#A0B8DA','#92DAB2'],
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: {
                  type: 'value',
                  axisLine:{
                    show:false
                  },
                   axisTick:{
                      show:false
                   },
                   minorTick:{
                     show:false
                   },
                    splitLine:{
                      show:false
                   },
                   nameTextStyle:{
                     color:"#F00"
                   },
                 axisLabel: {
                   
                
                    fontSize:setSize ,
                }
              
             
              },
              yAxis: {
                  type: 'category',
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                  axisLine:{
                    show:false
                  },
                   axisTick:{
                      show:false
                   },
                   minorTick:{
                     show:false
                   },
                   splitLine:{
                      show:false
                   },
                  axisLabel: {
                    fontSize:setSize ,
                }
                  
              },
              series: [
                  {
                      name: '直接访问',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          show: false,
                          position: 'insideRight'
                      },
                      data: [320, 302, 301, 334, 390, 330, 320]
                  },
         
          
                  {
                      name: '搜索引擎',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          show: false,
                          position: 'insideRight'
                      },
                      data: [820, 832, 901, 934, 1290, 1330, 1320]
                  }
              ]
          })

    }
  },
  mounted() {
       this.drawBar()
 },

}
</script>


<style lang="scss" scoped>
   @import "@/style/views/Index.scss";
</style>