// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    //code here
    var lowerCase = str.toLowerCase().split("");
    var exes = [];
    var ohs = [];
    for (var i = 0; i<lowerCase.length; i++){
      if (lowerCase[i] === "x"){
        exes.push(lowerCase[i]);
        
      } else if (lowerCase[i] === "o"){
        ohs.push(lowerCase[i]);
      }
      }
      
      if(exes.length === ohs.length){
        return true;
      } else {
        return false;
      }
      
      
}