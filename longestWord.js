// Return the longest word of a string
// If more then one, put them in order of appearance

function longestWord(str) {
  const filterArr = str.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = filterArr.sort((a, b) => b.length - a.length);

  //If you wanna return first longest word
  //return sorted[0];

  //If you wanna return multiple longest words
  const allLongestWords = sorted.filter(
    (word) => word.length === sorted[0].length
  );
  return allLongestWords.join(', ');
}
console.log(longestWord('My name is Innervision, and this is my story!'));
