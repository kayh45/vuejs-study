<template>
  <header :style="headerColor">
    <div class="header-cont">
      <router-link to="/">
        <div id="header-logo">
          <img src="@/assets/logo.png">
          <span>Kayhs Study</span>
          <span @mouseover="logoHover">
            <i class="fas fa-feather-alt"></i>
          </span>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      headerColor: {
        backgroundColor: 'rgb(33, 13, 56)'
      }
    }
  },
  methods: {
    logoHover: function () {
      var r = Math.floor(Math.random() * 256)
      var g = Math.floor(Math.random() * 256)
      var b = Math.floor(Math.random() * 256)
      this.headerColor.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }
  }
}
</script>

<style>
  header {
    /* background-color: rgb(33, 13, 56); */
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  .header-menu {
    display: inline-block;
    padding-right: 10px;
    margin: 10px 0;
  }

  #header-logo {
    height: inherit;
    float: left;
    padding: 10px;
  }

  #header-logo img {
    height: 30px;
    margin: 0 3px;
  }

  .header-cont {
    padding: 0 20%;
    text-align: left;
    width: 100%;
  }
</style>
