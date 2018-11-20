<template>
  <div>
    <span id="title">메뉴</span>
    <ul>
      <li v-for="chapter in chapters" :key="chapter.id">
        <router-link :to="chapter.route">
          <p>Chapter {{chapter.id}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sideMenu',
  data () {
    return {
      chapters: [
        {id: 1, route: '/ch1'},
        {id: 2, route: '/ch2'},
        {id: 3, route: '/ch3'},
        {id: 4, route: '/ch4'},
        {id: 5, route: '/ch5'}
      ]
    }
  }
}
</script>

<style>
  #kayh-sidebar {
    float: left;
    background-color: white;
    padding: 20px;
    margin: 0 5%;
    font-size: 18px;
  }

  #kayh-sidebar a {
    text-decoration: none !important;
    margin-top: 5px;
  }

  #kayh-sidebar #title {
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }

  #kayh-sidebar ul {
    padding-inline-start: 0;
    margin-top: 10px;
  }
  #kayh-sidebar li {
    list-style: none;
  }
</style>
