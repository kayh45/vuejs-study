<template>
  <div id="app">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <header id="kayh-header">
      <img id="header-logo" src="./assets/logo.png">
      <router-link to="/" class="header-menu">
        <p>HOME</p>
      </router-link>
      <router-link to="/ch1" class="header-menu">
        <p>Chapter 1</p>
      </router-link>
      <router-link to="/ch2" class="header-menu">
        <p>Chapter 2</p>
      </router-link>
      <router-link to="/ch3" class="header-menu">
        <p>Chapter 3</p>
      </router-link>
      <router-link to="/ch4" class="header-menu">
        <p>Chapter 4</p>
      </router-link>
    </header>
    <div id="kayh-content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App'
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

header {
  background-color: rgb(33, 13, 56);
  height: 50px;
  font-size: 20px;
  color: white;
}

.header-menu {
  display: inline-block;
  padding-right: 10px;
  margin: 10px 0;
}

#header-logo {
  height: 30px;
}

#kayh-content {
  margin: 50px 20%;
  background-color: white;
  padding: 10px;
  text-align: left;
}
</style>
