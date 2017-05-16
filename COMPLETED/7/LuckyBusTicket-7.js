// In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

// isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
// isLucky('12341234') => false // Only six-digit numbers allowed :(
// isLucky('12a21a') => false // Letters are not allowed :(
// isLucky('100200') => false // :(
// isLucky('22') => false // :(
// isLucky('abcdef') => false // :(


function isLucky(ticket) {
  
  
  var ticketArr = ticket.split('');
  var num1 =[];
  
    
    for(var i = 0; i<ticketArr.length; i++){
      num1.push(Number(ticketArr[i] *1));
      
    }
    
  
  var secondHalf = num1.splice(3, 3);
  
    
    
  
  var sum1= num1[0] + num1[1] + num1[2];
        
  var sum2= secondHalf[0] + secondHalf[1] + secondHalf[2];
  
  
        
  if(sum1 === sum2){
    return true;
  } else {
    return false;
  }

}