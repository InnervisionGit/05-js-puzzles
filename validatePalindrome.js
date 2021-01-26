// Return true if it is a palindrome
// isPalindrome('racecar') === true

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}
console.log(isPalindrome('racecar'));

function isPaliTwo(str) {
  let isPali = true;
  let caseStr = str.toLowerCase();
  let arr = caseStr.split('');
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      isPali = false;
      break;
    }
  }
  return isPali;
}
console.log(isPaliTwo('racecar'));
