// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
//
// ## Example
//
//     var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
//
//     console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

    function countWords(inputWords) {
        var results;
         results = inputWords.reduce(function(previousValue, currentValue){
          if(previousValue.hasOwnProperty(currentValue) === false){
            previousValue[currentValue] = 1;
            return previousValue;
          } else{
            previousValue[currentValue]++;
            return previousValue;
          }


         }, {});

         return results;
        }

        module.exports = countWords;
