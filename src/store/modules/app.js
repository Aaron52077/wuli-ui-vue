// app 模块
import { SET_TOKEN } from '../mutation-types'
import { getMock } from '@/api'

const app = {
    state: {
        token: '',
    },
    mutations: {
        [SET_TOKEN](state, val) {
            state.token = val
        },
    },
    actions: {
       async postRequest({ commit }, params) {
            const res = await getMock(params).then(res => {
                    if (res.success && res.token) {
                        commit(SET_TOKEN, res.token)
                    } else {

                    }
                }).catch(err => {

                })
            return res
        },
    }
}

export default app
