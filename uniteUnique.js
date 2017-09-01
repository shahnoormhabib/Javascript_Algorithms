function uniteUnique(arr) {
  var lArgs=arguments.length;
  var element=[];
  var newArray=[];
  var index=0;
  for(var i=0;i<lArgs;i++){
    lArray=arguments[i].length;
    for(var j=0;j<lArray;j++)
    {
    element.push(arguments[i][j]);
    }
  } //now element array has all the members of the multiple arrays
  lArgs=element.length;
  for(var k=0;k<lArgs;k++)
    if(isDouble(element, element[k],k))newArray.push(element[k]);
return newArray;  //newArray has only unique elements
}

function isDouble(element,a,m){
  for(var b=0;b<m;b++)
    if(element[b]===a)return false;
  return true;
}  

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
