// Use your each function to print all the values of mySea on a single line separated by a space.

var mySea = ["What's", "a", "pirate's", "favorite", "letter?"];

var each = function(collection, callback){
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

var pirateLine = "";

each(mySea, function(element){
  pirateLine += element + " ";

});

console.log(pirateLine);
