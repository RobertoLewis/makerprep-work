// Use Array#reduce to implement a simple version of Array#map.
module.exports = function arrayMap(arr, fn) {

     return arr.reduce(function(current, next){
        current.push(fn(next));
        return current;
     }, []);
   };
