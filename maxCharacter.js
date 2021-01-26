// Return the character that is most common in a string
// maxCharacter("javascript") == "a"

function maxCharacter(str) {
  const charMap = {};
  let topCount = 0;
  let topDogs = [];
  //let result = '';

  str.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  console.log(charMap);
  for (let char in charMap) {
    if (charMap[char] > topCount) {
      topCount = charMap[char];
      //topDog = char;
    }
  }
  for (let char in charMap) {
    if (charMap[char] == topCount) {
      topDogs = [...topDogs, char];
    }
  }
  // for (i = 0; i < topDogs.length; i++) {
  //   result += topDogs[i];
  // }
  return topDogs.join('');
}
console.log(maxCharacter('javascript'));
