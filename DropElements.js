function dropElements(arr, func) {
  
  // Drop them elements.
  //find elements that satisf the function
  var newArray=arr.filter(func);
  var lNewArray=newArray.length;
 //find the index of the first element in the original array that satisfied the criteria
  var max;
  for(var j=0;j<arr.length;j++)
    if(arr[j]==newArray[0]){
      max=j;//index of the first element that satisfied the criteria
      break;
    }
  //remove all the elements till the first element that satisfied the criteria
  var sliced=arr.slice(0,max);
   for(var i=0;i<sliced.length;i++)
    arr.shift();
  return arr;
}

dropElements([0,1,0,1], function(n) {return n ===1; });
