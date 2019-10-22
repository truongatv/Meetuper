import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
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
        async fetchTodo (context) {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const todos = res.data;
            context.commit('setTodos', todos);
            return context.state.todos;
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