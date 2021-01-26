// the classic

for (var i = 1; i <= 100; i++) {
  let output = '';
  //let line = '';
  if (i % 3 == 0) {
    output += 'Fizz';
  }
  if (i % 5 == 0) {
    output += 'Buzz';
  }
  if (output == '') {
    output = i;
  }
  //(?!$) removes "and" at the end
  if (typeof output == 'string' && output.length > 5) {
    output = output.replace(/.{4}(?!$)/g, function (space) {
      return space + ' and ';
    });
  }
  //   if (typeof output == 'number') {
  //     line = ' thats a wrong number';
  //   }
  console.log(typeof output + ': ' + output + line);
}
