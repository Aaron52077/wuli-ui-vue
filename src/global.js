/* eslint-disable */
import Vue from 'vue'
import store from '@/store'
import cache from '@/utils/cache'
import { cloneDeep, size } from 'lodash'

// 流加载

let global = new Vue({
    template: '<div></div>',
    data: {
        ENV: process.env.NODE_ENV,
        apihost: process.env.BASE_API,
        debug: (process.env.NODE_ENV || '').indexOf('development') > -1 || window.localStorage && window.localStorage.devOnline == 1,
        token: cache.getLocal('token') || '',
        dh: document.body.clientHeight,
        dw: document.body.clientWidth,
        data: {},
    },
    computed: {
        getData() {
            return store.state.datas;
        },
        setToken: {
            get() {
                return this.token;
            },
            set(val) {
                this.token = val;
                cache.setLocal('token', val);
                if(val == '') cache.removeLocal('token');
            }
        },
    },
    methods: {
        //写入共享数据
        setData(key, val) {
            // 方法一
            let storeData = Object.assign({}, this.data);
            // 方法二
            // let storeData = cloneDeep(this.data);
            storeData[key] = val;
            this.data = storeData;
            store.dispatch('setData', storeData);
            return val
        },
        setApi(val) {
            let name = val && val.$options ? val.$options.name : '';
            if(!name) {
                console.warn('setApi error, 请定义 name ');
            }
            if(!global[`api_${name}`]) {
                global[`api_${name}`] = val;
            }
        },
        cloneDeep: cloneDeep,
        size: size,
        log(...arg){
            this.debug && console.log(...arg);
        },
        init(vm) {
            window.DevVue = vm;
            // 动态获取视窗宽高
            window.onresize = () => {
                this.dw = document.body.clientWidth;
                this.dh = document.body.clientHeight;
            };
        },
        menuMeta() {
            // 当前导航数据
            return this.$route.meta || false
        },
    }
})

// Vue 原型链挂载
Vue.prototype.dataBase = global

export default global
