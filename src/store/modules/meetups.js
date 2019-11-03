
import Vue from 'vue-native-core'
import axios from 'axios'
import { Platform } from 'react-native'

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                       : 'http://10.0.3.2:3001/api/v1'

export default {
    namespaced: true,
    //Like data in component. keeping our data in the state
    state: {
        items: []
    },
    //Like computed properties in components.
    //You can use getters to access state in the store
    getters: {

    },
    //Like methods in components. 
    //To perform actions that usually results in data 
    actions: {
        fetchMeetups ({commit, state}) {
            return axios.get(`${BASE_URL}/meetups`)
                .then(res => {
                    const meetups = res.data
                    commit('setMeetups', meetups)
                    return state.items
                })
        }
    }, 
    //Like methods in components.
    //to save data to the state.
    mutations: {
        setMeetups (state, meetups) {
            Vue.set(state, 'items', meetups)
        }
    }
}