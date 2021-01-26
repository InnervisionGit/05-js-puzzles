let i = 0;
forLoop();
function forLoop() {
  if (i <= 100) {
    if (i % 3 == 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
    i++;
    return forLoop();
  }
}
