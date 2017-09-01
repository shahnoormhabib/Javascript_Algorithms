//Caesars Cipher
function rot13(str) { // LBH QVQ VG!
  var lengthStr=str.length;
  var codeAscii;
  var newStr=[];
  for(var i=0;i<lengthStr;i++)
    {
      codeAscii=str.charCodeAt(i);
      if(codeAscii>=65 && codeAscii<=77)
        {newStr[i]=String.fromCharCode(codeAscii+13);
        }
      else if(codeAscii>77)
        {
          newStr[i]=String.fromCharCode(codeAscii-13);
        }
      else
        newStr[i]=str[i];
    }
  str=newStr.join('');
  return str;
}
