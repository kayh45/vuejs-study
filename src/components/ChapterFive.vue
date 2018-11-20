<template>
  <div>
    <h4>Store를 이용하여 구현</h4>
    <p class="w3-border w3-padding">{{ count }}</p><br>
    <button class="w3-button w3-blue" @click="increment">+</button>
    <button class="w3-button w3-blue" @click="decrement">-</button>
    <hr />

    <h4>Store를 이용하지 않고 구현</h4>
    <p class="w3-border w3-padding">{{ newCount }}</p><br>
    <button class="w3-button w3-blue" @click="add">+</button>
    <button class="w3-button w3-blue" @click="minus">-</button>
    <hr />

    <h4>Vuex 상태를 Vue 컴포넌트에서 가져오기</h4>
    <counter></counter>

  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Counter = {
  template: `<div>{{ count2 }}</div>`,
  computed: {
    count2 () {
      return this.$store.state.count
    }
  }
}

export default {
  name: 'ch5',
  components: { Counter },
  data () {
    return {
      newCount: 0
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    add () {
      this.newCount++
    },
    minus () {
      this.newCount--
    }
  }
}

</script>
