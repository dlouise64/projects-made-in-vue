<template>
  <section class="section" id="guess-the-word">
    <h1>Guess the Word!</h1>
    <div class="board__status">
      <transition name="bounce">
        <h2 v-show="playerWon" v-bind="winOrLose()" class="won">YOU WON THE GAME!</h2>
      </transition>
      <transition name="bounce">
        <h2 v-show="playerLost" v-bind="winOrLose()" class="lost">GAME OVER</h2>
      </transition>
    </div>

    <div class="board section">
      <div class="board__letter" v-for="letter in answer" v-bind:key="letter">
        <span v-if="findLetters(letter)" v-text="letter"></span>
        <span v-else>
          <span v-if="playerLost" class="lost">{{letter}}</span>
          <span v-else>&nbsp;</span>
        </span>
      </div>
    </div>


    <div class="alphabet">
      <button v-for="i in alphabet" v-on:click="playTurn(i, $event)"v-text="i" v-bind:key="i"></button>
    </div>

    <p class="counter">Turns remaining: {{counter}}</p>
    
  </section>
</template>

<script>

export default {
  name: 'GuessTheWord',
  data () {
    return {
      answer: 'Peanut',
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      foundLetters: [],
      counter: 12,
      playerWon: false,
      playerLost: false
    }
  },
  methods: {
    getRandomAnswer: function (answers) {
      const newAnswer = answers[Math.floor(Math.random() * answers.length)]
      this.answer = newAnswer
    },
    findLetters: function (letter) {
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
        this.disableButtons()
      } else if (this.counter === 0) {
        this.playerLost = true
        this.disableButtons()
      }
    },
    disableButtons: function () {
      let buttons = document.getElementsByTagName('button')
      let buttonsList = Array.prototype.slice.call(buttons)
      buttonsList.forEach(function (e) {
        e.setAttribute('disabled', 'disabled')
      })
    }
  }
}
</script>

<style scoped>
  h2 {
    font-weight: bold;
    font-size: 36px;
  }
  .lost {
    color: #ff3860;
  }
  .won {
    color: #41b882;
  }
  #guess-the-word {
    font-size: 20px;
  }
  section.section {
    padding-top: 20px;
  }
  .board.section {
    padding: 20px 0 20px;
  }
  .board__status {
    height: 36px;
    line-height: 36px;
    padding-top: 10px;
  }
  .board__letter {
    display: inline-block;
    width: 30px;
    padding-bottom: 5px;
    margin: 0 10px;
    border-bottom: 3px solid #000;
    font-size: 30px;
  }
  @media (max-width: 375px) {
    .board__letter {
    display: inline-block;
    width: 25px;
    padding-bottom: 5px;
    margin: 0 10px;
    border-bottom: 3px solid #000;
    font-size: 25px;
    }
  }

  .alphabet {
    margin: 5px 0 10px;
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

  @media (max-width: 375px) {
    .alphabet > button {
      font-size: 18px;
      border-radius: 4px;
      border: 1px solid #2c3e50;
      height: 28px;
      width: 28px;
      margin: 0 1px 1px 0;
      background-color: #2c3e50;
      color: #fff;
    }
  }
  .alphabet > button:disabled {
    color: #ccc;
    border-color: currentColor;
    border-radius: 4px;
    background-color: #fff;
  }

  .counter { margin-bottom: 50px; }

/* animations */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}


</style>
