// app 模块
import { SET_TOKEN, SET_TABINDEX } from '../mutation-types'
import { getMock } from '@/api'

const app = {
    state: {
        token: '',
        tabIndex: 0,
    },
    mutations: {
        [SET_TOKEN](state, val) {
            state.token = val
        },
        [SET_TABINDEX](state, val) {
            state.tabIndex = val
        }
    },
    actions: {
       async postRequest({ commit }, params) {
            const res = await getMock(params).then(res => {
                if(res.success && res.token) {
                    commit(SET_TOKEN, res.token)
                }else {

                }
            }).catch(err => { console.warn(err) })
            return res
        },
    }
}

export default app
