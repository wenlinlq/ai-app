# AI 校园招聘系统 - 规范文档

## 1. 项目概述

基于需求文档（需求.txt）和任务计划（# AI 校园招聘系统开发任务计划.txt），开发一套面向校园场景的AI校园招聘系统完整界面。

- **项目名称**: AI 校园招聘系统 (ai-recruitment-system)
- **技术栈**: Vue 3 + Vite + Tailwind CSS + ECharts + Vue Router
- **核心功能**: 前台平台端（求职者）+ 后台管理端（HR/管理员），左右分屏展示

## 2. 功能需求

### 2.1 前台平台端（左侧50%）
- 职位搜索栏：关键词搜索、组织类型、招聘类型、所属院系筛选、热门标签
- 职位推荐列表：JobCard组件，展示职位信息、AI匹配度、技能标签、收藏/报名按钮
- AI简历优化助手：ChatWindow组件，聊天界面、快捷操作建议
- 面试预约日历：Calendar组件，月视图、已预约标记
- 申请进度追踪：时间轴/进度条展示

### 2.2 后台管理端（右侧50%）
- 数据统计卡片：StatCard，4个指标卡片
- 左侧导航栏：6个导航项
- 候选人列表：CandidateCard组件，AI评分、智能标签、状态、操作按钮
- AI面试评估卡片：AssessmentCard组件，5个评分维度、AI评价摘要
- 招新漏斗图：FunnelChart组件，ECharts实现
- 全局设置面板：SettingsPanel组件

### 2.3 AI智能匹配模块（两端联动）
- 匹配流程可视化、数据流向、同步状态

## 3. 界面设计规范

- **主色调**: 深蓝灰 (#1e293b, #334155, #475569)
- **辅助色**: 白色 (#ffffff)
- **强调色**: 蓝色系 (#3b82f6, #2563eb) 或 绿色系 (#10b981)
- **背景色**: 浅灰 (#f8fafc, #f1f5f9)
- **圆角**: rounded-xl / rounded-2xl
- **阴影**: shadow-sm, shadow-md, shadow-lg
- **布局**: 左右50%分屏，固定高度，内部滚动

## 4. 项目结构

```
ai-recruitment-system/
├── src/
│   ├── components/
│   │   ├── JobCard.vue
│   │   ├── CandidateCard.vue
│   │   ├── ChatWindow.vue
│   │   ├── Calendar.vue
│   │   ├── FunnelChart.vue
│   │   ├── StatCard.vue
│   │   ├── SearchBar.vue
│   │   ├── AssessmentCard.vue
│   │   ├── SettingsPanel.vue
│   │   └── MatchingModule.vue
│   ├── views/
│   │   ├── AppLayout.vue
│   │   ├── FrontendPlatform.vue
│   │   └── BackendManagement.vue
│   ├── router/
│   │   └── index.js
│   ├── data/
│   │   └── mockData.js
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 5. 验收标准

- 项目可正常启动运行（npm run dev）
- 左右分屏布局正常显示
- 所有组件渲染正确，无控制台错误
- 交互效果正常（按钮点击、Tab切换等）
