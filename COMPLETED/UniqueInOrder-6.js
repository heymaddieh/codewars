// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
  if(typeof iterable === 'string'){
    var split = iterable.split('');
  
  } else {
    var split = iterable;
  };
  
  var newArray = [];
  
  for(var i=0; i<split.length; i++){
    if(split[i] !== split[i+1]){
      newArray.push(split[i]);
    }
  }
  return newArray;
}