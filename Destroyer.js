var remElements=[2,3];
var lArray=0;
function destroyer(arr) {
  // Remove all the values
  lArray=arguments.length;
  var newArray=arguments[0];
  for(var i=1;i<lArray;i++)
    remElements[i-1]=arguments[i];
  lArray=newArray.filter(RemoveElements);
  return lArray;
}
function RemoveElements(value){
  for(var i=0;i<lArray-1;i++)
    if(value===remElements[i])return false;
  return true;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
