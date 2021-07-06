import {
	createApp,
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';

// import * as echarts from 'echarts'



const app = createApp(App)
app.use(store).use(ElementPlus).use(router)
// app.config.globalProperties.echarts = echarts;

app.mount('#app')

