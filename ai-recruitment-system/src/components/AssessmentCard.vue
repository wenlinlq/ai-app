<template>
  <!-- 来源：需求.txt 2.4 AI面试/考核评估摘要卡片 -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h3 class="text-sm font-semibold text-gray-700">AI 面试评估结果</h3>
    </div>

    <!-- 评分维度 -->
    <div class="space-y-3 mb-4">
      <div
        v-for="dim in data.dimensions"
        :key="dim.name"
        class="flex items-center gap-3"
      >
        <span class="text-xs text-gray-500 w-16 flex-shrink-0">{{ dim.name }}</span>
        <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-500"
            :class="getScoreColor(dim.score)"
            :style="{ width: `${(dim.score / dim.maxScore) * 100}%` }"
          ></div>
        </div>
        <span class="text-xs font-medium text-gray-700 w-10 text-right">{{ dim.score }}</span>
      </div>
    </div>

    <!-- AI评价摘要 -->
    <div class="mb-4">
      <h4 class="text-xs font-medium text-gray-600 mb-2">AI 评价摘要</h4>
      <p class="text-sm text-gray-600 leading-relaxed">{{ data.summary }}</p>
    </div>

    <!-- 推荐建议 -->
    <div
      :class="[
        'flex items-center justify-between p-3 rounded-lg',
        recommendationBgClass
      ]"
    >
      <div class="flex items-center gap-2">
        <component :is="recommendationIcon" class="w-5 h-5" :class="recommendationIconClass" />
        <span class="text-sm font-medium" :class="recommendationTextClass">{{ data.recommendation }}</span>
      </div>
      <button
        class="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        查看详细报告
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, h } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const getScoreColor = (score) => {
  if (score >= 90) return 'bg-green-500'
  if (score >= 75) return 'bg-blue-500'
  if (score >= 60) return 'bg-yellow-500'
  return 'bg-red-500'
}

const recommendationBgClass = computed(() => {
  switch (props.data.recommendationLevel) {
    case 'high':
      return 'bg-green-50 border border-green-100'
    case 'medium':
      return 'bg-yellow-50 border border-yellow-100'
    case 'low':
      return 'bg-red-50 border border-red-100'
    default:
      return 'bg-gray-50'
  }
})

const recommendationTextClass = computed(() => {
  switch (props.data.recommendationLevel) {
    case 'high':
      return 'text-green-700'
    case 'medium':
      return 'text-yellow-700'
    case 'low':
      return 'text-red-700'
    default:
      return 'text-gray-700'
  }
})

const recommendationIconClass = computed(() => {
  switch (props.data.recommendationLevel) {
    case 'high':
      return 'text-green-600'
    case 'medium':
      return 'text-yellow-600'
    case 'low':
      return 'text-red-600'
    default:
      return 'text-gray-600'
  }
})

const recommendationIcon = {
  render() {
    if (props.data.recommendationLevel === 'high') {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })
      ])
    } else if (props.data.recommendationLevel === 'medium') {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
      ])
    } else {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' })
      ])
    }
  }
}
</script>
