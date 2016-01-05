var myObj = {
  name: "object",
  shape: "squircle",
  color: "coquelicot",
  heightInCM: 20.4,
  exists: true

};

//  Use your each function to iterate over myObj and log each value but with an octothorpe before it:

var each = function (collection, callback){
  isArray = Array.isArray(collection);

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

var octoObject = each(myObj, function(key){
  console.log("#" + key);
});
