<template>
  <!-- 来源：需求.txt 2.6 全局设置面板 -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 class="text-sm font-semibold text-gray-700">全局设置</h3>
    </div>

    <!-- AI模型参数配置 -->
    <div class="mb-4 p-4 bg-gray-50 rounded-lg">
      <h4 class="text-xs font-medium text-gray-600 mb-3">AI 模型参数配置</h4>

      <!-- 筛选阈值 -->
      <div class="mb-3">
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs text-gray-500">筛选阈值</span>
          <span class="text-xs font-medium text-gray-700">{{ localSettings.ai.filterThreshold }}分</span>
        </div>
        <input
          v-model.number="localSettings.ai.filterThreshold"
          type="range"
          min="0"
          max="100"
          class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <!-- 关键词匹配度 -->
      <div class="mb-3">
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs text-gray-500">关键词匹配度</span>
          <span class="text-xs font-medium text-gray-700">{{ localSettings.ai.keywordMatch }}%</span>
        </div>
        <input
          v-model.number="localSettings.ai.keywordMatch"
          type="range"
          min="0"
          max="100"
          class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <!-- 评分权重 -->
      <div>
        <span class="text-xs text-gray-500 mb-2 block">评分权重</span>
        <div class="grid grid-cols-2 gap-2">
          <div v-for="(value, key) in localSettings.ai.scoreWeights" :key="key" class="flex items-center justify-between bg-white p-2 rounded">
            <span class="text-xs text-gray-600">{{ weightLabels[key] }}</span>
            <span class="text-xs font-medium text-gray-700">{{ value }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 审核规则配置 -->
    <div class="mb-4 p-4 bg-gray-50 rounded-lg">
      <h4 class="text-xs font-medium text-gray-600 mb-3">审核规则配置</h4>

      <div class="space-y-3">
        <!-- 自动审核开关 -->
        <div class="flex items-center justify-between">
          <span class="text-xs text-gray-600">自动审核</span>
          <button
            @click="localSettings.review.autoReview = !localSettings.review.autoReview"
            :class="[
              'relative inline-flex h-5 w-9 items-center rounded-full transition-colors',
              localSettings.review.autoReview ? 'bg-blue-600' : 'bg-gray-300'
            ]"
          >
            <span
              :class="[
                'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                localSettings.review.autoReview ? 'translate-x-4' : 'translate-x-0.5'
              ]"
            />
          </button>
        </div>

        <!-- 人工审核开关 -->
        <div class="flex items-center justify-between">
          <span class="text-xs text-gray-600">人工审核</span>
          <button
            @click="localSettings.review.manualReview = !localSettings.review.manualReview"
            :class="[
              'relative inline-flex h-5 w-9 items-center rounded-full transition-colors',
              localSettings.review.manualReview ? 'bg-blue-600' : 'bg-gray-300'
            ]"
          >
            <span
              :class="[
                'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                localSettings.review.manualReview ? 'translate-x-4' : 'translate-x-0.5'
              ]"
            />
          </button>
        </div>

        <!-- 通知设置 -->
        <div class="pt-2 border-t border-gray-200">
          <span class="text-xs text-gray-500 mb-2 block">通知设置</span>
          <div class="flex gap-4">
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input
                v-model="localSettings.review.notifications.email"
                type="checkbox"
                class="rounded text-blue-600"
              />
              <span class="text-xs text-gray-600">邮件</span>
            </label>
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input
                v-model="localSettings.review.notifications.sms"
                type="checkbox"
                class="rounded text-blue-600"
              />
              <span class="text-xs text-gray-600">短信</span>
            </label>
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input
                v-model="localSettings.review.notifications.inApp"
                type="checkbox"
                class="rounded text-blue-600"
              />
              <span class="text-xs text-gray-600">站内信</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- 保存按钮 -->
    <button
      @click="handleSave"
      class="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
    >
      保存设置
    </button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  settings: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['save'])

const localSettings = reactive({
  ai: { ...props.settings.ai },
  review: {
    ...props.settings.review,
    notifications: { ...props.settings.review.notifications }
  }
})

const weightLabels = {
  technical: '技术能力',
  communication: '沟通表达',
  innovation: '创新思维',
  teamwork: '团队协作',
  specialty: '特长展示'
}

const handleSave = () => {
  emit('save', { ...localSettings })
}
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
}
</style>
