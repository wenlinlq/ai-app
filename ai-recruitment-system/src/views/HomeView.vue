<template>
  <div class="h-full overflow-y-auto p-4 md:p-6 space-y-5 md:space-y-7">
    <!-- Banner 区域 - 重构设计 -->
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1e3a5f] via-[#2d5a8a] to-[#1d6f42] min-h-[220px] md:min-h-[260px]">
      <!-- 装饰性背景 - 柔和处理 -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- 抽象建筑线条 - 教学楼剪影 -->
        <svg class="absolute bottom-0 left-0 w-full h-28 md:h-36 text-white/5" viewBox="0 0 1200 140" preserveAspectRatio="none">
          <path d="M0,0 L0,140 L100,140 L100,60 L160,60 L160,140 L240,140 L240,80 L320,80 L320,140 L420,140 L420,40 L500,40 L500,140 L620,140 L620,50 L700,50 L700,140 L820,140 L820,70 L900,70 L900,140 L1050,140 L1050,90 L1120,90 L1120,140 L1200,140 L1200,0 Z" fill="currentColor"/>
        </svg>
        <!-- 装饰元素 - 柔和圆点 -->
        <div class="absolute top-6 left-[10%] w-2 h-2 rounded-full bg-yellow-400/40 animate-pulse"></div>
        <div class="absolute top-14 left-[22%] w-3 h-3 rounded-full bg-white/15"></div>
        <div class="absolute bottom-20 right-[15%] w-2 h-2 rounded-full bg-green-400/40"></div>
        <div class="absolute bottom-12 right-[30%] w-2.5 h-2.5 rounded-full bg-yellow-400/30"></div>
        <div class="absolute top-1/3 right-[40%] w-1.5 h-1.5 rounded-full bg-white/20"></div>
        <!-- 装饰线 -->
        <div class="absolute top-[45%] left-0 w-full h-px bg-white/8"></div>
        <div class="absolute top-[30%] left-0 w-full h-px bg-white/5"></div>
      </div>

      <!-- 内容区域 -->
      <div class="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center">
        <div class="max-w-lg animate-fade-in-up">
          <!-- 标题 - 竖线装饰 -->
          <div class="flex items-start gap-3 mb-4">
            <div class="w-1 h-12 md:h-14 bg-gradient-to-b from-[#f39c12] to-[#e74c3c] rounded-full flex-shrink-0"></div>
            <div>
              <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                寻找下一个<br/>
                <span class="text-[#f39c12]">校园之星</span>
              </h1>
            </div>
          </div>

          <!-- 副标题 -->
          <p class="text-white/85 text-sm md:text-base mb-6 ml-4 max-w-md leading-relaxed">
            连接校园人才与优质团队，让每一个独特的你都能找到发光的舞台
          </p>

          <!-- 按钮组 -->
          <div class="flex flex-wrap gap-3 ml-4">
            <button @click="$emit('navigate', 'frontend')" class="px-5 py-2.5 bg-[#f39c12] text-white rounded-xl font-medium text-sm hover:bg-[#e67e22] transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 flex items-center gap-2 group">
              <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              浏览职位
            </button>
            <button @click="$emit('navigate', 'backend')" class="px-5 py-2.5 glass text-white rounded-xl font-medium text-sm hover:bg-white/20 transition-all duration-300 border border-white/25 flex items-center gap-2 group">
              <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              发布岗位
            </button>
          </div>
        </div>

        <!-- 右侧统计数字 - 淡入动画 -->
        <div class="absolute right-6 md:right-10 bottom-6 md:bottom-10 hidden md:flex flex-col items-end gap-5 animate-fade-in-up stagger-2">
          <div class="text-right">
            <p class="text-3xl md:text-4xl font-bold text-white">128</p>
            <p class="text-white/60 text-xs">在招职位</p>
          </div>
          <div class="text-right">
            <p class="text-3xl md:text-4xl font-bold text-[#f39c12]">856</p>
            <p class="text-white/60 text-xs">报名人数</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 快捷入口 - 流畅卡片 -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      <div v-for="(item, index) in quickActions" :key="item.title"
           class="card p-4 md:p-5 cursor-pointer group animate-fade-in-up"
           :style="{ animationDelay: `${index * 0.1}s` }">
        <div :class="['w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3', item.bgColor]">
          <component :is="item.icon" class="w-5 h-5 md:w-6 md:h-6" :class="item.iconColor" />
        </div>
        <h3 class="font-semibold text-gray-800 text-sm md:text-base mb-1 group-hover:text-[#1e3a5f] transition-colors">{{ item.title }}</h3>
        <p class="text-gray-500 text-xs">{{ item.desc }}</p>
      </div>
    </div>

    <!-- 数据概览 - 柔和卡片 -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      <div v-for="(stat, index) in stats" :key="stat.label" class="card p-4 animate-fade-in-up" :style="{ animationDelay: `${0.2 + index * 0.1}s` }">
        <div class="flex items-center justify-between mb-2">
          <span class="text-gray-500 text-xs">{{ stat.label }}</span>
          <span :class="['text-xs font-medium flex items-center gap-1', stat.change >= 0 ? 'text-[#27ae60]' : 'text-[#e74c3c]']">
            <svg v-if="stat.change >= 0" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <svg v-else class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {{ Math.abs(stat.change) }}%
          </span>
        </div>
        <p class="text-2xl font-bold text-[#1e3a5f]">{{ stat.value }}</p>
      </div>
    </div>

    <!-- 最近动态 & 热门职位 -->
    <div class="grid md:grid-cols-2 gap-4 md:gap-5">
      <!-- 最近动态 -->
      <div class="card p-4 md:p-5 animate-fade-in-up stagger-3">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-gray-800">校园动态</h3>
          <span class="text-xs text-[#1e3a5f] bg-[#1e3a5f]/8 px-2.5 py-1 rounded-full flex items-center gap-1">
            <span class="w-1.5 h-1.5 bg-[#27ae60] rounded-full"></span>
            实时
          </span>
        </div>
        <div class="space-y-3">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#faf8f5] transition-all duration-200 cursor-pointer">
            <div :class="['w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105', activity.bgColor]">
              <component :is="activity.icon" class="w-4 h-4" :class="activity.iconColor" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-700 truncate">{{ activity.content }}</p>
              <p class="text-xs text-gray-400 mt-0.5">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门职位 -->
      <div class="card p-4 md:p-5 animate-fade-in-up stagger-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-gray-800">热门岗位</h3>
          <button class="text-xs text-[#1e3a5f] hover:underline transition-colors">查看全部</button>
        </div>
        <div class="space-y-3">
          <div v-for="job in hotJobs" :key="job.id" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#faf8f5] transition-all duration-200 cursor-pointer group">
            <div :class="['w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-105', job.bgGradient]">
              {{ job.title.charAt(0) }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-800 truncate group-hover:text-[#1e3a5f] transition-colors">{{ job.title }}</p>
              <p class="text-xs text-gray-500">{{ job.team }} · {{ job.applicants }}人报名</p>
            </div>
            <span :class="['px-2.5 py-1 rounded-full text-xs font-medium transition-transform hover:scale-105', job.matchClass]">
              {{ job.match }}%
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- AI 匹配流程 -->
    <div class="card p-5 md:p-6 animate-fade-in-up" style="animation-delay: 0.5s">
      <div class="flex items-center gap-3 mb-5 md:mb-6">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f39c12] to-[#e74c3c] flex items-center justify-center shadow-lg shadow-orange-500/20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800">智能匹配流程</h3>
          <p class="text-xs text-gray-500">AI 助力精准匹配</p>
        </div>
        <span class="ml-auto text-xs text-[#27ae60] flex items-center gap-1.5">
          <span class="w-2 h-2 bg-[#27ae60] rounded-full animate-pulse"></span>
          实时同步
        </span>
      </div>

      <!-- 流程步骤 -->
      <div class="flex items-center justify-between overflow-x-auto pb-2 gap-2 md:gap-0 -mx-2 px-2">
        <div v-for="(step, index) in aiSteps" :key="step.title" class="flex items-center flex-shrink-0">
          <div class="text-center group">
            <div :class="['w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mx-auto mb-2.5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1', step.bgColor]">
              <component :is="step.icon" class="w-6 h-6 md:w-7 md:h-6" :class="step.iconColor" />
            </div>
            <p class="text-xs md:text-sm font-medium text-gray-700">{{ step.title }}</p>
            <p class="text-[10px] md:text-xs text-gray-400 hidden md:block mt-0.5">{{ step.desc }}</p>
          </div>
          <svg v-if="index < aiSteps.length - 1" class="w-5 h-5 md:w-6 md:h-6 text-[#d5cec3] mx-1 md:mx-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

defineEmits(['navigate'])

const quickActions = [
  {
    title: '搜索职位',
    desc: '发现心仪岗位',
    bgColor: 'bg-[#1e3a5f]/8',
    iconColor: 'text-[#1e3a5f]',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })]) }
  },
  {
    title: '我的申请',
    desc: '追踪申请进度',
    bgColor: 'bg-[#27ae60]/10',
    iconColor: 'text-[#27ae60]',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' })]) }
  },
  {
    title: '面试日历',
    desc: '查看日程安排',
    bgColor: 'bg-[#c0392b]/8',
    iconColor: 'text-[#c0392b]',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })]) }
  },
  {
    title: '简历优化',
    desc: 'AI智能助力',
    bgColor: 'bg-[#f39c12]/10',
    iconColor: 'text-[#f39c12]',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })]) }
  }
]

