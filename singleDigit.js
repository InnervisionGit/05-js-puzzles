// Take a string of numbers and keep adding the digits until you're left with a single digit
//singleDif("55555") === 7  (5+5+5+5+5 = 25 => 2+5=7)

let count = 1;
function singleDig(str) {
  let numArr = [];
  str.split('').forEach((element) => numArr.push(Number(element)));
  let digit = numArr.reduce((accu, curr) => accu + curr);
  if (digit < 10) {
    return (
      'Number of recursions is: ' +
      count +
      '\n and the final digit is: ' +
      digit
    );
  } else {
    count++;
    return singleDig(digit.toString());
  }
}
console.log(singleDig('5555555555555'));
