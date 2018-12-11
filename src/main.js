// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'

// fonts
import './assets/fonts'
// js
import './packages/global'

// 第三方组件库
import VuePreview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
let options = { fullscreenEl: false } // 关闭全屏按钮

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// use
Vue.use(VuePreview, options)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})