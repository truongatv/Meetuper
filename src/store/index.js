import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from 'axios'
import { Platform } from 'react-native'

Vue.use(Vuex)

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                       : 'http://10.0.3.2:3001/api/v1'

export default new Vuex.Store({
    //Like data in component. keeping our data in the state
    state: {
        todos: [],
        meetups: []
    },
    //Like computed properties in components.
    //You can use getters to access state in the store
    getters: {

    },
    //Like methods in components. 
    //To perform actions that usually results in data 
    actions: {
        async fetchTodo ({commit, state}) {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const todos = res.data;
            commit('setTodos', todos);
            return state.todos;
        },
        fetchMeetups ({commit, state}) {
            return axios.get(`${BASE_URL}/meetups`)
                .then(res => {
                    const meetups = res.data
                    commit('setMeetups', meetups)
                    return state.meetups
                })
        }
    }, 
    //Like methods in components.
    //to save data to the state.
    mutations: {
        setTodos (state, todos) {
            Vue.set(state, 'todos', todos)
        },
        setMeetups (state, meetups) {
            Vue.set(state, 'meetups', meetups)
        }
    }
})