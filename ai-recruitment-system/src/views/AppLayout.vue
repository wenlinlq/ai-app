<template>
  <div class="h-screen flex flex-col bg-[#faf8f5]">
    <!-- 顶部导航栏 -->
    <header class="bg-white border-b border-[#e8e4dc] px-4 py-2 flex items-center justify-between flex-shrink-0">
      <div class="flex items-center gap-3">
        <!-- Logo - 书本图标 -->
        <div class="w-9 h-9 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-lg flex items-center justify-center shadow-md">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <h1 class="text-lg font-bold text-[#1e3a5f] hidden sm:block">AI 校园招聘</h1>
          <p class="text-xs text-gray-400 hidden sm:block -mt-1">连接校园人才</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button class="p-2 text-gray-500 hover:text-[#1e3a5f] hover:bg-[#faf8f5] rounded-lg transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div class="w-8 h-8 bg-gradient-to-br from-[#c0392b] to-[#f39c12] rounded-full flex items-center justify-center shadow-md">
          <span class="text-white text-sm font-medium">U</span>
        </div>
      </div>
    </header>

    <!-- 移动端 Tab 切换 -->
    <div class="lg:hidden flex border-b border-[#e8e4dc] bg-white">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'flex-1 py-3 text-sm font-medium transition-colors',
          activeTab === tab.id
            ? 'text-[#1e3a5f] border-b-2 border-[#1e3a5f]'
            : 'text-gray-500 hover:text-[#1e3a5f]'
        ]"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- 主内容区 -->
    <div class="flex-1 flex overflow-hidden">
      <!-- 首页 - 桌面端默认显示 -->
      <div
        :class="[
          'w-1/2 h-full overflow-hidden border-r border-[#e8e4dc] bg-[#faf8f5]',
          'hidden lg:block'
        ]"
      >
        <HomeView @navigate="handleNavigate" />
      </div>

      <!-- 移动端首页显示 -->
      <div
        v-if="activeTab === 'home'"
        class="flex-1 h-full overflow-hidden lg:hidden"
      >
        <HomeView @navigate="handleNavigate" />
      </div>

      <!-- 前台平台端 -->
      <div
        :class="[
          'w-1/2 h-full overflow-hidden border-r border-[#e8e4dc] bg-white',
          'hidden lg:block'
        ]"
      >
        <FrontendPlatform />
      </div>

      <!-- 移动端前台显示 -->
      <div
        v-if="activeTab === 'frontend'"
        class="flex-1 h-full overflow-hidden lg:hidden"
      >
        <FrontendPlatform />
      </div>

      <!-- 后台管理端 -->
      <div
        :class="[
          'w-1/2 h-full overflow-hidden bg-white',
          'hidden lg:block'
        ]"
      >
        <BackendManagement />
      </div>

      <!-- 移动端后台显示 -->
      <div
        v-if="activeTab === 'backend'"
        class="flex-1 h-full overflow-hidden lg:hidden"
      >
        <BackendManagement />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomeView from './HomeView.vue'
import FrontendPlatform from './FrontendPlatform.vue'
import BackendManagement from './BackendManagement.vue'

const activeTab = ref('home')

const tabs = [
  { id: 'home', name: '首页' },
  { id: 'frontend', name: '前台平台' },
  { id: 'backend', name: '后台管理' }
]

const handleNavigate = (target) => {
  activeTab.value = target
}
</script>
