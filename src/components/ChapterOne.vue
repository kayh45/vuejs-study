<template>
    <div id="ch1">
      {{ message }}
      <hr />
      <span v-bind:title="message">
        여기에 마우스를 올려보세요
      </span>
      <hr />
      <span v-if="seen">
          이제 나를 볼 수 있어요!!
      </span>
    </div>
</template>

<script>
export default {
  name: 'ChapterOne',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      seen: false
    }
  }
}
</script>
