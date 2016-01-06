//  Christoph and Gabriel are starting a club but the only people who are invited are people with names longer than 6 characters. Use your filter function to tell which people are allowed in their club.

var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];

var each = function(collection, callback){
  var isArray = Array.isArray(collection);

  if (isArray){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else {
    for (var key in collection){
      callback(collection[key]);
    }
  }
};

var filter = function(collection, predicate){
  var results = [];

  each(collection, function(currentEl){
    if(predicate(currentEl)){
      results.push(currentEl);

    }
  });
  return results;
};

var filteredPeople = filter(people, function(person){
  return person.length > 6;
});

// each(people, function(person){
//   console.log(person);
// });

console.log(filteredPeople);
