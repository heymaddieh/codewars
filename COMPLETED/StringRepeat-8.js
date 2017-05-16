// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  var string = s;
  var updatedString= s;
  for(var i = 1; i<n; i++){
    updatedString = updatedString + s;
  }
  
  return updatedString;
}