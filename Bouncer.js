function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr=arr.filter(FindRightVale);
  
  return arr;
}
function FindRightVale(value){
  var Array=[false,null,0,"", undefined,NaN];
  
  if(!value)return false;
  return true;
}