// 模拟数据 - 对应需求文档
// 来源：需求.txt 第162-173行 数据流说明

export const jobs = [
  {
    id: 1,
    title: '前端开发工程师',
    team: 'ACM 算法工作室',
    department: '计算机学院',
    grade: '大一至大三',
    major: '计算机相关专业',
    recruits: 5,
    deadline: '2026-04-15',
    matchScore: 95,
    skills: ['Vue3', 'React', 'TypeScript', '算法竞赛'],
    description: '热爱编程，喜欢挑战算法难题，有团队协作精神。',
    publishTime: '2026-03-20',
    applicants: 28,
    type: '校园招新',
    orgType: '工作室'
  },
  {
    id: 2,
    title: '数据科学爱好者',
    team: 'AI 创新实验室',
    department: '人工智能学院',
    grade: '大二至大四',
    major: '数学、统计、计算机',
    recruits: 3,
    deadline: '2026-04-20',
    matchScore: 88,
    skills: ['Python', '机器学习', '数据分析', 'TensorFlow'],
    description: '对人工智能有浓厚兴趣，具备良好的数学基础。',
    publishTime: '2026-03-18',
    applicants: 15,
    type: '项目招募',
    orgType: '实验室'
  },
  {
    id: 3,
    title: '摄影协会骨干',
    team: '光影摄影协会',
    department: '艺术学院',
    grade: '全年级',
    major: '不限专业',
    recruits: 10,
    deadline: '2026-04-30',
    matchScore: 72,
    skills: ['摄影', 'PhotoShop', '视频剪辑', '活动策划'],
    description: '热爱摄影，擅长与人沟通，有活动组织经验优先。',
    publishTime: '2026-03-15',
    applicants: 42,
    type: '校园招新',
    orgType: '学生社团'
  },
  {
    id: 4,
    title: '后端开发实习生',
    team: '云原生工作室',
    department: '软件学院',
    grade: '大二至大三',
    major: '软件工程、计算机科学',
    recruits: 4,
    deadline: '2026-04-10',
    matchScore: 91,
    skills: ['Java', 'Go', 'Docker', 'Kubernetes', 'MySQL'],
    description: '熟悉后端开发技术栈，对云原生技术有热情。',
    publishTime: '2026-03-22',
    applicants: 35,
    type: '实习岗位',
    orgType: '工作室'
  },
  {
    id: 5,
    title: '志愿者服务队成员',
    team: '阳光志愿者服务队',
    department: '管理学院',
    grade: '全年级',
    major: '不限专业',
    recruits: 20,
    deadline: '2026-05-01',
    matchScore: 65,
    skills: ['活动策划', '沟通协调', '公益服务'],
    description: '热心公益，善于沟通，愿意参与志愿服务活动。',
    publishTime: '2026-03-10',
    applicants: 86,
    type: '志愿者',
    orgType: '学生社团'
  }
]

export const candidates = [
  {
    id: 1,
    name: '张伟',
    studentId: '2023012345',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangWei',
    department: '计算机学院',
    major: '计算机科学与技术',
    grade: '大二',
    aiScore: 85,
    tags: ['高潜力', '技术优秀', '竞赛经验'],
    applyTime: '2026-03-25 14:30',
    status: '待审核',
    job: '前端开发工程师',
    team: 'ACM 算法工作室'
  },
  {
    id: 2,
    name: '李娜',
    studentId: '2022015678',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiNa',
    department: '人工智能学院',
    major: '人工智能',
    grade: '大三',
    aiScore: 92,
    tags: ['技术大牛', '项目经验丰富', '创新思维'],
    applyTime: '2026-03-24 10:15',
    status: '已筛选',
    job: '数据科学爱好者',
    team: 'AI 创新实验室'
  },
  {
    id: 3,
    name: '王强',
    studentId: '2024018901',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WangQiang',
    department: '软件学院',
    major: '软件工程',
    grade: '大一',
    aiScore: 78,
    tags: ['学习能力强', '积极主动'],
    applyTime: '2026-03-26 09:45',
    status: '面试中',
    job: '后端开发实习生',
    team: '云原生工作室'
  },
  {
    id: 4,
    name: '刘洋',
    studentId: '2021034567',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiuYang',
    department: '艺术学院',
    major: '视觉传达设计',
    grade: '大四',
    aiScore: 88,
    tags: ['设计优秀', '社团活跃', '组织能力'],
    applyTime: '2026-03-23 16:20',
    status: '已录取',
    job: '摄影协会骨干',
    team: '光影摄影协会'
  }
]

