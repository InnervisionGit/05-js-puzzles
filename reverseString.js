// Return a string in reverse
// reverseString("hello") === "olleh"

function reverseStringOne(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStringOne('tsrif'));
/*
function reverseStringOne(str){
    const strArr = str.split("");
    strArr.reverse();
    return strArr.join("");
}
*/
///////////////////////////////////////////////////////////
function reverseStringTwo(str) {
  let revStringTwo = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revStringTwo = revStringTwo + str[i];
  }
  return revStringTwo;
}
console.log(reverseStringTwo('dnoces'));
///////////////////////////////////////////////////////////
function reverseStringThree(str) {
  let revString = '';
  for (let i = 0; i < str.length; i++) {
    revString = str[i] + revString;
  }
  return revString;
}
console.log(reverseStringThree('driht'));
///////////////////////////////////////////////////////////
function reverseStringFour(str) {
  let revString = '';
  for (let char of str) {
    revString = char + revString;
  }
  return revString;
}
console.log(reverseStringFour('htruof'));
///////////////////////////////////////////////////////////
function reverseStringFive(str) {
  let revString = '';
  str.split('').forEach((char) => (revString = char + revString));
  return revString;
}
console.log(reverseStringFive('htfif'));
// function(char){...} === (char) => (...)

function reverseStringSix(str) {
  return str.split('').reduce((revString, char) => char + revString, '');
}
console.log(reverseStringSix('htxis'));
//function (revString, char) { return char + revString;  }, ''); ===
//=== (revString, char) => char + revString, '');

function reverseStringSeven(str) {
  let arr = [...str];
  let newArr = arr.map((_, i, arr) => arr[arr.length - 1 - i]);
  return newArr.join('');
}
console.log(reverseStringSeven('neves'));
