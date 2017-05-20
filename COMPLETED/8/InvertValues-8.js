// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// Python/JS/PHP/Java:

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers (and for C/C++: that all values are greater than INT_MIN).

function invert(array) {
var newArr =[];
  for(var i = 0; i<array.length; i++){
    if(array[i] > 0){
      newArr.push(-Math.abs(array[i]))
    } else {
      newArr.push(Math.abs(array[i]));
    }
  }
   return newArr;
}