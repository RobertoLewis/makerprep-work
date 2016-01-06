//  Use your map function to return an array with a 'Mr.', 'Ms.', or 'Mrs.' before the mouses name.

var mice = [
  {name: "Longtail"},
  {name: "Sharpteeth"},
  {name: "Smellypee"},
  {name: "Twinkle Fingers"}
];


console.log(mice);

var each = function(collection, callback){
  var isArray = Array.isArray(collection);

  if(isArray){
    for (var i = 0; i < collection.length; i++){
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

var randomSalutation = function(){

  var random = Math.floor(Math.random() * 10);



   if (random > 6){
     return "Mr. ";
   } else if (random < 4){
     return "Mrs. ";
   } else {
     return "Ms. ";
   }

};

console.log(randomSalutation());

// console.log(salutation);

 var mouseSalutation = map(mice, function(mouse){

   return  randomSalutation() + mouse.name;
 });

console.log(mouseSalutation);
console.log(mice);
