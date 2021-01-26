// Sort values in an array in the descending order, without moving the trees
// array = [5,"tree",7,6,"tree",2,8,"tree"]
//sortBetweenTrees(array) === [2,"tree",5,6,"tree",7,8,"tree"]
const array = [1, 10, 'tree', 2, 9, 'tree', 8, 3, 'tree', 6, 7, 5, 'tree', 4];
const numbers = [];
function sortBetweenTrees(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != 'tree') {
      numbers.push(arr[i]);
    }
  }
  numbers.sort((a, b) => b - a); //just "numbers.sort()" for ascending
  //console.log(numbers);
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == 'tree') {
      numbers.splice(i, 0, 'tree');
    }
    //console.log(numbers[i]); returns elements of ordered array 1by1
  }
  return numbers;
}
//const isNumber = (value) => value != 'tree';
console.log(sortBetweenTrees(array));
//////////////////////////////////////////////////////////////////////
function sortBetweenTreesOne(arr) {
  const positions = [];
  const numbers = [];

  arr.forEach((val, i) =>
    val === 'tree' ? positions.push(i) : numbers.push(val)
  );
  numbers.sort((a, b) => b - a); //just "numbers.sort()" for ascending

  positions.forEach((val) => numbers.splice(val, 0, 'tree'));
  return numbers;
}
a = ['tree', 4, 9, 1, 'tree', 8, 2, 7, 'tree', 6, 5, 3, 'tree'];
console.log(sortBetweenTreesOne(a));
