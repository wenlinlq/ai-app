<template>
  <!-- 职位搜索栏 -->
  <div class="card p-5">
    <!-- 标题 -->
    <div class="flex items-center gap-3 mb-5">
      <div class="w-10 h-10 rounded-xl bg-[#1e3a5f]/8 flex items-center justify-center">
        <svg class="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <div>
        <h3 class="font-semibold text-gray-800">职位搜索</h3>
        <p class="text-xs text-gray-500">快速找到心仪岗位</p>
      </div>
    </div>

    <!-- 搜索输入框 -->
    <div class="flex gap-3 mb-4">
      <div class="flex-1 relative">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          v-model="searchData.keyword"
          type="text"
          placeholder="搜索职位、团队、技能..."
          class="w-full pl-12 pr-4 py-3 border border-[#e8e4dc] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] text-sm bg-[#faf8f5] transition-all duration-200"
        />
      </div>
      <button
        @click="handleSearch"
        class="px-6 py-3 bg-[#1e3a5f] text-white rounded-xl hover:bg-[#2d5a8a] transition-all duration-300 hover:shadow-lg hover:shadow-[#1e3a5f]/20 text-sm font-medium"
      >
        搜索
      </button>
    </div>

    <!-- 下拉选择 -->
    <div class="grid grid-cols-3 gap-3 mb-4">
      <select v-model="searchData.orgType" class="px-4 py-2.5 border border-[#e8e4dc] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] bg-[#faf8f5] transition-all duration-200 cursor-pointer">
        <option value="">组织类型</option>
        <option value="技术团队">技术团队</option>
        <option value="学生社团">学生社团</option>
        <option value="工作室">工作室</option>
        <option value="实验室">实验室</option>
        <option value="其他">其他</option>
      </select>
      <select v-model="searchData.recruitType" class="px-4 py-2.5 border border-[#e8e4dc] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] bg-[#faf8f5] transition-all duration-200 cursor-pointer">
        <option value="">招聘类型</option>
        <option value="校园招新">校园招新</option>
        <option value="项目招募">项目招募</option>
        <option value="实习岗位">实习岗位</option>
        <option value="志愿者">志愿者</option>
      </select>
      <select v-model="searchData.department" class="px-4 py-2.5 border border-[#e8e4dc] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] bg-[#faf8f5] transition-all duration-200 cursor-pointer">
        <option value="">所属院系</option>
        <option value="计算机学院">计算机学院</option>
        <option value="人工智能学院">人工智能学院</option>
        <option value="软件学院">软件学院</option>
        <option value="艺术学院">艺术学院</option>
        <option value="管理学院">管理学院</option>
      </select>
    </div>

    <!-- 热门搜索标签 -->
    <div class="flex items-center gap-2.5 flex-wrap">
      <span class="text-xs text-gray-500">热门搜索:</span>
      <button
        v-for="tag in hotTags"
        :key="tag"
        @click="searchData.keyword = tag"
        class="px-3 py-1.5 text-xs bg-[#faf8f5] text-[#1e3a5f] rounded-full hover:bg-[#1e3a5f]/8 transition-all duration-200 border border-transparent hover:border-[#1e3a5f]/10"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['search'])

const searchData = reactive({
  keyword: '',
  orgType: '',
  recruitType: '',
  department: ''
})

const hotTags = ['前端开发', '数据科学', '算法竞赛', '摄影协会', 'Python']

const handleSearch = () => {
  emit('search', { ...searchData })
}
</script>
