<template>
  <!-- 来源：需求.txt 2.1 顶部数据统计卡片 -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-xs text-gray-500 mb-1">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-800">
          {{ isRate ? value : formattedValue }}<span class="text-sm font-normal text-gray-500">{{ unit }}</span>
        </p>
      </div>
      <!-- 图标 -->
      <div :class="iconBgClass" class="w-10 h-10 rounded-lg flex items-center justify-center">
        <slot name="icon">
          <svg class="w-5 h-5" :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </slot>
      </div>
    </div>
    <!-- 环比变化 -->
    <div v-if="growth !== null" class="mt-2 flex items-center gap-1">
      <span
        :class="[
          'text-xs font-medium',
          growth >= 0 ? 'text-green-600' : 'text-red-600'
        ]"
      >
        {{ growth >= 0 ? '↑' : '↓' }} {{ Math.abs(growth) }}%
      </span>
      <span class="text-xs text-gray-400">较上周</span>
    </div>
    <div v-else class="mt-2">
      <span class="text-xs text-orange-500 font-medium">待处理</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  growth: {
    type: Number,
    default: null
  },
  unit: {
    type: String,
    default: ''
  },
  isRate: {
    type: Boolean,
    default: false
  }
})

const formattedValue = computed(() => {
  if (props.value >= 1000) {
    return (props.value / 1000).toFixed(1) + 'k'
  }
  return props.value
})

const iconBgClass = computed(() => {
  if (props.title.includes('岗位')) return 'bg-blue-100'
  if (props.title.includes('报名')) return 'bg-green-100'
  if (props.title.includes('通过率')) return 'bg-purple-100'
  return 'bg-orange-100'
})

const iconClass = computed(() => {
  if (props.title.includes('岗位')) return 'text-blue-600'
  if (props.title.includes('报名')) return 'text-green-600'
  if (props.title.includes('通过率')) return 'text-purple-600'
  return 'text-orange-600'
})
</script>
