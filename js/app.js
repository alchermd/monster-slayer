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
    },
    attack() {
      this.you.attack(this.monster);
      this.monster.attack(this.you);
    },
    heal(character) {
      character.heal(Math.floor(character.currentLife * 0.05));
    }
  }
});
