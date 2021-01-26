// Split array into groups of a specific length
// groupArray([1,2,3,4,5,6,7,8,9], 2) ===[[1,2],[3,4],[5,6],[7,8],[9]]
// groupArray([1,2,3,4,5,6,7,8,9], 4) ===[[1,2,3,4],[5,6,7,8],[9]]

function groupArrayOne(arr, len) {
  const groupedArray = [];
  let i = 0;
  while (i < arr.length) {
    groupedArray.push(arr.slice(i, i + len));
    i += len;
  }
  return groupedArray;
}
console.log(groupArrayOne([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));

function groupArrayTwo(arr, len) {
  const groupedArray = [];
  arr.forEach(function (value) {
    const last = groupedArray[groupedArray.length - 1];
    if (!last || last.length === len) {
      groupedArray.push([value]); //push an array, with the value
    } else {
      last.push(value);
    }
  });
  return groupedArray;
}
console.log(groupArrayTwo([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
