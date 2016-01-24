// Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      result = numbers.map(function(number){
          return number * 2;
      })
      return result
    }

    module.exports = doubleAll
