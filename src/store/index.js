import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
// 加载模块包
import app from './modules/app'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
    getters,
    // 注册模块包
    modules: {   
        app
    }
})
