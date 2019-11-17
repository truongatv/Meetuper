import Vue from 'vue-native-core'
import axios from 'axios'
import { Platform } from 'react-native'

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                       : 'http://10.0.3.2:3001/api/v1'

export default {
    namespaced: true,
    state: {
        items: []
    },
    getter: {

    },
    actions: {
        fetchThreads ({commit, state}, meetupId) {
            return axios.get(`${BASE_URL}/threads?meetupId=${meetupId}`)
                .then(res => {
                    const threads = res.data.threads
                    commit('setItems',{items: threads, resource: 'threads'}, {root: true})
                    return state.items
                })
        }
    },
    mutations: {
        setThreads (state, threads) {
            Vue.set(state, 'items', threads)
        }
    }
}