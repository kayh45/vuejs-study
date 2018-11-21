export default {
  namespaced: true,
  state: { count: 0 },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    },
    // getter를 안쓸거여도 3번째 인자에 rootState가 들어가야돼서 넣는다!
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
