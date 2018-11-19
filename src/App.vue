<template>
  <div id="app">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <headerComponent />
    <div id="kayh-content">
      <router-view />
    </div>
  </div>

</template>

<script>
import header from '@/components/menu/header'
export default {
  name: 'App',
  components: {
    'headerComponent': header
  }
}
</script>

<style>

* {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f1f1f1;
  color: #2c3e50;
  height: 100%;
}

#kayh-content {
  margin: 50px 20%;
  background-color: white;
  padding: 10px;
  text-align: left;
}
</style>
