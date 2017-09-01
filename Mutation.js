function mutation(arr) {
  var fStr=arr[0].toLowerCase();
  var sStr=arr[1].toLowerCase();
  var fArray=fStr.split('');
  var sArray=sStr.split('');
  var sF=sArray.length;
  var findArray=[1];
  for(var i=0;i<sF;i++)
    findArray[i]=false;
  for(i=0;i<sF;i++)
    if(fStr.indexOf(sArray[i])>=0)findArray[i]=true;
  for(i=0;i<sF;i++)
    if(!findArray[i])return false;
    
  return true;
}