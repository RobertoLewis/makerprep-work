function duckCount(args) {
   var ducks = Array.prototype.filter.call(arguments, function(argument){return Object.prototype.hasOwnProperty.call(argument, 'quack');});
  return ducks.length;
   }

    module.exports = duckCount;
