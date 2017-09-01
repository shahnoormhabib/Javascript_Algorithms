function smallestCommons(arr) {
  //noprotect
  var first;
  var sec;
  if(arr[0]>arr[1]){
    first=arr[1];
    sec=arr[0];
  }
  else
    {
      first=arr[0];
      sec=arr[1];
    }
  var index=first;
  var product=1;
  while(true)
  {
    product=sec*index;
    if(isCorrect(first, sec, product))break;
    index++;
    
  }
  return product;
}
function isCorrect(num1, num2, num3){
  for(var i=num1;i<num2;i++)
    if(num3%i!==0)return false;
  return true;
}

smallestCommons([1,13]);
