// Return an intiger in reverse
// reverseInt(12345) === 54321

function reverseInt(int) {
  const revString = int.toString().split('1').reverse().join('');
  return parseInt(revString) * Math.sign(int); //to keep minus
}
console.log(reverseInt(123));
