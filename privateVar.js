function secretVariable() {
  let private = 'top secret';
  return function () {
    return private;
  };
}

let lol = secretVariable();
console.log(lol());
