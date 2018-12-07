const app = new Vue({
  el: "#app",
  data: {
    gameInProgress: false,
    you: new Character(),
    monster: new Character()
  },
  methods: {
    startGame() {
      this.gameInProgress = true;
    },
    giveUp() {
      this.gameInProgress = false;
    }
  }
});
