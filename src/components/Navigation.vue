<template>
  <nav>
    <ul>
      <!-- <li><router-link to="/">Fetch API Demo</router-link></li> -->
      <li><router-link to="todo">Todo List Demo</router-link></li>
      <li><router-link to="guess-the-word">Play Guess the word</router-link></li>
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
  a:hover {
    color: #fff;
  }
</style>
