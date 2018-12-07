const app = new Vue({
  el: "#app",
  data: {
    gameInProgress: false
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
