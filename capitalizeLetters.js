// Return a string with the first letter of every word capitalized
// capitalizeLetters("i love javascript") === "I Love Javascript"

function capitalizeLettersOne(str) {
  const strArr = str.toLowerCase().split(' ');

  for (i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}
console.log(capitalizeLettersOne('inner vision java script'));
/////////////////////////////////////////////////////////////////////////
function capitalizeLettersTwo(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}
console.log(capitalizeLettersTwo('little map function'));
////////////////////////////////////////////////////////////////////////
function capitalizeLettersThree(str) {
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });
}
console.log(capitalizeLettersThree('regular day, regular expression'));
