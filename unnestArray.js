// Take an array of arrays and un-nest it.
// unnestArray([1, 2], [3, 4], [5, 6], [7]) === [1, 2, 3, 4, 5, 6, 7]

const arrays = [[1, 2], [3, 4], [5, 6], [7]];
function unnestArrayOne(arr) {
  return arr.reduce((a, b) => a.concat(b));
}
console.log(unnestArrayOne(arrays));

function unnestArrayTwo(arr) {
  return [].concat.apply([], arr);
}
console.log(unnestArrayTwo(arrays));

function unnestArrayThree(arr) {
  return [].concat(...arr);
}
console.log(unnestArrayThree(arrays));
