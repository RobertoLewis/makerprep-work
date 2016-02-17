// Implement Array#reduce using recursion.
//
// To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

function reduce(arr, fn, initial) {
    //if there are no items in the array remaining, return the initial value
      if (!arr.length){return initial;}
      // 'next' is the first item in the array
      var next = arr[0];
      //combining values with "initial" as the accumulator
      initial = fn(initial, next);
      //slice the rest of the array into "remainder"
      var remainder = arr.slice(1);
      //call reduce again with "remainder" as the new array.
      return reduce(remainder, fn, initial);

    }

    module.exports = reduce;
