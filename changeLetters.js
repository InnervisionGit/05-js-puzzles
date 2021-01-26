// Change every letter of the string to the one that follows it (and capitalize vowels)
// Z changes to A
// "hello" === "Ifmmp"

function changeLetters(str) {
  let cypher = str.toLowerCase().replace(/[a-z]/gi, function (char) {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() - 1);
    }
  });

  //   cypher = cypher.replace(/[a|e|i|o|u]/gi, function (vowel) {
  //     return vowel.toUpperCase();
  //   });
  return cypher;
}
console.log(changeLetters('joofswjtjpo jt dppm!!'));
