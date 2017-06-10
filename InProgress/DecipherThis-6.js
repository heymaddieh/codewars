// Decipher this!
// You are given several secret messages you need to decipher. Here are the conditions:

// The first letter corresponds to ASCII character code (case sensitive)
// The second letter needs to be switched to the last letter
// The last letter needs to be switched to the second letter
// If it only has one letter, it will be unchanged
// If it only has two letters, you will just need to convert the ASCII character code to a letter
// Keepin' it simple -- there are no special characters

// Example:
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  var newStr = [];
  var splitStr = str.split(' ');/* Split string into an array of the words in the string */
  for(var i = 0; i<splitStr.length; i++){ /*Loop through the splitStr array to analyze each word individually.*/
    var number = splitStr[i].match(/\d+/g).map(Number)/* Singles out the number in the string */
    var letter = String.fromCharCode(number) /* Converts the number into a letter of the alphabet */
    var letters = []
    var splitWord = splitStr[i].split('')
    
    for(var j = 0; j<splitWord.length; j++){
      if(splitWord[j] >= 0 && splitWord[j] <= 9){
      } else {
        letters.push(splitWord[j])
      }
    }
    letters[0] = [letters[letters.length-1],letters[letters.length-1]=letters[0]][0]
    letters.unshift(letter)
    newStr.push(letters.join(''))
  }
  return newStr.join(' ')
}; 

decipherThis('72olle 103doo 100ya');