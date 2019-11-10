import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from 'axios'
import meetups from './modules/meetups'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        meetups
    },
    //Like data in component. keeping our data in the state
    state: {
        todos: []
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
        }
    }, 
    //Like methods in components.
    //to save data to the state.
    mutations: {
        setTodos (state, todos) {
            Vue.set(state, 'todos', todos)
        }
    }
})