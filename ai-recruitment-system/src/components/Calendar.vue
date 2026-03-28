<template>
  <!-- 来源：需求.txt 1.4 面试预约日历 -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <!-- 头部 -->
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-sm font-semibold text-gray-700">面试预约日历</h3>
      <div class="flex items-center gap-2">
        <button
          @click="prevMonth"
          class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span class="text-sm font-medium text-gray-700 min-w-[100px] text-center">
          {{ currentYear }}年{{ currentMonth + 1 }}月
        </span>
        <button
          @click="nextMonth"
          class="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 星期标题 -->
    <div class="grid grid-cols-7 mb-2">
      <div
        v-for="day in weekDays"
        :key="day"
        class="text-center text-xs text-gray-500 py-2"
      >
        {{ day }}
      </div>
    </div>

    <!-- 日历网格 -->
    <div class="grid grid-cols-7 gap-1">
      <div
        v-for="(day, index) in calendarDays"
        :key="index"
        :class="[
          'aspect-square flex flex-col items-center justify-center text-sm rounded-lg cursor-pointer transition-colors relative',
          day.isCurrentMonth
            ? day.date === selectedDate
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-100 text-gray-700'
            : 'text-gray-300',
          day.hasSchedule ? 'font-semibold' : ''
        ]"
        @click="day.isCurrentMonth && selectDate(day.date)"
      >
        <span>{{ day.day }}</span>
        <!-- 已预约标记 -->
        <div
          v-if="day.hasSchedule"
          class="absolute bottom-1 w-1.5 h-1.5 rounded-full"
          :class="day.date === selectedDate ? 'bg-white' : 'bg-green-500'"
        ></div>
      </div>
    </div>

    <!-- 预约信息展示 -->
    <div v-if="selectedSchedule" class="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-green-800">{{ selectedSchedule.team }}</p>
          <p class="text-xs text-green-600">{{ selectedSchedule.job }}</p>
          <p class="text-xs text-green-500 mt-1">
            {{ selectedSchedule.date }} {{ selectedSchedule.time }}
          </p>
        </div>
        <span
          :class="[
            'px-2 py-0.5 text-xs rounded-full',
            selectedSchedule.status === '已预约' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          ]"
        >
          {{ selectedSchedule.status }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  schedules: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['select-date'])

const currentDate = new Date()
const currentYear = ref(currentDate.getFullYear())
const currentMonth = ref(currentDate.getMonth())
const selectedDate = ref(null)

const weekDays = ['日', '一', '二', '三', '四', '五', '六']

const calendarDays = computed(() => {
  const days = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const startPadding = firstDay.getDay()

  // 上月填充
  const prevMonthLastDay = new Date(currentYear.value, currentMonth.value, 0).getDate()
  for (let i = startPadding - 1; i >= 0; i--) {
    days.push({
      day: prevMonthLastDay - i,
      date: null,
      isCurrentMonth: false,
      hasSchedule: false
    })
  }

  // 当月
  const today = new Date()
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const dateStr = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    const hasSchedule = props.schedules.some(s => s.date === dateStr)
    days.push({
      day: i,
      date: dateStr,
      isCurrentMonth: true,
      hasSchedule
    })
  }

  // 下月填充
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({
      day: i,
      date: null,
      isCurrentMonth: false,
      hasSchedule: false
    })
  }

  return days
})

const selectedSchedule = computed(() => {
  if (!selectedDate.value) return null
  return props.schedules.find(s => s.date === selectedDate.value)
})

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const selectDate = (date) => {
  selectedDate.value = date
  emit('select-date', date)
}
</script>
