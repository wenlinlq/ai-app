<template>
  <!-- 来源：需求.txt 第111-116行 AI智能匹配模块（两端联动） -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 class="text-sm font-semibold text-gray-700">AI 智能匹配</h3>
      <span class="ml-auto text-xs text-green-600 flex items-center gap-1">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        实时同步
      </span>
    </div>

    <!-- 匹配流程 -->
    <div class="flex items-center justify-between mb-4 px-2">
      <div class="text-center">
        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p class="text-xs text-gray-600">简历解析</p>
      </div>

      <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>

      <div class="text-center">
        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <p class="text-xs text-gray-600">AI 评分</p>
      </div>

      <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>

      <div class="text-center">
        <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-xs text-gray-600">智能匹配</p>
      </div>
    </div>

    <!-- 数据流向 -->
    <div class="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-lg mb-4">
      <!-- 前台 -->
      <div class="flex-1 text-center">
        <div class="flex items-center justify-center gap-1 mb-1">
          <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="text-xs font-medium text-gray-600">前台平台</span>
        </div>
        <p class="text-xs text-gray-400">学生投递简历</p>
      </div>

      <!-- 双向箭头 -->
      <div class="flex flex-col items-center">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span class="text-[10px] text-gray-400 mt-1">数据同步</span>
      </div>

      <!-- 后台 -->
      <div class="flex-1 text-center">
        <div class="flex items-center justify-center gap-1 mb-1">
          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-xs font-medium text-gray-600">后台管理</span>
        </div>
        <p class="text-xs text-gray-400">HR 筛选面试</p>
      </div>
    </div>

    <!-- 匹配算法简化展示 -->
    <div class="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span class="text-xs font-medium text-gray-600">匹配算法</span>
      </div>
      <div class="flex flex-wrap gap-1.5">
        <span class="px-2 py-0.5 bg-white rounded text-xs text-gray-600">技能匹配</span>
        <span class="px-2 py-0.5 bg-white rounded text-xs text-gray-600">成绩分析</span>
        <span class="px-2 py-0.5 bg-white rounded text-xs text-gray-600">项目经验</span>
        <span class="px-2 py-0.5 bg-white rounded text-xs text-gray-600">兴趣方向</span>
        <span class="px-2 py-0.5 bg-white rounded text-xs text-gray-600">年级适配</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
