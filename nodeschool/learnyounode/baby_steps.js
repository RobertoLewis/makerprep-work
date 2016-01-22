// Write a program that accepts one or more numbers as command-line
//   arguments and prints the sum of those numbers to the console (stdout).

//console.log(process.argv);

function reduce(collection){
  var accumulator = Number(collection[2]);
  var index = 3;

  while (index < collection.length){
    accumulator = (accumulator + Number(collection[index]));

    index++;
  }
  return accumulator;
}

var processSum = reduce(process.argv);

console.log(processSum);
