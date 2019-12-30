<template>
  <div class="wrap">
    <div class="chart-wrap" id="chart">

    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart: null,
      options: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = echarts.init(document.getElementById('chart'));
      this.chart.setOption(this.options);
    });
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    .chart-wrap {
      width: 600px;
      height: 400px;
    }
  }
</style>