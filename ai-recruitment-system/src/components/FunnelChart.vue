<template>
  <!-- 来源：需求.txt 2.5 招新漏斗图 -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-sm font-semibold text-gray-700">招新漏斗分析</h3>
      <span class="text-xs text-gray-500">数据实时更新</span>
    </div>

    <!-- 漏斗图容器 -->
    <div ref="chartRef" class="h-64"></div>

    <!-- 底部统计 -->
    <div class="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-gray-100">
      <div class="text-center">
        <p class="text-lg font-bold text-gray-800">{{ total }}</p>
        <p class="text-xs text-gray-500">总浏览</p>
      </div>
      <div class="text-center">
        <p class="text-lg font-bold text-blue-600">{{ applyRate }}%</p>
        <p class="text-xs text-gray-500">投递率</p>
      </div>
      <div class="text-center">
        <p class="text-lg font-bold text-purple-600">{{ interviewRate }}%</p>
        <p class="text-xs text-gray-500">面试率</p>
      </div>
      <div class="text-center">
        <p class="text-lg font-bold text-green-600">{{ finalRate }}%</p>
        <p class="text-xs text-gray-500">最终录用</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const chartRef = ref(null)
let chartInstance = null

const total = computed(() => props.data[0]?.count || 0)
const applyRate = computed(() => {
  const first = props.data[0]?.count || 1
  const second = props.data[1]?.count || 0
  return ((second / first) * 100).toFixed(1)
})
const interviewRate = computed(() => {
  const second = props.data[1]?.count || 1
  const fifth = props.data[4]?.count || 0
  return ((fifth / second) * 100).toFixed(1)
})
const finalRate = computed(() => {
  const first = props.data[0]?.count || 1
  const last = props.data[6]?.count || 0
  return ((last / first) * 100).toFixed(1)
})

const initChart = () => {
  if (!chartRef.value) return

  chartInstance = echarts.init(chartRef.value)

  const chartData = props.data.map((item, index) => ({
    name: item.stage,
    value: item.count,
    rate: item.rate
  }))

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const data = props.data[params.dataIndex]
        return `${params.name}<br/>数量: ${params.value}<br/>转化率: ${data.rate}%`
      }
    },
    series: [
      {
        name: '招新漏斗',
        type: 'funnel',
        left: '10%',
        top: 20,
        bottom: 20,
        width: '80%',
        min: 0,
        max: props.data[0]?.count || 100,
        minSize: '10%',
        maxSize: '100%',
        sort: 'descending',
        gap: 4,
        label: {
          show: true,
          position: 'inside',
          formatter: (params) => {
            return params.name
          },
          fontSize: 11
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            fontSize: 13
          }
        },
        data: chartData.map((item, index) => ({
          value: item.value,
          name: item.name,
          itemStyle: {
            color: [
              '#3b82f6',
              '#6366f1',
              '#8b5cf6',
              '#a855f7',
              '#d946ef',
              '#10b981',
              '#22c55e'
            ][index]
          }
        }))
      }
    ]
  }

  chartInstance.setOption(option)
}

watch(() => props.data, () => {
  if (chartInstance) {
    initChart()
  }
}, { deep: true })

onMounted(() => {
  initChart()

  window.addEventListener('resize', () => {
    chartInstance?.resize()
  })
})
</script>
