// take in array of numbers and return an array with a sum of odd and sum of even numbers in the original array
// evenOddSum([1,2,3,4,5,6,7,8,9]) === [20, 25]

function evenOddSum(arr) {
  arrEven = [];
  arrOdd = [];

  arr.forEach((element) =>
    element % 2 === 0 ? arrEven.push(element) : arrOdd.push(element)
  );
  const evenSum = arrEven.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const oddSum = arrOdd.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return [evenSum, oddSum];
}
console.log(evenOddSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//////////////////////////////////////////////////////////////////////////
function evenOddSumOne(arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((num) => (num % 2 == 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
}
console.log(evenOddSumOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
