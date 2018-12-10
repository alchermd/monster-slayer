const app = new Vue({
  el: "#app",
  data: {
    gameInProgress: false,
    you: new Character(),
    monster: new Character(),
    gameLogs: []
  },
  methods: {
    startGame() {
      this.you.currentLife = this.you.maxLife;
      this.monster.currentLife = this.monster.maxLife;

      this.gameInProgress = true;
      this.gameLogs = [];
    },
    giveUp() {
      this.gameInProgress = false;
    },
    attack() {
      const youAttackAmount = this.you.attack(this.monster);
      this.gameLogs.push({
        text: `You attacked for ${youAttackAmount}`,
        style: { "player-turn": true }
      });

      const monsterAttackAmount = this.monster.attack(this.you);
      this.gameLogs.push({
        text: `Monster attacked for ${monsterAttackAmount}`,
        style: { "monster-turn": true }
      });

      this.checkForWinner();
    },
    heal() {
      const healAmount = Math.floor(
        (this.you.maxLife - this.you.currentLife) * 0.25
      );

      this.you.heal(healAmount);
      this.gameLogs.push({
        text: `You healed for ${healAmount}`,
        style: { "player-turn": true }
      });

      const attackAmount = this.monster.attack(this.you);
      this.gameLogs.push({
        text: `Monster attacked for ${attackAmount}`,
        style: { "monster-turn": true }
      });

      this.checkForWinner();
    },
    specialAttack() {
      const specialDamage = this.you.computeDamage() + 20;
      this.you.attack(this.monster, specialDamage);
      this.gameLogs.push({
        text: `You attacked for ${specialDamage}`,
        style: { "player-turn": true }
      });

      const monsterAttackAmount = this.monster.attack(this.you);
      this.gameLogs.push({
        text: `Monster attacked for ${monsterAttackAmount}`,
        style: { "monster-turn": true }
      });

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
