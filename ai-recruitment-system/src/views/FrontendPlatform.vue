<template>
  <div class="h-full overflow-y-auto p-4 space-y-4">
    <!-- 标注：职位搜索栏 -->
    <div class="relative annotation-wrapper">
      <div class="absolute -left-1 -top-1 -bottom-1 w-0.5 bg-blue-500 annotation-line"></div>
      <div class="absolute -left-8 top-2 text-xs text-blue-600 font-medium bg-blue-50 px-1 rounded annotation-label">
        1.1
      </div>
      <SearchBar @search="handleSearch" />
    </div>

    <!-- 标注：职位推荐列表 -->
    <div class="relative annotation-wrapper">
      <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-blue-500 annotation-line"></div>
      <div class="absolute -left-8 top-2 text-xs text-blue-600 font-medium bg-blue-50 px-1 rounded annotation-label">
        1.2
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <h3 class="text-sm font-semibold text-gray-700 mb-3">职位推荐</h3>
        <div class="space-y-3">
          <JobCard
            v-for="job in jobs"
            :key="job.id"
            :job="job"
            @favorite="handleFavorite"
            @apply="handleApply"
          />
        </div>
      </div>
    </div>

    <!-- 标注：AI简历优化助手 -->
    <div class="relative annotation-wrapper">
      <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-blue-500 annotation-line"></div>
      <div class="absolute -left-8 top-2 text-xs text-blue-600 font-medium bg-blue-50 px-1 rounded annotation-label">
        1.3
      </div>
      <ChatWindow />
    </div>

    <!-- 标注：面试预约日历 -->
    <div class="relative annotation-wrapper">
      <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-blue-500 annotation-line"></div>
      <div class="absolute -left-8 top-2 text-xs text-blue-600 font-medium bg-blue-50 px-1 rounded annotation-label">
        1.4
      </div>
      <Calendar :schedules="interviewSchedule" @select-date="handleSelectDate" />
    </div>

    <!-- 标注：申请进度追踪 -->
    <div class="relative annotation-wrapper">
      <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-blue-500 annotation-line"></div>
      <div class="absolute -left-8 top-2 text-xs text-blue-600 font-medium bg-blue-50 px-1 rounded annotation-label">
        1.5
      </div>
      <ProgressTracker :progress="progressData" />
    </div>

    <!-- 标注：AI智能匹配模块 -->
    <div class="relative annotation-wrapper">
      <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-purple-500 annotation-line"></div>
      <div class="absolute -left-8 top-2 text-xs text-purple-600 font-medium bg-purple-50 px-1 rounded annotation-label">
        3
      </div>
      <MatchingModule />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import JobCard from '../components/JobCard.vue'
import ChatWindow from '../components/ChatWindow.vue'
import Calendar from '../components/Calendar.vue'
import ProgressTracker from '../components/ProgressTracker.vue'
import MatchingModule from '../components/MatchingModule.vue'
import { jobs, interviewSchedule, progressData } from '../data/mockData'

const handleSearch = (searchData) => {
  console.log('搜索条件:', searchData)
}

const handleFavorite = (jobId) => {
  console.log('收藏职位:', jobId)
}

const handleApply = (jobId) => {
  console.log('申请职位:', jobId)
}

const handleSelectDate = (date) => {
  console.log('选择日期:', date)
}
</script>

<style scoped>
.annotation-wrapper {
  position: relative;
  padding-left: 8px;
}

.annotation-line {
  border-radius: 2px;
}

.annotation-label {
  white-space: nowrap;
}
</style>
