function getIndexToIns(arr, num) {
  arr.sort(function(a, b){return a-b});
  var lArray=arr.length;
  var iIndex=0; 
  for(var i=0;i<lArray;i++)
    { 
      if(arr[i]===num)return i;
      if(arr[i]<num && arr[i+1]>num)return i+1; 
    }
  // Find my place in this sorted array
  
  return lArray;
}