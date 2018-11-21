<template>
  <div>
    <h3>모듈 - state</h3>
    <p>moduleA의 count: {{ countA }} </p>
    <p>root의 count: {{ count }} </p>
    <hr />

    <h3>모듈 - getters</h3>
    <p>doubleCount: {{ doubleCount }}</p>
    <hr />

    <h3>모듈 - mutations</h3>
    <button @click="increment" class="w3-button w3-blue w3-large">+</button>
    <button @click="decrement" class="w3-button w3-blue w3-large">-</button>
    <hr />

    <h3>모듈 - actions</h3>
    <p>모듈의 count와 root의 count의 합: <b>{{ sumWithRootCount }}</b></p>
    <p class="w3-text-red">합이 홀수일때만 1이 더해집니다.</p>
    <button @click="newIncrement" class="w3-button w3-green w3-large">
      더하기
    </button>
  </div>
</template>

<script>
import { mapGetters, mapState, createNamespacedHelpers } from 'vuex'

const { mapMutations, mapActions } = createNamespacedHelpers('moduleA')

export default {
  name: 'ChapterSix',
  computed: {
    // 기본적인 헬퍼의 네임스페이스 바인딩
    ...mapState({
      count: state => state.count,
      countA: state => state.moduleA.count
    }),
    // 헬퍼의 인수로 네임스페이스 전달
    ...mapGetters('moduleA', [
      'doubleCount',
      'sumWithRootCount'
    ])
  },
  methods: {
    // createNamespacedHelpers를 사용하여 네임스페이스 전달
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    ...mapActions({
      newIncrement: 'incrementIfOddOnRootSum'
    })
  }
}
</script>
