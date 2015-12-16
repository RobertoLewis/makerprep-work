
//     Write a program that console.log's the numbers from 1 to 100
//     Now for numbers that are multiples of three print "Fizz" instead of that number
//     For the multiples of five print "Buzz" instead of that number
//     For numbers which are multiples of both three and five print "FizzBuzz"

var counter = 1;
while (counter <= 100 ){
  if(counter % 3 === 0 && counter % 5 === 0){
    console.log("FizzBuzz");
    counter++;
  } else if (counter % 5 === 0){
    console.log("Buzz");
    counter++;
  } else if (counter % 3 === 0 ) {
    console.log("Fizz");
    counter++;
  } else {
    console.log(counter);
    counter++;
  }


}
