<template>
  <!-- 来源：需求.txt 1.3 AI简历优化助手对话窗口 -->
  <div class="card overflow-hidden">
    <!-- 头部 -->
    <div class="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] px-4 py-3">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 class="text-white font-semibold">AI 简历优化助手</h3>
          <p class="text-white/70 text-xs">为你的简历保驾护航</p>
        </div>
        <span class="ml-auto text-xs text-[#27ae60] flex items-center gap-1">
          <span class="w-2 h-2 bg-[#27ae60] rounded-full animate-pulse"></span>
          在线
        </span>
      </div>
    </div>

    <!-- 消息区域 -->
    <div class="h-56 md:h-64 overflow-y-auto p-4 space-y-4 bg-[#faf8f5]" ref="messagesContainer">
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="['flex', msg.type === 'user' ? 'justify-end' : 'justify-start']"
      >
        <div
          :class="[
            'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm',
            msg.type === 'user'
              ? 'bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] text-white rounded-br-md'
              : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-[#e8e4dc]'
          ]"
        >
          <p>{{ msg.content }}</p>
          <span :class="['text-xs mt-1 block', msg.type === 'user' ? 'text-white/60' : 'text-gray-400']">
            {{ msg.time }}
          </span>
        </div>
      </div>
    </div>

    <!-- 快捷操作 -->
    <div class="px-4 py-2.5 border-t border-[#e8e4dc] bg-white flex gap-2 flex-wrap">
      <button
        v-for="action in quickActions"
        :key="action"
        @click="handleQuickAction(action)"
        class="px-3 py-1.5 text-xs bg-[#faf8f5] text-[#1e3a5f] rounded-full hover:bg-[#1e3a5f]/10 transition-colors border border-[#e8e4dc]"
      >
        {{ action }}
      </button>
    </div>

    <!-- 输入区域 -->
    <div class="p-3 border-t border-[#e8e4dc] bg-white">
      <div class="flex gap-2">
        <input
          v-model="inputMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="输入你的问题..."
          class="flex-1 px-4 py-2.5 border border-[#e8e4dc] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent bg-[#faf8f5]"
        />
        <button
          @click="sendMessage"
          class="px-4 py-2.5 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2d5a8a] transition-colors flex items-center justify-center"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { chatMessages, quickActions } from '../data/mockData'

const messages = ref([...chatMessages])
const inputMessage = ref('')

const sendMessage = () => {
  if (!inputMessage.value.trim()) return

  messages.value.push({
    id: Date.now(),
    type: 'user',
    content: inputMessage.value,
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  })

  // 模拟AI回复
  setTimeout(() => {
    messages.value.push({
      id: Date.now() + 1,
      type: 'ai',
      content: '收到！让我帮你分析一下简历的优化空间。你可以把简历内容发给我，我会根据你的目标岗位给出具体建议。',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    })
  }, 1000)

  inputMessage.value = ''
}

const handleQuickAction = (action) => {
  inputMessage.value = `帮我${action}`
  sendMessage()
}

onMounted(() => {
  const container = document.querySelector('.h-56')
  if (container) {
    container.scrollTop = container.scrollHeight
  }
})
</script>
