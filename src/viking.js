// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    //chose a random saxon
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[saxonIndex];
    const randomViking = this.vikingArmy[vikingIndex];
    // get the random viking attack
    // saxon receives damage

    const result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return result;
  }
  saxonAttack() {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[saxonIndex];
    const randomViking = this.vikingArmy[vikingIndex];

    const result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return result;
  }
  showStatus() {}
}
