const args = process.argv.slice(2);
const addTheTwoNumbers = function(args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    if(args[i] % 1 === 0) {
      sum += Number(args[i]);
    }    
  }
  return sum;
};
console.log(addTheTwoNumbers(args));