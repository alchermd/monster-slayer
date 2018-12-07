class Character {
    constructor() {
        this.minDamage = 5;
        this.maxDamage = 20;
        this.currentLife = 100;
        this.maxLife = 100;
    }
    
    attack(target) {
        // Pick a random value from [minDamage ... maxDamage]
        target.currentLife -= Math.floor(Math.random() * this.maxDamage + this.minDamage);
        
        return target.currentLife;
    }
}