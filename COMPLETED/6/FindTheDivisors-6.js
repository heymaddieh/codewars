// Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

// Example:

// divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"
// You can assume that you will only get positive integers as inputs.

function divisors(integer) {
    var possDiv =[];
    var divs = [];
    for(var i=1; i<=integer; i++){
      possDiv.push(i);
    }
      
      
    for(var j=0;j<possDiv.length;j++){
      if(integer%possDiv[j] === 0){
        divs.push(possDiv[j]);
        
      }
    }
    
    if(divs[0] === 1 && divs[1] === integer){
      return integer + " is prime";
    } else {
      divs.shift();
      divs.pop();
      
      return divs;
    }
    
    
    
}