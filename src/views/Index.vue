<template>
  <div id="index">
      <div class="title">
    
      </div>
      <div class="body">
                 <div class="left">
                    
                        <div>
                          <router-link to="/1">
                            <p>隐患上报</p>
                            </router-link>
                        </div>
                    

                </div>
                 <div class="right">
                      <div>
                        <router-link to="/1">
                            <p>新增检查</p>
                         </router-link>
                      </div>

                       <div>
                        <router-link to="/1">
                            <p>隐患/建议台账</p>
                         </router-link>
                      </div>
                     

                      <div>
                        <router-link to="/1">
                            <p>检查计划台账</p>
                         </router-link>
                      </div>


                        <div>
                        <router-link to="/1">
                            <p>检查标准库</p>
                         </router-link>
                      </div>

                 </div>

                    <div class="echarts">
                       <div id="echartContainer" style="width:100vw; height:60vh"></div>
                   </div>
      </div>
      <div class="bottom">
      </div>
        <myTabbar  />

     </div>

</template>

<script>

import myTabbar from '@/components/myTabbar.vue'
export default {
  name: 'Index',
  data(){
    return {
    
    }
  },
  components:{
     myTabbar
  },
  mounted() {
   
    var myChart = this.$echarts.init(document.getElementById('echartContainer'));
    // 绘制图表
    myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
 }
}
</script>


<style lang="scss" scoped>
 @import "@/style/views/Index.scss";
</style>