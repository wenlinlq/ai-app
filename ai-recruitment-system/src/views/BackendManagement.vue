<template>
  <div class="h-full flex">
    <!-- 左侧导航栏 -->
    <div class="w-48 bg-white border-r border-gray-200 flex-shrink-0">
      <div class="p-4 border-b border-gray-100">
        <h2 class="text-lg font-bold text-gray-800">管理后台</h2>
      </div>
      <nav class="p-2">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="activeNav = item.id"
          :class="[
            'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors mb-1',
            activeNav === item.id
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
          ]"
        >
          <component :is="getIcon(item.icon)" class="w-5 h-5" />
          <span class="text-sm font-medium">{{ item.name }}</span>
        </button>
      </nav>
    </div>

    <!-- 右侧内容区 -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <!-- 标注：数据统计卡片 -->
      <div class="relative annotation-wrapper">
        <div class="absolute -left-1 -top-1 w-0.5 h-6 bg-green-500 annotation-line"></div>
        <div class="absolute -left-8 top-2 text-xs text-green-600 font-medium bg-green-50 px-1 rounded annotation-label">
          2.1
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="招新岗位发布数"
            :value="stats.jobCount"
            :growth="stats.jobGrowth"
            unit="个"
          />
          <StatCard
            title="报名学生总量"
            :value="stats.applicantCount"
            :growth="stats.applicantGrowth"
            unit="人"
          />
          <StatCard
            title="面试/考核通过率"
            :value="stats.passRate"
            :growth="stats.passRateChange"
            unit="%"
            :isRate="true"
          />
          <StatCard
            title="当前待审核申请"
            :value="stats.pendingCount"
            :growth="null"
            unit="人"
          />
        </div>
      </div>

      <!-- 标注：候选人列表 -->
      <div class="relative annotation-wrapper">
        <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-green-500 annotation-line"></div>
        <div class="absolute -left-8 top-2 text-xs text-green-600 font-medium bg-green-50 px-1 rounded annotation-label">
          2.3
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 class="text-sm font-semibold text-gray-700 mb-3">候选人列表</h3>
          <div class="space-y-3">
            <CandidateCard
              v-for="candidate in candidates"
              :key="candidate.id"
              :candidate="candidate"
              @view-detail="handleViewDetail"
              @send-invite="handleSendInvite"
            />
          </div>
        </div>
      </div>

      <!-- 标注：AI面试评估卡片 -->
      <div class="relative annotation-wrapper">
        <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-green-500 annotation-line"></div>
        <div class="absolute -left-8 top-2 text-xs text-green-600 font-medium bg-green-50 px-1 rounded annotation-label">
          2.4
        </div>
        <AssessmentCard :data="assessmentData" />
      </div>

      <!-- 标注：招新漏斗图 -->
      <div class="relative annotation-wrapper">
        <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-green-500 annotation-line"></div>
        <div class="absolute -left-8 top-2 text-xs text-green-600 font-medium bg-green-50 px-1 rounded annotation-label">
          2.5
        </div>
        <FunnelChart :data="funnelData" />
      </div>

      <!-- 标注：全局设置面板 -->
      <div class="relative annotation-wrapper">
        <div class="absolute -left-1 -top-1 w-0.5 h-8 bg-green-500 annotation-line"></div>
        <div class="absolute -left-8 top-2 text-xs text-green-600 font-medium bg-green-50 px-1 rounded annotation-label">
          2.6
        </div>
        <SettingsPanel :settings="settingsData" @save="handleSaveSettings" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'
import StatCard from '../components/StatCard.vue'
import CandidateCard from '../components/CandidateCard.vue'
import AssessmentCard from '../components/AssessmentCard.vue'
import FunnelChart from '../components/FunnelChart.vue'
import SettingsPanel from '../components/SettingsPanel.vue'
import { candidates, assessmentData, funnelData, settingsData, stats, navItems } from '../data/mockData'

const activeNav = ref('recruitment')

const getIcon = (iconName) => {
  const icons = {
    briefcase: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' })
        ])
      }
    },
    users: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' })
        ])
      }
    },
    cpu: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z' })
        ])
      }
    },
    calendar: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' })
        ])
      }
    },
    chart: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' })
        ])
      }
    },
    settings: {
      render() {
        return h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' }),
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
        ])
      }
    }
  }
  return icons[iconName] || icons.briefcase
}

const handleViewDetail = (candidateId) => {
  console.log('查看详情:', candidateId)
}

const handleSendInvite = (candidateId) => {
  console.log('发送面试邀请:', candidateId)
}

const handleSaveSettings = (settings) => {
  console.log('保存设置:', settings)
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
