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
    heal() {
      this.you.heal(
        Math.floor((this.you.maxLife - this.you.currentLife) * 0.25)
      );
      this.monster.attack(this.you);
    },
    specialAttack() {
      this.you.attack(this.monster, this.you.computeDamage() + 20);
      this.monster.attack(this.you);
    }
  },
  computed: {
    youHealthBarWidth() {
      return {
        width: this.you.currentLife + '%'
      };
    },
    monsterHealthBarWidth() {
      return {
        width: this.monster.currentLife + '%'
      };
    }
  }
});
