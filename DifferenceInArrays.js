function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var lA1=arr1.length;
  var lA2=arr2.length;
  var jStart=0;
  for(var i=0;i<lA1;i++)
    for(var j=jStart;j<lA2;j++)
      {
        if(arr1[i]==arr2[j]){
          newArr.push(arr1[i]);
          jStart=j++;
          break;
        }
        
      }
  var diffA1=arr1.filter(function(value){
    var lA=newArr.length;
    for(var i=0;i<lA;i++)
      if(value==newArr[i])return false;
    return true;
  });
  var diffA2=arr2.filter(function(value){
    var lA=newArr.length;
    for(var i=0;i<lA;i++)
      if(value==newArr[i])return false;
    return true;
  });
  return diffA1.concat(diffA2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
