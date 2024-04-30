const MAX_FITNESS = 10;
const WALK_FITNESS = 4;
const MIN_HUNGER = 0;
const GROWUP_HUNGER = 5;
const GROWUP_AGE = 1;
const GROWUP_FITNESS = -3;
const FEED_HUNGER = -3;
const CRITICAL_HUNGER = 4;
const CRITICAL_FITNESS = 4;





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

  checkUp() {
    if(this.hunger > CRITICAL_HUNGER && this.fitness < CRITICAL_FITNESS ) {
      return "I am hungry AND I need a walk";
    } else if ( this.hunger > CRITICAL_HUNGER) {
      return "I am hungry";
    } else if (this.fitness < CRITICAL_FITNESS) {
      return "I need a walk"
    }
    return "I feel great"
  }
}

module.exports = Pet;