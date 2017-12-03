<template>
  <div id="hangman">
    <h1>Let's play Hangman!</h1>

    <h2 v-show="playerWon" v-bind="winOrLose()">YOU ARE A WINNER!</h2>
    <div v-show="playerLose" v-bind="winOrLose()">
      <h2>GAME OVER</h2>
      <p>The answer was: <strong>{{answer}}</strong></p>
    </div>
    <p class="counter">Turns remaining: {{counter}}</p>
    
    <div class="board">
      <div class="board__letter" v-for="letter in answer">
        <span v-if="findInFound(letter)" v-text="letter"></span>
        <span v-else>&nbsp;</span>
      </div>
    </div>

    <div class="alphabet">
      <button v-for="i in alphabet" v-on:click="playTurn(i, $event)"v-text="i"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HangMan',
  data () {
    return {
      answers: ['Programming', 'Twitter', 'Computer'],
      answer: 'DanaLouiseIti',
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      foundLetters: [],
      counter: 12,
      playerWon: false,
      playerLose: false
    }
  },
  methods: {
    bla: function () {
      return this.answers[Math.floor(Math.random() * this.answers.length)]
    },
    getRandomAnswer: function (answers) {
      const newAnswer = answers[Math.floor(Math.random() * answers.length)]
      this.answer = newAnswer
    },
    findInFound: function (letter) {
      if (this.foundLetters.indexOf(letter.toLowerCase()) !== -1) {
        return true
      } else {
        return false
      }
    },
    playTurn: function (letter, ev) {
      ev.target.setAttribute('disabled', 'disabled')
      if (this.answer.toLowerCase().indexOf(letter) > -1) {
        for (let i = 0; i < (this.answer.toLowerCase().split(letter).length - 1); i++) {
          this.foundLetters.push(letter)
        }
      } else {
        this.counter -= 1
      }
    },
    winOrLose: function () {
      if (this.foundLetters.length === this.answer.length && this.counter !== 0) {
        this.playerWon = true
      } else if (this.counter === 0) {
        this.playerLose = true
      }
    }
  }
}
</script>

<style scoped>
  #hangman {
    font-size: 20px;
  }
  .board {
    margin: 20px 0;
  }
  .board__letter {
    display: inline-block;
    width: 30px;
    padding-bottom: 5px;
    margin: 0 10px;
    border-bottom: 3px solid #000;
    font-size: 30px;
  }

  .alphabet {
    margin: 40px 0;
  }
  .alphabet > button {
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid #2c3e50;
    height: 40px;
    width: 40px;
    margin: 0 5px 5px 0;
    background-color: #2c3e50;
    color: #fff;
  }
  .alphabet > button:disabled {
    color: #ccc;
    border-color: currentColor;
    border-radius: 4px;
    background-color: #fff;
  }

  .counter { margin-bottom: 50px; }

  /* Default Vue styles */
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
