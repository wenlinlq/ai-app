import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '../views/AppLayout.vue'

const routes = [
  {
    path: '/',
    name: 'AppLayout',
    component: AppLayout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
