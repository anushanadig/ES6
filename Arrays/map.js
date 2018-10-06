/** 
 v ar new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

Due to the algorithm defined in the specification if the array which map was called upon is sparse,
 resulting array will also be sparse keeping same indices blank.
**/



var arr1 = [1,2,3];
console.log(arr1);
var arr2 = arr1.map(function(val){
    return val*2;
});
console.log(arr2);

// This example shows how to use map on a String to get an array of bytes in the 
// ASCII encoding representing the character values:

var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0); 
});
console.log(a);

var sqrArr= [4,16].map(Math.sqrt);
console.log(sqrArr);
//A JavaScript Optional Argument Hazard
//see - http://www.wirfs-brock.com/allen/posts/166
var arr = ["1","2","3","4"].map(parseInt);
console.log(arr);

arr = ["1","2","3"].map(val=>parseInt(val));
console.log(arr);