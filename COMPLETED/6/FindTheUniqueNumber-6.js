// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.


function findUniq(arr) {
  for(var i = 0; i<arr.length; i++){
    for(var j = i+1; j<arr.length; j++){
      if(arr[0] !== arr[1,2]){
        console.log(arr[0])
        return arr[0]
      } else if(arr[j]!== arr[i]) {
        console.log(arr[j])
        return arr[j]
        
      }
    }
  }
}

findUniq([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ])