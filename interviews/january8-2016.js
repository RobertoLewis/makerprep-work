// 1, 2, 3, 4, 5
//my object with three pairs, first name, age, favorite food

var myArray = [1, 2, 3, 4, 5];

var myObject = new Object();
myObject.firstName = "Roberto";
myObject.age = 40;
myObject.favoriteFood = "pizza";

// function print, log value to console
function print(value){
  console.log(value);
}

print(myArray[2]);

print(myObject.age);

print(myObject["age"]);


each(myArray, print)
//1
//2
//3
//4
//5



function each(collection, callback){
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
}


// reduce right - right to left instead of left to right


reduceRight([1, 2, 3, 4, 5], function(total, item) {return total-item;}, 5);
//-10

reduceRight([1, 2, 3, 4, 5], function(total, item) {return total-item;});
//-5

function reduce (collection, callback, initialValue){
var accumulator, index;

if (arguments >= 3){
		accumulator = initialValue;
    index = 0;

} else {
		accumulator = collection[0];
    index = 1;
}

		each(collection, function(currentEl){
			accumulator = callback(accumulator, currentEl);
      index++;
    })
		return accumulator;
}

reduceRight([1, 2, 3, 4, 7], function(total, item) {return total-item;});

function reduceRight(collection, iterator, memo) {
	//your code here

  if (arguments >= 3){
		accumulator = memo;
   	var i = (collection.length - 1);
} else {
		var i = collection.length - 2;
    accumulator = collection[collection.length - 1];
}

  for (i ; i >= 0; i--){
  		accumulator = callback(accumulator, collection[i]);
  }
	return accumulator;
}


jonathan.kvicky@makersquare.com

irving.barajas@makersquare.com
