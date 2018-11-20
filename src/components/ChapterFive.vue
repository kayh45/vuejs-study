<template>
  <div>
    <h3>Store를 이용하여 구현</h3>
    <p class="w3-border w3-padding">{{ count }}</p><br>
    <button class="w3-button w3-blue" @click="increment">+</button>
    <button class="w3-button w3-blue" @click="decrement">-</button>
    <hr />

    <h3>Store를 이용하지 않고 구현</h3>
    <p class="w3-border w3-padding">{{ newCount }}</p><br>
    <button class="w3-button w3-blue" @click="add">+</button>
    <button class="w3-button w3-blue" @click="minus">-</button>
    <hr />

    <h3>Vuex 상태를 Vue 컴포넌트에서 가져오기</h3>
    <counter></counter>
    <hr />

    <h3>Getters 사용하기</h3>
    <p>완료한 Todo: {{ doneTodos }}</p><br>
    <p>완료한 Todo의 개수: {{ doneTodosCount }}</p><br>
    <input type="number" v-model.number="keywordId" class="w3-input w3-border">
    <p>검색 결과: {{ getTodoById }}</p>
    <hr />

    <h3>변이(mutation) 사용하기</h3>
    <div class="w3-row-padding">
      <div class="w3-col m4">
        <input v-model.number="argX" class="w3-input w3-border" type="number">
      </div>
      <div class="w3-col m2">
        <button @click="addX" class="w3-button w3-blue">Add x</button>
      </div>
      <div class="w3-col m3">
        <button @click="addXAction" class="w3-button w3-green">Slow Add x</button>
      </div>
      <div class="w3-col m3">
        <p class="w3-large">결과: {{ count }}</p>
      </div>
    </div>
    <hr />

    <h3>액션안에 액션 사용하기</h3>
    <div class="w3-row-padding">
      <div class="w3-col m3">
        A: <b><span class="w3-text-blue" v-if="endA">완료!!</span></b>
      </div>
      <div class="w3-col m3">
        B: <b><span class="w3-text-blue" v-if="endB">완료!!</span></b>
      </div>
      <div class="w3-col m6">
        <button @click="doAction" class="w3-button w3-green">동기</button>
        <button @click="doAction2" class="w3-button w3-green">비동기</button>
        <button @click="doAction3" class="w3-button w3-green">초기화</button>
      </div>
    </div>
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
      newCount: 0,
      keywordId: 1,
      argX: 0
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    getTodoById () {
      return this.$store.getters.getTodoById(this.keywordId)
    },
    endA () {
      return this.$store.state.endA
    },
    endB () {
      return this.$store.state.endB
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
    },
    addX () {
      this.$store.commit('addX', this.argX)
    },
    addXAction () {
      this.$store.dispatch('addX', this.argX)
    },
    doAction () {
      this.$store.dispatch('proccessB')
    },
    doAction2 () {
      this.$store.dispatch('proccessC')
    },
    doAction3 () {
      this.$store.state.endA = false
      this.$store.state.endB = false
    }
  }
}

</script>
