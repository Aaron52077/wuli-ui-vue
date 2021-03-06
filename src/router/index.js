import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
    {
        path: '/dashboard',
        redirect: '/'
    },
    {
        path: '/',
        component: resolve => require(['@/views/dashboard'], resolve)
    },
    {
        path: '/button',
        component: resolve => require(['@/views/button'], resolve)
    },
    {
        path: '/cell',
        component: resolve => require(['@/views/cell'], resolve)
    },
    {
        path: '/tag',
        component: resolve => require(['@/views/tag'], resolve)
    },
    {
        path: '/photo',
        component: resolve => require(['@/views/photoPreview'], resolve)
    },
    {
        path: '/popup',
        component: resolve => require(['@/views/popup'], resolve)
    },
    {
        path: '/swiper',
        component: resolve => require(['@/views/swiperPreview'], resolve)
    },
    {
        path: '/scroll',
        component: resolve => require(['@/views/bScroll'], resolve)
    },
    {
        path: '/qrcode',
        component: resolve => require(['@/views/qrCode'], resolve)
    },
    {
        path: '/check',
        component: resolve => require(['@/views/checkList'], resolve)
    },
]

export default new Router({
    // mode: 'history', //后端支持可开
    routes: routes
})

