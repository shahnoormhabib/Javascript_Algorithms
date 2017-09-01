function sumAll(arr) {
  var lArray=arr.length;
  var maxArray=0;
  var minArray=10e7;
  for(var i=0;i<lArray;i++){
    if(arr[i]>maxArray)maxArray=arr[i];
    if(arr[i]<minArray)minArray=arr[i];
  }
  var sum=0;
  for(var j=minArray;j<=maxArray;j++)
  sum+=j;
    return sum;
}

sumAll([1, 4]);