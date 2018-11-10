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
        path: '/switch',
        component: resolve => require(['@/views/switch'], resolve)
    },
    {
        path: '/popup',
        component: resolve => require(['@/views/popup'], resolve)
    },
    {
        path: '/action',
        component: resolve => require(['@/views/action'], resolve)
    }
]

export default new Router({
    mode: 'history', //后端支持可开
    routes: routes
})

