import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from 'axios'
import meetups from './modules/meetups'
import threads from './modules/threads'


Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        meetups,
        threads
    },
    //Like data in component. keeping our data in the state
    state: {
    },
    //Like computed properties in components.
    //You can use getters to access state in the store
    getters: {

    },
    //Like methods in components. 
    //To perform actions that usually results in data 
    actions: {
    }, 
    //Like methods in components.
    //to save data to the state.
    mutations: {
        setItems (state, {items, resource }) {
            Vue.set(state[resource], 'items', items)
        }
    }
})