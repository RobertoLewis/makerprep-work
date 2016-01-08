var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];



// b. Tom and Neil got jealous that they couldn't get into Christoph and Gabriel's club so they decided to start their own club but only let people in whose names (in ascii numbers) are at most 400.

// Note: To translate a character to ascii: "A".charCodeAt(0); // 65

// Note: To translate ascii number to character(s): String.fromCharCode(97); // a String.fromCharCode(74, 111, 121); // Joy

// Use your your filter function to tell which people are allowed in their club.

//---

// each
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


// map
var map = function(collection, callback){
  var results = [];

  each(collection, function(currentEl){
    results.push(callback(currentEl));
  });
  return results;
};

// filter
var filter = function (collection, predicate){
  var results = [];

  each(collection, function(currentEl){
    if(predicate(currentEl)){
      results.push(currentEl);
    }
  });
  return results;
};

// translates an individual name into an ASCII value
var asciiTranslate = function(string){
  var newArray = [];

   for (var i = 0; i < string.length; i++){
     newArray.push(string.charCodeAt(i));
   }
  return newArray;
  };



//takes a translated array and adds it
var arrayNumberAdd = function(translatedArray){
  var total = 0;
  each(translatedArray, function(number){
    total = number + total;
  });
  return total;
};


 var stringAsciiTotal = function(string){
   var arrayOne = asciiTranslate(string);
   var total = arrayNumberAdd(arrayOne);

 return total;
  };



// filter predicate
var isInTheClub = function (string) {

  return stringAsciiTotal(string) < 400;
};


var newClub = filter(people, isInTheClub);

console.log(newClub);

// iterate over people array - each
// iterate over each string - map
//translate each string into ASCII
// Add Ascii values
//if Ascii values total > 400, return the string

// push qualifying strings into results array
// log the results array
