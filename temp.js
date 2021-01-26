var arr1 = 'john'.split('');
console.log(arr1);
var arr2 = arr1.reverse();
console.log(arr2);
var arr3 = 'jones'.split('');
console.log(arr3);
console.log(arr1);
arr2.push(arr3);
console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));
console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));

const missing = ['a', 'b', 'b', 'n', 'm', 'la', 'k', 'j', 'h', 'g', 'f'];
const splinter = 'hoorayy';
console.log(splinter.split('').join());