const stats = [
  { label: '在招职位', value: '128', change: 12 },
  { label: '报名人数', value: '856', change: 8 },
  { label: '面试安排', value: '42', change: -5 },
  { label: '录用人数', value: '36', change: 15 }
]

const recentActivities = [
  { id: 1, content: '张三 报名了 ACM算法工作室', time: '5分钟前', bgColor: 'bg-[#1e3a5f]/8', iconColor: 'text-[#1e3a5f]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })]) } },
  { id: 2, content: 'AI 筛选完成 23 份简历', time: '15分钟前', bgColor: 'bg-[#f39c12]/10', iconColor: 'text-[#f39c12]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })]) } },
  { id: 3, content: '李四 通过了面试考核', time: '1小时前', bgColor: 'bg-[#27ae60]/10', iconColor: 'text-[#27ae60]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })]) } },
  { id: 4, content: '王五 收到了录用通知', time: '2小时前', bgColor: 'bg-[#c0392b]/8', iconColor: 'text-[#c0392b]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' })]) } }
]

const hotJobs = [
  { id: 1, title: '前端开发工程师', team: 'ACM算法工作室', applicants: 28, match: 95, matchClass: 'bg-[#27ae60]/10 text-[#27ae60]', bgGradient: 'bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a]' },
  { id: 2, title: '后端开发实习生', team: '云原生工作室', applicants: 35, match: 91, matchClass: 'bg-[#27ae60]/10 text-[#27ae60]', bgGradient: 'bg-gradient-to-br from-[#2d5a8a] to-[#1d6f42]' },
  { id: 3, title: '数据科学爱好者', team: 'AI创新实验室', applicants: 15, match: 88, matchClass: 'bg-[#f39c12]/10 text-[#f39c12]', bgGradient: 'bg-gradient-to-br from-[#1d6f42] to-[#2d5a8a]' },
  { id: 4, title: '摄影协会骨干', team: '光影摄影协会', applicants: 42, match: 72, matchClass: 'bg-gray-100 text-gray-600', bgGradient: 'bg-gradient-to-br from-[#c0392b] to-[#f39c12]' }
]

const aiSteps = [
  { title: '简历解析', desc: 'AI自动提取', bgColor: 'bg-[#1e3a5f]/8', iconColor: 'text-[#1e3a5f]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })]) } },
  { title: '技能匹配', desc: '关键词对比', bgColor: 'bg-[#f39c12]/10', iconColor: 'text-[#f39c12]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' })]) } },
  { title: 'AI 评分', desc: '多维度评估', bgColor: 'bg-[#c0392b]/8', iconColor: 'text-[#c0392b]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })]) } },
  { title: '智能推荐', desc: '精准匹配', bgColor: 'bg-[#27ae60]/10', iconColor: 'text-[#27ae60]', icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })]) } }
]
</script>
