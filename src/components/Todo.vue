<template>
  <div>
    <form>
      <input 
        type="text" 
        @keyup.enter="addToList" 
        v-model="newItem"
        v-bind:class="{ active: isActive, 'text-danger': hasError }"
        placeholder="Add a task"
      >
    </form>
    <h2>Incomplete Tasks</h2>
    <ul class="list-stripped">
      <li v-for="task in incompleteTasks">
        {{task.description}}
        <span class="icon-sucess" @click="isComplete(task, true)">
          <CheckCircleIcon/>
        </span>
      </li>
    </ul>
    <h2>Completed Tasks</h2>
    <ul class="list-stripped">
      <li v-for="task in tasks" v-if="task.completed">
        {{task.description}}
        <span class="icon-danger" @click="isComplete(task, false)">
          <CancelIcon/>
        </span>
      </li>
    </ul>

  </div>
</template>
<script>
  import CheckCircleIcon from 'vue-material-design-icons/check-circle.vue'
  import CancelIcon from 'vue-material-design-icons/cancel.vue'

  export default {
    name: 'Todo',
    components: {
      CheckCircleIcon,
      CancelIcon
    },
    data () {
      return {
        isActive: true,
        hasError: false,
        tasks: [],
        newItem: ''
      }
    },
    methods: {
      addToList: function () {
        this.hasError = false
        if (this.newItem === '') {
          this.hasError = true
        } else {
          this.tasks.push({description: this.newItem, completed: false})
          this.newItem = ''
        }
      },
      isComplete: function (item, boolean) {
        item.completed = boolean
      }
    },
    computed: {
      incompleteTasks: function () {
        return this.tasks.filter(task => !task.completed)
      }
    }
  }
</script>
<style scoped>
  h2 {
    font-size: 26px;
    font-weight: bold;
    margin: 20px 0;
  }
  ul {
    width: 520px;
    margin: 0 auto;
    text-align: left;
  }
  li {
    padding: 10px 0 15px;
    color: #000;
    margin-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  .active {
    border: 1px solid green;
  }
  input[type=text] {
    outline: none;
    border: 1px solid #DDDDDD;
    color: #2c3e50;
    width: 500px;
    padding: 10px;
    margin: 40px 0 20px;
    font-size: 20px;
  }
  input[type=text]:focus {
    outline: none;
    border: 1px solid #41b882;
  }
  input[type=text].text-danger {
    outline: none;
    box-shadow: 0 0 5px #d44b4b;
    border: 1px solid #d44b4b;
  }

  .material-design-icon {
    float:right;
    fill: #ccc;
    cursor: pointer;
    font-size: 30px;
  }
  .material-design-icon:hover {
    transition: all ease .3s;
  }
  #check-circle-icon:hover {
    fill: #41b882;
  }
  #cancel-icon:hover {
    fill: #d44b4b;
  }
</style>
