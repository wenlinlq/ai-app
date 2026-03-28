<template>
  <!-- 来源：需求.txt 2.3 候选人列表 -->
  <div class="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
    <div class="flex items-start gap-4">
      <!-- 头像 -->
      <img
        :src="candidate.avatar"
        :alt="candidate.name"
        class="w-14 h-14 rounded-full bg-gray-100"
      />

      <!-- 信息区 -->
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between mb-2">
          <div>
            <h4 class="text-base font-semibold text-gray-800">{{ candidate.name }}</h4>
            <p class="text-xs text-gray-500">{{ candidate.studentId }}</p>
          </div>
          <!-- AI评分 -->
          <div class="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 px-2.5 py-1 rounded-full">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span class="text-white text-sm font-bold">{{ candidate.aiScore }}</span>
          </div>
        </div>

        <!-- 基本信息 -->
        <div class="flex flex-wrap gap-2 mb-2 text-xs text-gray-500">
          <span>{{ candidate.department }}</span>
          <span>·</span>
          <span>{{ candidate.major }}</span>
          <span>·</span>
          <span>{{ candidate.grade }}</span>
        </div>

        <!-- 智能标签 -->
        <div class="flex flex-wrap gap-1.5 mb-3">
          <span
            v-for="tag in candidate.tags"
            :key="tag"
            class="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs"
          >
            {{ tag }}
          </span>
        </div>

        <!-- 申请信息 -->
        <div class="flex items-center justify-between text-xs">
          <div>
            <p class="text-gray-600">{{ candidate.job }}</p>
            <p class="text-gray-400">{{ candidate.team }}</p>
          </div>
          <span class="text-gray-400">{{ candidate.applyTime }}</span>
        </div>
      </div>
    </div>

    <!-- 底部状态和操作 -->
    <div class="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
      <!-- 状态 -->
      <span :class="statusClass" class="px-2.5 py-1 rounded-full text-xs font-medium">
        {{ candidate.status }}
      </span>

      <!-- 操作按钮 -->
      <div class="flex gap-2">
        <button
          @click="$emit('view-detail', candidate.id)"
          class="px-3 py-1.5 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          查看详情
        </button>
        <button
          v-if="candidate.status === '待审核' || candidate.status === '已筛选'"
          @click="$emit('send-invite', candidate.id)"
          class="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          发送面试邀请
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  candidate: {
    type: Object,
    required: true
  }
})

defineEmits(['view-detail', 'send-invite'])

const statusClass = computed(() => {
  switch (props.candidate.status) {
    case '待审核':
      return 'bg-yellow-100 text-yellow-700'
    case '已筛选':
      return 'bg-blue-100 text-blue-700'
    case '面试中':
      return 'bg-purple-100 text-purple-700'
    case '已录取':
      return 'bg-green-100 text-green-700'
    default:
      return 'bg-gray-100 text-gray-600'
  }
})
</script>
