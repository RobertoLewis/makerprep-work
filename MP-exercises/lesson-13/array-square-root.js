// Use your map function to create a new array containing the square root of each element in numbersR.

var numbersR = [36, 81, 3481, 1681];

var each = function (collection, callback){
  var isArray = Array.isArray(collection);

  if(isArray){
    for(var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else {
    for (var key in collection){
      callback(collection[key]);
    }
  }
};

var map = function(collection, callback){
  var results = [];

  each(collection, function(currentEl){
    results.push(callback(currentEl));
  });
  return results;
};

var squarer = function(number){
  return number * number
};

var squaredArray = map(numbersR, Math.sqrt);

console.log(squaredArray);
console.log(squarer(41));
console.log(squarer(59));
