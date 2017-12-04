<template>
  <div class="section">
    <div class="container">
      <h1>Fetch API Demo</h1>
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="(item, key) in list" v-bind:key="key">
          <Card :title="item.title" :body="item.body" v-bind:data="item"></Card>
        </div>
      </div>
    </div>

    <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
      <span slot="no-more">
        You have reached the end
      </span>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'
import Card from '@/components/admin/Card'

const api = `https://jsonplaceholder.typicode.com/posts`

export default {
  name: 'FetchAPI',
  data () {
    return {
      list: []
    }
  },
  components: { Card, InfiniteLoading },
  methods: {
    infiniteHandler ($state) {
      let config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      }
      axios.get(api, config).then(({ data }) => {
        if (data.length) {
          this.list = this.list.concat(data)
          $state.loaded()
          if (this.list.length / 200 === 1) {
            $state.complete()
          }
        } else {
          $state.complete()
        }
      })
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 60px;
  }
</style>

