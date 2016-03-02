// Override a specified method of an object with new functionality while still maintaining all of the old behaviour.
//
// Create a spy that keeps track of how many times a function is called.

function Spy(target, method) {
   var spyObject = {}, callCount = 0;
   spyObject.count = callCount;
   
   return spyObject;
   }

   module.exports = Spy;
