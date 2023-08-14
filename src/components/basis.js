let happiness = 100;
let hunger = 0;
let thirst = 0;
let energy = 100;

arr = [happiness, hunger, thirst, energy]

for (let i=0; i< arr.length; i++){
	(arr[i] >= 100) ? arr[i] = 100 : (arr[i] <= 0) ? arr[i] = 0 : arr[i] = arr[i]
}
class Difficulty {
    constructor(name, difficultyFactor, depletionRate, hungerDecrease, thirstIncrease, energyDecrease, happinessIncrease) {
        this.name = name;
        this.difficultyFactor = difficultyFactor;
		this.depletionRate = depletionRate;
		this.hungerDecrease = hungerDecrease;
		this.thirstIncrease = thirstIncrease;
		this.energyDecrease = energyDecrease;
		this.happinessIncrease = happinessIncrease;
    };
    explain(){
        `You have chosen ${this.name} difficulty. This means your stats will automatically increase/decrease at a rate of ${depletionRate}/second. `
    }
}
const hard = new Difficulty(hard, 1, 2, 10, 10, 30, 5);
const medium = new Difficulty(medium, 2, 1, 20, 6, 20, 10);
const easy = new Difficulty(easy, 3, 0.5, 30, 3, 10, 20);

class Pet {
	constructor(name, difficulty, hunger, happiness, energy) {
	this.name = name;
	this.difficulty = difficulty;
	this.hunger = hunger;
	this.happiness = happiness;
	this.energy = energy;
	}
	eats() {
		this.hunger -= hungerDecrease;
		this.thirst += thirstIncrease;
		this.happiness += happinessIncrease;
		this.energy -= energyDecrease;
		return this;
	}
	drinks() {
		this.thirst -= thisDecrease;
		this.hunger -= 5*difficultyFactor;
		this.happiness += happinessIncrease;
		this.energy += energyIncrease;
		return this;
	}
	sleeps() {
		this.energy += 30*difficultyFactor;
		this.hunger += hungerIncrease;
		this.thirst += thirstIncrease;
		this.happiness += happinessIncrease;
		return this;
	}
}

class Unicorn extends Pet {
	constructor(name, type, food, difficulty, hunger, happiness, energy) {
		super (name, type, food, difficulty, hunger, happiness, energy);
	}
	jumpingOverRainbows() {
		this.energy -= energyDecrease;
		this.hunger += hungerIncrease;
		this.thirst += thirstIncrease;
		this.happiness += happinessIncrease;
		console.log(`${this.name} is jumping over rainbows!`);
		return this;
	}
	dressage() {
		this.energy -= energyDecrease;
		return this;
	}
};

class Grinch extends Pet {
	constructor(name, food, difficulty, hunger, energy, misery) {
		super (name, food, difficulty, hunger, energy);
		this.misery = misery;
        this.name = "The Grinch"
	}
	presentTrampling() {
		this.energy -= energyDecrease;
		this.hunger += hungerIncrease;
		this.thirst += thirstIncrease;
		this.misery += happinessIncrease;
		console.log(`The Grinch is trampling on presents!`);
		return this;
	}
	selfLoathing() {
		this.energy -= energyDecrease;
        console.log(`The Grinch just loathes himself.`)
		return this;
	}
};
