class Character {
    constructor() {
        this.minDamage = 5;
        this.maxDamage = 20;
        this.currentLife = 100;
        this.maxLife = 100;
    }
    
    attack(target, damage = null) {
        // Allow damage to be passed as a parameter, compute it otherwise.
        const computedDamage = this.computeDamage();
        target.currentLife -= damage !== null ? damage : computedDamage;
        
        return computedDamage;
    }

    heal(amount) {
        this.currentLife += amount;
    }

    computeDamage() {
        // Pick a random value from [minDamage ... maxDamage]
        return Math.floor(Math.random() * this.maxDamage + this.minDamage);
    }
}