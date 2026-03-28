<template>
  <!-- 来源：需求.txt 1.5 申请进度追踪模块 -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <h3 class="text-sm font-semibold text-gray-700 mb-4">申请进度追踪</h3>

    <!-- 进度时间轴 -->
    <div class="relative">
      <!-- 连接线 -->
      <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200"></div>
      <div
        class="absolute top-4 left-0 h-0.5 bg-blue-600 transition-all duration-500"
        :style="{ width: progressWidth }"
      ></div>

      <!-- 阶段列表 -->
      <div class="relative flex justify-between">
        <div
          v-for="(item, index) in progress"
          :key="item.stage"
          class="flex flex-col items-center"
        >
          <!-- 状态圆点 -->
          <div
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300',
              getStatusClass(item.status)
            ]"
          >
            <svg
              v-if="item.status === 'completed'"
              class="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <svg
              v-else-if="item.status === 'in_progress'"
              class="w-4 h-4 text-white animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span v-else class="text-xs text-gray-400">{{ index + 1 }}</span>
          </div>

          <!-- 阶段名称 -->
          <div class="mt-2 text-center">
            <p
              :class="[
                'text-xs font-medium',
                item.status === 'pending' ? 'text-gray-400' : 'text-gray-700'
              ]"
            >
              {{ item.stage }}
            </p>
            <!-- 详细信息 -->
            <p
              v-if="item.detail"
              :class="[
                'text-[10px] mt-0.5 max-w-[80px]',
                item.status === 'in_progress' ? 'text-blue-600' : 'text-gray-500'
              ]"
            >
              {{ item.detail }}
            </p>
            <p
              v-if="item.time"
              class="text-[10px] text-gray-400 mt-0.5"
            >
              {{ item.time }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  progress: {
    type: Array,
    required: true
  }
})

const getStatusClass = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500'
    case 'in_progress':
      return 'bg-blue-600'
    case 'pending':
      return 'bg-gray-200'
    default:
      return 'bg-gray-200'
  }
}

const progressWidth = computed(() => {
  const completedCount = props.progress.filter(p => p.status === 'completed').length
  const inProgressIndex = props.progress.findIndex(p => p.status === 'in_progress')

  if (inProgressIndex !== -1) {
    return `${(inProgressIndex / (props.progress.length - 1)) * 100}%`
  }

  return `${(completedCount / (props.progress.length - 1)) * 100}%`
})
</script>
