// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// sumAllPrimes(10) === 17

function sumAllPrimes(margin) {
  let primeSum = 0;
  function isPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) return false;
    }
    return true;
  }
  for (let i = 2; i <= margin; i++) {
    if (isPrime(i)) {
      //console.log(i);
      primeSum += i;
    }
  }
  return primeSum;
}
console.log(sumAllPrimes(11));
