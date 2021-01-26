// Return the sum of all parameters entered
// regardless of the amount of numbers
// addAll(1,2,3,4) === 10

function addAllOne() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addAllOne(1, 2, 3, 4, 5));
//////////////////////////////////////////////////////////////
function addAllTwo(...spread) {
  let sum = 0;
  spread.forEach((element) => (sum += element));
  return sum;
}
console.log(addAllTwo(2, 5, 6, 7));

function addAllThree(...args) {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log(addAllThree(1, 2, 3, 4, 5, 6));
