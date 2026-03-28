<template>
  <!-- 来源：需求.txt 1.2 职位推荐列表 -->
  <div class="card p-4 group">
    <!-- 头部信息 -->
    <div class="flex justify-between items-start mb-3">
      <div class="flex-1">
        <h4 class="text-base font-semibold text-gray-800 group-hover:text-[#1e3a5f] transition-colors">{{ job.title }}</h4>
        <p class="text-sm text-gray-500">{{ job.team }}</p>
      </div>
      <!-- AI匹配度标签 -->
      <div :class="matchClass" class="px-3 py-1 rounded-full text-xs font-medium">
        {{ job.matchScore }}% 匹配
      </div>
    </div>

    <!-- 基本信息 -->
    <div class="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
      <span class="flex items-center gap-1">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        {{ job.department }}
      </span>
      <span class="flex items-center gap-1">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        {{ job.grade }}
      </span>
      <span class="flex items-center gap-1">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {{ job.major }}
      </span>
    </div>

    <!-- 招聘人数和截止日期 -->
    <div class="flex items-center gap-4 mb-3 text-xs">
      <span class="text-gray-600">
        招聘 <span class="font-semibold text-[#c0392b]">{{ job.recruits }}</span> 人
      </span>
      <span class="text-[#c0392b] font-medium flex items-center gap-1">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        截止 {{ job.deadline }}
      </span>
    </div>

    <!-- 技能标签 -->
    <div class="flex flex-wrap gap-1.5 mb-3">
      <span
        v-for="skill in job.skills"
        :key="skill"
        class="px-2.5 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] rounded-lg text-xs font-medium"
      >
        {{ skill }}
      </span>
    </div>

    <!-- 描述摘要 -->
    <p class="text-xs text-gray-500 mb-3 line-clamp-2">{{ job.description }}</p>

    <!-- 底部信息 -->
    <div class="flex justify-between items-center pt-3 border-t border-[#e8e4dc]">
      <div class="flex items-center gap-3 text-xs text-gray-500">
        <span>{{ job.publishTime }} 发布</span>
        <span class="flex items-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ job.applicants }} 人已报名
        </span>
      </div>
      <div class="flex gap-2">
        <button
          @click.stop="$emit('favorite', job.id)"
          class="px-3 py-1.5 text-xs border border-[#e8e4dc] text-gray-600 rounded-lg hover:bg-[#faf8f5] hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
        >
          收藏
        </button>
        <button
          @click.stop="$emit('apply', job.id)"
          class="px-3 py-1.5 text-xs bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2d5a8a] transition-colors"
        >
          报名
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  job: {
    type: Object,
    required: true
  }
})

defineEmits(['favorite', 'apply'])

const matchClass = computed(() => {
  if (props.job.matchScore >= 90) {
    return 'bg-[#27ae60]/10 text-[#27ae60]'
  } else if (props.job.matchScore >= 70) {
    return 'bg-[#f39c12]/10 text-[#f39c12]'
  } else {
    return 'bg-gray-100 text-gray-600'
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
