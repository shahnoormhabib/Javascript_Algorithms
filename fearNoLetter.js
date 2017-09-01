function fearNotLetter(str) {
  //ascii code a=97
  var lStr=str.length;
  var first=str.charCodeAt(0);
  var ans;
  var i;
  for(i=1;i<lStr;i++)
    {
      ans=str.charCodeAt(i);
      if(ans===first+1)first++;//checking if next character is sequential to the last character
      else break;
    }
  if(i==lStr)return;
  else
  return String.fromCharCode(ans-1);//missing character
}

fearNotLetter("abce");