export const assessmentData = {
  candidateId: 2,
  dimensions: [
    { name: '技术能力', score: 90, maxScore: 100 },
    { name: '沟通表达', score: 85, maxScore: 100 },
    { name: '创新思维', score: 95, maxScore: 100 },
    { name: '团队协作', score: 88, maxScore: 100 },
    { name: '特长展示', score: 92, maxScore: 100 }
  ],
  summary: '该同学在机器学习领域有扎实的理论基础，参与过多个数据分析项目。在面试中表现出较强的学习能力和创新思维，能够独立思考并解决问题。团队协作意识强，善于沟通。',
  recommendation: '推荐录取',
  recommendationLevel: 'high'
}

export const stats = {
  jobCount: 12,
  jobGrowth: 8.5,
  applicantCount: 156,
  applicantGrowth: 12.3,
  passRate: 68.5,
  passRateChange: -2.1,
  pendingCount: 23
}

export const funnelData = [
  { stage: '浏览岗位', count: 1250, rate: 100 },
  { stage: '报名投递', count: 320, rate: 25.6 },
  { stage: 'AI筛选', count: 256, rate: 80 },
  { stage: '审核', count: 198, rate: 77.3 },
  { stage: '面试/考核', count: 86, rate: 43.4 },
  { stage: '录用', count: 52, rate: 60.5 },
  { stage: '加入', count: 48, rate: 92.3 }
]

export const chatMessages = [
  { id: 1, type: 'ai', content: '你好！我是AI简历优化助手。可以帮助你优化简历内容、提升简历质量。有什么可以帮你的吗？', time: '10:00' },
  { id: 2, type: 'user', content: '我想优化一下我的简历，让它更有竞争力。', time: '10:01' },
  { id: 3, type: 'ai', content: '好的，请告诉我你的专业方向、想申请的岗位类型，以及你目前的项目经验或实习经历。', time: '10:01' }
]

export const quickActions = [
  '优化简历',
  '调整格式',
  '补充技能',
  '项目描述',
  '面试准备'
]

export const interviewSchedule = [
  { id: 1, date: '2026-03-28', time: '14:00', team: 'ACM 算法工作室', job: '前端开发工程师', status: '已预约' },
  { id: 2, date: '2026-03-30', time: '10:00', team: 'AI 创新实验室', job: '数据科学爱好者', status: '已预约' },
  { id: 3, date: '2026-04-02', time: '15:30', team: '云原生工作室', job: '后端开发实习生', status: '待确认' }
]

export const progressData = [
  { stage: '简历投递', status: 'completed', time: '2026-03-25 14:30', detail: '已投递至ACM算法工作室' },
  { stage: 'AI筛选', status: 'completed', time: '2026-03-25 15:00', detail: 'AI评分：95分' },
  { stage: 'HR审核', status: 'completed', time: '2026-03-26 09:00', detail: '审核通过' },
  { stage: '面试安排', status: 'in_progress', time: '', detail: '面试时间：2026-03-28 14:00' },
  { stage: '面试', status: 'pending', time: '', detail: '等待面试中' },
  { stage: 'Offer发放', status: 'pending', time: '', detail: '' }
]

export const navItems = [
  { id: 'recruitment', name: '招新管理', icon: 'briefcase' },
  { id: 'applicants', name: '报名库', icon: 'users' },
  { id: 'ai-screening', name: 'AI智能筛选', icon: 'cpu' },
  { id: 'interview', name: '面试/考核安排', icon: 'calendar' },
  { id: 'analytics', name: '数据看板', icon: 'chart' },
  { id: 'settings', name: '系统设置', icon: 'settings' }
]

export const settingsData = {
  ai: {
    filterThreshold: 60,
    scoreWeights: {
      technical: 30,
      communication: 20,
      innovation: 20,
      teamwork: 15,
      specialty: 15
    },
    keywordMatch: 80
  },
  review: {
    autoReview: true,
    manualReview: true,
    notifications: {
      email: true,
      sms: false,
      inApp: true
    }
  }
}
