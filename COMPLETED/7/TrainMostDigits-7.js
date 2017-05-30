// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  var highest = array[0];
  var highestInt = array[0].toString().length
  for(var i=0; i<array.length; i++){
    var now = array[i].toString().length;
    
    for(var j=1; j<array.length; j++){
      var next = array[j].toString().length;
      
      if(highest === 0){
          highestInt = now
          highest = array[i];
          
      } else if(next > highestInt){
          highest = array[j];
          highestInt = next
      }
    }
  }
  return highest;
}

