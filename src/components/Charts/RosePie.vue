<template>
  <div>
    <span>{{ title }}</span>
    <chart
      style="width:100%! important;"
      :options="chartOptions"
      :autoResize="true"
    />
  </div>
</template>
<script>
import Chart from 'vue-echarts/dist/vue-echarts'
const categoryColors = {
  Success: '#cdd422',
  Failed: '#e05915',
  Onhold: '#431c5d',
  Waiting: '#c2dde6',
  Running: '#d8ecfc',
  Others: '#bccbde'
}
const categoryData = [
  'Success',
  'Failed',
  'Onhold',
  'Waiting',
  'Running',
  'Others'
]
export default {
  name: 'rosePieChart',
  components: {
    Chart
  },
  props: {
    chartData: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    showLabels: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    chartOptions: function() {
      return {
        legend: {
          orient: 'horizontal',
          itemGap: 15,
          padding: 15,
          x: 'center',
          y: 'bottom',
          inactiveColor: 'rgb(225, 225, 225)',
          formatter: function(name) {
            return name
          },
          data: categoryData
        },
        series: [
          {
            type: 'pie',
            radius: '40%',
            center: ['50%', '50%'],
            roseType: 'radius',
            hoverAnimation: false,
            label: {
              normal: {
                show: this.showLabels,
                formatter: '{b|{b}}:{c|{c}}',
                rich: {
                  b: {
                    fontSize: 12,
                    lineHeight: 22,
                    color: '#000'
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  c: {
                    fontSize: 14,
                    color: '#000',
                    lineHeight: 22
                  }
                },
                textStyle: {
                  fontSize: 12,
                  color: 'rgba(0, 0, 0, 0.7)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(0, 0, 0, 0.3)'
                },
                smooth: 0.2,
                length: 20
              }
            },
            itemStyle: {
              normal: {
                color: ({ name }) => categoryColors[name]
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function() {
              return Math.random() * 200
            },
            data: [
              { value: this.chartData.Pum, name: categoryData[0] },
              { value: this.chartData.Malware, name: categoryData[1] },
              { value: this.chartData.Exploit, name: categoryData[2] },
              { value: this.chartData.Pup, name: categoryData[3] },
              { value: this.chartData.Ransomware, name: categoryData[4] },
              { value: this.chartData.Website, name: categoryData[5] }
            ].sort(function(a, b) {
              return a.value - b.value
            })
          }
        ]
      }
    }
  }
}
</script>
