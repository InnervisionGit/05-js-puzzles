// return an array of missing letters from the character with lowest charcode to highest
// missingLetters("abd") === c

function missingLetters(str) {
  str = str
    .toLowerCase() //clean upper cases
    .split('')
    .sort() //order alphabetically
    .filter((char, index, array) => array.indexOf(char) == index) //remove duplicates
    .join('');

  let compare = str.charCodeAt(0);
  let missing = [];

  str.split('').map(function (char, i) {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      while (str.charCodeAt(i) != compare) {
        missing.push(String.fromCharCode(compare));
        compare++;
      }
      compare++;
    }
  });

  return missing.join();
}

console.log(missingLetters('dabz'));
