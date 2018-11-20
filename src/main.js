// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: '출근하기', done: true},
      {id: 2, text: '퇴근하기', done: false},
      {id: 3, text: '운동하기', done: true}
    ],
    endA: false,
    endB: false
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    addX (state, x) {
      state.count += x
    },
    doA (state) {
      state.endA = true
    },
    doB (state) {
      state.endB = true
    }
  },
  actions: {
    addX ({commit}, x) {
      setTimeout(() => {
        commit('addX', x)
      }, 1000)
    },
    proccessA ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('doA')
          resolve()
        }, 1000)
      })
    },
    proccessB ({dispatch, commit}) {
      return dispatch('proccessA').then(() => {
        commit('doB')
      })
    },
    proccessC ({dispatch, commit}) {
      dispatch('proccessA')
      commit('doB')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
