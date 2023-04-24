const diceRoller = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const numberOfRolles = function(num) {
  let roller = "";
  for (let i = 0; i < num; i++) {
    if (i < num - 1) {
      roller += diceRoller(1,6) + ", ";
    } else {
      roller += diceRoller(1,6);
    }
  }
  return `Rolled ${num} dice: ${roller}`;
};
console.log(numberOfRolles(7));