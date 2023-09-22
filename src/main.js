import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/router.js";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

createApp(App)
    .use(router)
    .use(Antd)
    .mount('#code-report')
