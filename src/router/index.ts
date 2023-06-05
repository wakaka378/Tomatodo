import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    // 添加任务
    {
      path: '/AddTask',
      name: 'addTask',
      component: () => import('../views/AddTask.vue'),
    },
  ],
})

export default router
