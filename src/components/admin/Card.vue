<template>
  <div class="card app-card">
    <h3>{{ title | capitalize}}</h3>
    <div class="card-content">
      <div class="content">

        {{ body | capitalize }}

        <div class="tags">
          <a href="#" class="tag">#css</a> <a href="#" class="tag">#responsive</a>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['title', 'img', 'body'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .app-card {
    position: relative;
    margin-bottom: 26px;
    text-align: left;
    min-height: 374px;
  }
  h3 {
    font-weight: bold;
    padding: 20px 23px 0;
    font-size: 20px;
    color: #2c3e50;
  }
  .tags {
    width: 100%;
    margin: 20px 0 0;
    position: absolute;
    bottom: 10px;
  }
</style>

