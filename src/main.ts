import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 重置样式
import 'normalize.css'

// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// svg
import SvgIcon from '@/components/svgIcon/Index.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

// 全局组件挂载svg
app.component('svg-icon', SvgIcon)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
