<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }

  h1 {
    font-weight: bold;
    font-size: 30px;
  }

  .list-stripped {
    list-style: none;
    padding-left: 0;
  }
  li a {
    margin-bottom: 5px;
  }

  img {
    height: 70px;
    margin-bottom: 20px;
  }
</style>
