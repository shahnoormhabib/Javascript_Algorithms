function myReplace(str, before, after) {
  //var newArray=str.split(' ');
  var Upper=false;
  var pos=str.indexOf(before);
  var char=str.charAt(pos);
  var charAfter='';
  if(char==char.toUpperCase())Upper=true;
  
  
  if(Upper){
    var newArray=after.split('');
    newArray[0]=after.charAt(0).toUpperCase();
    after=newArray.join('');
  }
  
  var n=str.replace(before, after);
  return n;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
