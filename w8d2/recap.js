// Javascript Classes

// Object!
new Object();

// Array!
new Array();

// Date
new Date();

// Error, Promise, Class, new Something (PascalCase)

// Purpose of a class ?
// To teach something?
// To reuse a structure (methods, properties)
// Blueprint to build a specific structure

class Potato {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  greet = function () {
    console.log("Hi I am a potato and my name is: " + this.name);
  };

  fight = function () {
    console.log(`EEEEEEEEEKKK I'M JUST A ${this.type}`);
    console.log("*RUNS AWAY*");
  };
}

class FightingPotato extends Potato {
  constructor(name, type) {
    super(name, type); // Superintendent
  }

  fight = function () {
    console.log("ADRIEEEENNNEEEEEE");
    console.log("Almost wins");
  };
}

const russett = new Potato("Potator", "Russett");
const yukonGold = new Potato("Potatinator", "Yukon Gold");
const irishCobbler = new Potato("Potato Master 2000", "Irish Cobbler");

const italianPotato = new FightingPotato("Potaty Balboa", "A angry potato from Detroit");

// console.log(russett, yukonGold, irishCobbler);

// irishCobbler.greet();
// russett.greet();

italianPotato.fight();
