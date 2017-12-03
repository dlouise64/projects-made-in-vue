<template>
  <nav>
    <ul>
      <li><router-link to="/">Main Menu</router-link></li>
      <li><router-link to="hangman">Play Hangman</router-link></li>
      <li><router-link to="fetch-api">Fetch API example</router-link></li>
      <li><router-link to="github-commits">Github example</router-link></li>
      <li><router-link to="todo">TODO example</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      msg: 'HELLO THERE'
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    display: inline-block;
  }
  a {
    background-color: #2c3e50;
    border-radius: 3px;
    padding: 10px 20px;
    display: inline-block;
    color: #fff;
    text-decoration: none;
  }
</style>
