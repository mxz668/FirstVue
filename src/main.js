// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$ajax = axios
Vue.prototype.serverIp = 'http://127.0.0.1:8088'

Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
