function Rabbit(type) {
  this.type = type;
}

const killerRabbit = new Rabbit("killer");
const blackRabbit = new Rabbit("black");

Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'.");
};

killerRabbit.speak("Rawr");
blackRabbit.speak("Can't see me");

