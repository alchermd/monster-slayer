const app = new Vue({
  el: "#app",
  data: {
    gameInProgress: false,
    you: new Character(),
    monster: new Character()
  },
  methods: {
    startGame() {
      this.you.currentLife = this.you.maxLife;
      this.monster.currentLife = this.monster.maxLife;

      this.gameInProgress = true;
    },
    giveUp() {
      this.gameInProgress = false;
    },
    attack() {
      this.you.attack(this.monster);
      this.monster.attack(this.you);

      this.checkForWinner();
    },
    heal() {
      this.you.heal(
        Math.floor((this.you.maxLife - this.you.currentLife) * 0.25)
      );

      this.monster.attack(this.you);
      this.checkForWinner();
    },
    specialAttack() {
      this.you.attack(this.monster, this.you.computeDamage() + 20);
      this.monster.attack(this.you);

      this.checkForWinner();
    },
    checkForWinner() {
      if (this.monster.currentLife <= 0) {
        this.giveUp();

        if (window.confirm("You won! Start again?")) {
          this.startGame();
        }
      } else if (this.you.currentLife <= 0) {
        this.giveUp();

        if (window.confirm("You lost! Start again?")) {
          this.startGame();
        }
      }
    }
  },
  computed: {
    youHealthBarWidth() {
      return {
        width: this.you.currentLife + "%"
      };
    },
    monsterHealthBarWidth() {
      return {
        width: this.monster.currentLife + "%"
      };
    }
  }
});
