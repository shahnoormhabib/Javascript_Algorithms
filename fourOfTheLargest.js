function largestOfFour(arr) {
  // You can do this!
  var lArray=4;
  var maxArray=[1,2,3,4];
  var max=0;
  for(var i=0;i<lArray;i++){
    max=0;
    for(var j=0;j<arr[i].length;j++)
    if(arr[i][j]>max)max=arr[i][j];
    maxArray[i]=max;
  }
  return maxArray;
}
