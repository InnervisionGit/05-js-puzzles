// Remove from array whatever is in the following arguments. Return rest.
// seekAndDestroy([1,2,3,4,5,6,"seek","and","destroy"],1,3,5,"and") ===
//  [2,4,6;"seek","destroy"]

function seekAndDestroy(array, ...destroy) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < destroy.length; j++) {
      if (array[i] == destroy[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}
console.log(seekAndDestroy([1, 2, 3, 4, 5, 6], 1, 3, 5, 6));

function seekAndDestroyOne(arr) {
  const args = Array.from(arguments);
  const filterArray = (val) => args.indexOf(val) === -1;
  //if the element we are checking is not in the array, the index of it will be -1
  return arr.filter(filterArray);
}
console.log(
  seekAndDestroyOne([1, 2, 3, 4, 5, 6, 'seek', 'and', 'destroy'], 5, 'and')
);

function seekAndDestroyTwo(arr, ...nub) {
  return arr.filter((val) => !nub.includes(val));
}
console.log(
  seekAndDestroyTwo([1, 2, 3, 4, 5, 6, 'seek', 'and', 'destroy'], 1, 'seek')
);
