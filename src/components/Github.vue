<template>
  <div>

    Github coming soon
  </div>
</template>

<script>
  export default {
    name: 'Github',
    data () {
      return {
        fetch: this.fetchData()
      }
    },
    methods: {
      fetchData: function () {
        var xhr = new XMLHttpRequest()
        // var self = this
        xhr.open('GET', 'https://api.github.com/users/dlouise64/repos')
        xhr.onload = function () {
          // self.commits = JSON.parse(xhr.responseText)
          // console.log(self.commits[0])
          // console.log(JSON.parse(xhr.responseText))
          // this.results = JSON.parse(xhr)
          // console.log(JSON.parse(xhr.responseText[1]))
        }
        xhr.send()
      }
    }
  }
</script>

<style>

</style>
