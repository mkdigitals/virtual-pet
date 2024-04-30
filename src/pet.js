const MAX_FITNESS = 10;
const WALK_FITNESS = 4;
const MIN_HUNGER = 0;
const GROWUP_HUNGER = 5;
const GROWUP_AGE = 1;
const GROWUP_FITNESS = -3;
const FEED_HUNGER = -3;
function Pet(name) {
   this.name = name;
   this.age = 0;
   this.hunger = 0;
   this.fitness = 10;
}

Pet.prototype = {
  growUp () {
    this.age += GROWUP_AGE;
    this.hunger += GROWUP_HUNGER;
    this.fitness += GROWUP_FITNESS;
  },

  walk () {
    this.fitness += WALK_FITNESS;
    if (this.fitness > MAX_FITNESS) {
      this.fitness = MAX_FITNESS;
    }
  },

  feed () {
    this.hunger += FEED_HUNGER;
    if (this.hunger < MIN_HUNGER) {
      this.hunger = MIN_HUNGER;
    }
  },
}

module.exports = Pet;
