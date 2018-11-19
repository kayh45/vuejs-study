<template>
  <div>
    <p class="w3-border w3-padding">{{ count }}</p><br>
    <button class="w3-button w3-blue" @click="increment">+</button>
    <button class="w3-button w3-blue" @click="decrement">-</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})

export default {
  name: 'ch5',
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>
