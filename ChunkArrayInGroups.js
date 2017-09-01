function chunkArrayInGroups(arr, size) {
  // Break it up.
  var lArray=arr.length;
  console.log("Array size "+lArray);
  var gbArray=[1];
  gbArray[0]=arr.slice(0,size);
  var iCount=1;
  
  console.log("Array "+gbArray);
  for(var i=size;i<lArray;i+=size)
  gbArray.push(arr.slice(i,i+size));
  return gbArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);