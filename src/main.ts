import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 重置样式
import 'normalize.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)

app.mount('#app')
