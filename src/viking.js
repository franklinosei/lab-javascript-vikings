// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength
    this.health = health
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage

    if (this.health <= 0) {
      return "A Saxon has died in combat"
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack() {
    let randomViking = this.getRandom(this.vikingArmy)
    let randomSaxon = this.getRandom(this.saxonArmy)

    let damageResult = randomSaxon.receiveDamage(randomViking.strength)

    this.removeDeadSoldiers(this.saxonArmy)

    return `${damageResult}`
  }

  saxonAttack() {
    let randomViking = this.getRandom(this.vikingArmy)
    let randomSaxon = this.getRandom(this.saxonArmy)

    let damageResult = randomViking.receiveDamage(randomSaxon.strength)

    this.removeDeadSoldiers(this.vikingArmy)

    return `${damageResult}`
  }

  getRandom(inputArr) {
    return inputArr[Math.floor(Math.random() * inputArr.length)]
  }

  removeDeadSoldiers(army) {
    for (let soldier of army) {
      if (soldier.health <= 0) {
        army.splice(army.indexOf(soldier), 1)
      }
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
