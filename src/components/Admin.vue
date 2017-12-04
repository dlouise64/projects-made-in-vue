<template>
  <div>
    <!-- <div class="level">test</div> -->
    <!-- <section class="section">
    <div class="columns">
      <div class="column is-one-fifth">
        <section class="section app-panel">
          <h2>Backlog</h2>
          <span @click="collapse = true">Collapse All</span>
          <div class="app-task-count">{{countTasks(1)}} 
            <span v-if="countTasks(4) > 1">Tasks</span><span v-else>Task</span>
          </div>
          <Card v-for="task in tasks" :title="task.title" :img="task.img" v-if="task.boardId == 1" />
          <a class="button is-outlined">Add Task</a>
        </section>
      </div>
      <div class="column is-one-fifth">
        <section class="section app-panel">
          <h2>Todo</h2>
          <div class="app-task-count">{{countTasks(2)}} 
            <span v-if="countTasks(4) > 1">Tasks</span><span v-else>Task</span>
          </div>

            <Card v-for="task in tasks" :title="task.title" :img="task.img" v-if="task.boardId == 2" />
<a class="button is-outlined">Add Task</a>
        </section>
      </div>
      <div class="column is-one-fifth">
        <section class="section app-panel">
          <h2>In Development</h2>
          <div class="app-task-count">{{countTasks(3)}} 
            <span v-if="countTasks(4) > 1">Tasks</span><span v-else>Task</span>
          </div>
          <Card v-for="task in tasks" :title="task.title" :img="task.img" v-if="task.boardId == 3" />
          <a class="button is-outlined">Add Task</a>
        </section>
      </div>
            <div class="column is-one-fifth">
        <section class="section app-panel">
          <h2>Waiting for Review</h2>
          <div class="app-task-count">{{countTasks(4)}} 
            <span v-if="countTasks(4) > 1">Tasks</span><span v-else>Task</span>
          </div>
          <Card v-for="task in tasks" :title="task.title" :img="task.img" v-if="task.boardId == 4" />
        <a class="button is-outlined">Add Task</a>
        </section>
      </div>
            <div class="column is-one-fifth">
        <section class="section app-panel">
          <h2>Done</h2>
          <div class="app-task-count">{{countTasks(5)}} 
            <span v-if="countTasks(4) > 1">Tasks</span><span v-else>Task</span>
          </div>
          <Card v-for="task in tasks" :title="task.title" :img="task.img" v-if="task.boardId == 5" />
        <a class="button is-outlined">Add Task</a>
        </section> -->
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import Aside from '@/components/admin/Aside'
  import Level from '@/components/admin/Level'
  import Card from '@/components/admin/Card'

  export default {
    name: 'Admin',
    components: {Aside, Level, Card},
    data () {
      return {
        collapse: false,
        tasks: [
          {title: 'Slide Out Menu', boardId: 1, completed: false, img: 'https://placeimg.com/660/500/tech'},
          {title: 'Website Slider', boardId: 1, completed: false, img: ''},
          {title: 'Button Components', boardId: 2, completed: false, img: 'https://placeimg.com/640/480/any'},
          {title: 'Mobile Slider', boardId: 2, completed: false, img: ''},
          {title: 'Mobile Slider', boardId: 3, completed: false, img: ''},
          {title: 'Mobile Slider', boardId: 4, completed: false, img: ''},
          {title: 'Bug fix', boardId: 5, completed: false, img: 'https://placeimg.com/640/480/tech'},
          {title: 'Mobile Slider', boardId: 2, completed: false, img: ''},
          {title: 'Mobile Slider', boardId: 3, completed: false, img: ''},
          {title: 'Mobile Slider', boardId: 1, completed: false, img: 'https://placeimg.com/640/480/any'}
        ]
      }
    },
    methods: {
      countTasks: function (id) {
        return this.tasks.filter(task => task.boardId === id).length
      }
    },
    computed: {
      // countTasks: function (id) {
      //   return this.tasks.filter(task => task.boardId == id).length
      // }
    }
  }
</script>

<style scoped>
  .app-panel {
    background-color: #f6f7fd;
    border-radius: 3px;
    text-align: left;
    padding-top:15px;
  }
  .app-panel h2 {
    font-weight: bold;
    font-size: 26px;
    /* margin-bottom: 10px; */
  }
  .app-task-count {
    margin-bottom: 20px;
    /* font-size: 16px; */
  }
  Card {
    margin-bottom: 10px;
  }
  .button {
    display: inline-block;
    width: 100%;
    padding: 10px 0;
    height: 45px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #b5b5b5;
  }
  .button:hover {
    color: #7a7a7a;
  }
</style>
