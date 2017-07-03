// Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

// 'mean' - in case mean value is larger than median value
// 'median' - in case median value is larger than mean value
// 'same' - in case both mean and median share the same value
// Reminder: Median

// Array will always be valid (odd-length >= 3)

function meanVsMedian(numbers) {
  var mean = (numbers.reduce(function(sum, value){return sum + value}, 0))/numbers.length;
  
  var sort = numbers.sort(function(a,b) {return a - b;});
  var half = Math.floor(numbers.length/2);
  var median;
  if(sort.length % 2){
      median = sort[half];
    }else{
      median = (sort[half-1] + sort[half]) / 2.0;
    }
    
  if(median === mean){
    return 'same';
  } else if(median > mean){
    return 'median';
  } else {
    return 'mean'
  }
}