import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue'),
  },
]

const router = createRouter({ history: createWebHashHistory(import.meta.env.BASE_URL), routers })

export default router
