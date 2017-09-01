function steamrollArray(arr) {
  // I'm a steamroller, baby  
  return flatten(arr);
}
function flatten(arr){
  var newArray=[];
  var tempArray=[];
  for(var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
     tempArray=flatten(arr[i]);
     for(var j=0;j<tempArray.length;j++) 
        newArray.push(tempArray[j]);
    }
    else if (typeof arr[i]!=='undefined' || arr[i]!==null) 
      newArray.push(arr[i]);
  }
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
