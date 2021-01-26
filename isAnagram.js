// Return true if anagram and false if not
// while filtering for letters and numbers only
// "elbow" === "below" true
// "Dormitory" === "dirty room!$!"
const str1 = 'dormitory';
const str2 = 'dirty room"#"$';
function isAnagram(str1, str2) {
  return filterStr(str1) === filterStr(str2);
}

function filterStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
console.log(isAnagram(str1, str2));
